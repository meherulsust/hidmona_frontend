import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';
import LoginInput from 'components/LoginInput';
import { VSButton } from '@common';

interface Props {
  csrfToken: string;
}

const LoginForm = ({ csrfToken }: Props) => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const [processing, setProcessing] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { query } = useRouter();
  const callbackUrl =
    query.callbackUrl || `${window.location.origin}/dashboard`;

  const isDisabled =
    processing || !inputData.email.trim() || !inputData.password.trim();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    setProcessing(true);
  };

  return (
    <form
      method="post"
      action="/api/auth/callback/credentials"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      {query.error && (
        <p className="text-xs text-red-600 text-center">
          Invalid email or password provided
        </p>
      )}
      {query.reason === 'session_expired' && (
        <p className="text-xs font-medium text-red-600 text-center">
          Session expired, login again to continue
        </p>
      )}
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      <input type="hidden" name="callbackUrl" defaultValue={callbackUrl} />
      <LoginInput
        spellCheck={false}
        label="Email"
        type="email"
        name="email"
        value={inputData.email}
        onChange={handleInputChange}
        iconName="mail"
      />
      <LoginInput
        showPasswordIcon
        label="Password"
        iconName="password"
        name="password"
        autoComplete="current-password"
        type={isShowPassword ? 'text' : 'password'}
        showPasswordIconName={isShowPassword ? 'eye-off' : 'eye'}
        value={inputData.password}
        onChange={handleInputChange}
        onHandleShowPassword={() => setIsShowPassword(!isShowPassword)}
      />
      <div>
        <VSButton
          block
          type="submit"
          className="uppercase"
          disabled={isDisabled}
        >
          <span className="text-md bold">Login</span>
        </VSButton>
      </div>
    </form>
  );
};

export default LoginForm;
