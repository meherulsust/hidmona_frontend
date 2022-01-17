import { PropsWithChildren } from 'react';
import Header from './header';

const SiteLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main className="max-w-6xl py-8 mx-auto">{children}</main>
    </>
  );
};

export default SiteLayout;
