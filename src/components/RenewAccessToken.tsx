import { useSession } from 'next-auth/client';
import { useEffect } from 'react';

const RenewAccessToken = () => {
  const [session] = useSession();

  const triggerSessionUpdate = () => {
    if (document.hidden) {
      /**
       * If document is hidden, triggering `visibilitychange` event won't do
       * anything. So reload the page instead.
       */
      window.location.reload();
      return;
    }

    /**
     * NextAuth does not provide any way to update the session context.
     * So we're triggering a document event manually that NextAuth is listening.
     *
     * https://github.com/nextauthjs/next-auth/issues/596#issuecomment-943453568
     */
    const event = new Event('visibilitychange');
    document.dispatchEvent(event);
  };

  useEffect(() => {
    if (!session) return;

    const currentTime = Date.now();
    const expiryTime = new Date(session.tokenExpiryTime).getTime();
    const diff = expiryTime - currentTime;

    if (diff <= 0) return;

    const timer = setTimeout(triggerSessionUpdate, diff);

    return () => {
      clearTimeout(timer);
    };
  }, [session]);

  return null;
};

export default RenewAccessToken;
