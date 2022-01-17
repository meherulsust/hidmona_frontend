import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { NextAppProps } from 'next/app';
import { Provider as SessionProvider, useSession } from 'next-auth/client';

import SiteLayout from 'layouts/siteLayout';
import RouteChangeIndicator from 'components/RouteChangeIndicator';
import ReactQueryProvider from 'components/ReactQueryProvider';
import ApiClientProvider from 'components/ApiClientProvider';
import Spinner from 'components/Spinner';
import '../styles/globals.css';

// Set proper display name for devtools
SessionProvider.displayName = 'SessionProvider';

function getDefaultLayout(children: ReactNode): ReactNode {
  return <SiteLayout>{children}</SiteLayout>;
}

function AuthManager({
  Component,
  children,
  router,
}: PropsWithChildren<NextAppProps>) {
  const [session, loading] = useSession();
  const { redirectIfAuthenticated = false, requiresAuth = true } =
    Component.pageOptions || {};

  useEffect(() => {
    if (loading) return;

    if (requiresAuth && !session) {
      router.replace(
        `/auth/login?callbackUrl=${encodeURIComponent(window.location.href)}`
      );
      return;
    }

    if (!!session && redirectIfAuthenticated) {
      router.replace((router.query.callbackUrl as string) || '/dashboard');
      return;
    }
  }, [loading, redirectIfAuthenticated, requiresAuth, router, session]);

  if (
    loading ||
    (requiresAuth && !session) ||
    (!!session && redirectIfAuthenticated)
  ) {
    return (
      <main className="flex items-center justify-center h-screen">
        <Spinner className="w-20 h-20 text-primary-700" />
      </main>
    );
  }

  return <>{children}</>;
}

function MyApp(props: NextAppProps) {
  const { Component, pageProps } = props;

  const renderAppLayout = () => {
    const children = <Component {...pageProps} />;
    const { getLayout = getDefaultLayout } = Component.pageOptions || {};

    return getLayout(children);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <AuthManager {...props}>
        <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
          <ApiClientProvider>{renderAppLayout()}</ApiClientProvider>
        </ReactQueryProvider>
        <RouteChangeIndicator />
      </AuthManager>
    </SessionProvider>
  );
}

export default MyApp;
