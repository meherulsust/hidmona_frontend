import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPageComponent,
} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getCsrfToken } from 'next-auth/client';

import LoginForm from 'features/auth/loginForm';

const Login: NextPageComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ csrfToken }) => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="flex items-center justify-center min-h-screen">
        <section className="max-w-5xl p-8 bg-white border shadow rounded-md">
          <div className="flex flex-col items-center">
            <Image src="/logo.png" width={125} height={53} />

            <h2 className="text-xl font-normal mt-2">Admin Panel</h2>
          </div>

          <LoginForm csrfToken={csrfToken || ''} />
        </section>
      </main>
    </>
  );
};

Login.pageOptions = {
  redirectIfAuthenticated: true,
  requiresAuth: false,
  getLayout: (children) => children,
};

export default Login;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      csrfToken,
    },
  };
}
