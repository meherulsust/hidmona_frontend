import { useRouter } from 'next/router';
import makeRequest from '@@utils/makeRequest';
import { axiosInstance } from './../utils/makeRequest';
import store, { RootState } from './../store';
import { useState, useEffect } from 'react';
import { useAppSelector } from './useAppSelector';
import { getRefreshToken } from '@@utils/authUtils';
import { setLoginError, setLoginSuccess } from '@@store/reducers/authSlice';
const baseURL = process.env.API_BASE_URL;

const useAuth = ({ required } = { required: false }) => {
  const authState = useAppSelector((state: RootState) => state.auth);
  const [profile, setProfile] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    return window['__profile'] || null;
  });
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window['__profile'])
  );
  const router = useRouter();

  const getProfile = async () => {
    if (typeof window !== 'undefined') {
      if (window['__profile']) {
        setLoading(false);
        setProfile(window['__profile']);
        return Promise.resolve(window['__profile']);
      }
    }
    const payload = {
      url: `auth/users/me`,
      method: 'get',
    };
    try {
      setLoading(true);
      const resp = await makeRequest(payload);
      console.log(resp);
      if (typeof window !== 'undefined') {
        window['__profile'] = resp.data;
      }
      setProfile(window['__profile']);
      setLoading(false);
      return resp.data;
    } catch (err) {
      console.error(err);
      if (typeof window !== 'undefined') {
        window['__profile'] = null;
      }
      setProfile(window['__profile']);
      setLoading(false);
      return null;
    }
  };

  const signIn = () => {
    router.push('/auth/login');
  };

  useEffect(() => {
    if (!loading && profile) {
      return;
    }
    setLoading(true);
    let isMounted = true;

    getProfile().then((profile) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !profile) {
          signIn();
          return;
        }
        setProfile(profile);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    ...authState,
    profile,
    loading,
    getProfile,
    signIn,
  };
};

export default useAuth;
