import Img from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

import { VSDropdown } from '@common';
import { getUserInitials } from 'utils/helpers';

const Header = () => {
  const [session] = useSession();
  const email = session?.user?.email;

  const handleLogout = () => {
    signOut({ callbackUrl: `${window.location.origin}/auth/login` });
  };
  return (
    <header className="w-full sticky top-0 z-30 h-[70px] mx-auto shadow bg-white px-4">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto float-right">
        
        <ul className="flex items-center space-x-2 float-right">
          
          <li>
            <VSDropdown className="ml-4">
              <VSDropdown.Toggle
                as="button"
                className="flex items-center focus:outline-none"
              >
               
                
              <img
                className="w-12 h-12 p-px flex items-center justify-center rounded-full neumorphism-shadow"
                src="https://avatars.githubusercontent.com/u/24874978?v="
                alt="Md.Meherul Islam"
                
              />
              </VSDropdown.Toggle>
              <VSDropdown.Menu className="w-32 divide-y">
                <VSDropdown.Item
                  onClick={handleLogout}
                  className="w-full text-left px-2"
                >
                  Log out
                </VSDropdown.Item>
              </VSDropdown.Menu>
            </VSDropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
