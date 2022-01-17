import { PropsWithChildren } from 'react';
import Header from './header';
import Sidebar from './sidebar';

const SiteLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <div className="flex justify-between text-gray-100 bg-gray-800 md:hidden">
          <a href="#" className="block p-4 font-bold text-white">
            STS
          </a>
          <button className="p-4 mobile-menu-button focus:outline-none focus:bg-gray-700">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <Sidebar />
          <main className="flex-1 p-4 bg-white-400">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default SiteLayout;
