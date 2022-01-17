import Img from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

import { VSDropdown } from '@common';
import { getUserInitials } from 'utils/helpers';

const Header = () => {
  const [session] = useSession();
  const username = session?.fullName as string;
  const email = session?.email;

  const handleLogout = () => {
    signOut({ callbackUrl: `${window.location.origin}/auth/login` });
  };
  return (
    <header className="w-full sticky top-0 z-30 h-[70px] mx-auto shadow bg-white px-4">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div>
          <Link href="/" passHref>
            <a href="replace">
              <Img src="/logo.png" alt="" width="125" height="53" />
            </a>
          </Link>
        </div>
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/dashboard" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/assigned-person" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Assigned Person
              </a>
            </Link>
          </li>
          <li>
            <Link href="/customers" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Customers
              </a>
            </Link>
          </li>
          <li>
            <Link href="/department" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Department
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tickets" passHref>
              <a
                href="replace"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                Tickets
              </a>
            </Link>
          </li>
          <li>
            <VSDropdown>
              <VSDropdown.Toggle
                as="button"
                className="flex items-center focus:outline-none"
              >
                <span className="capitalize">{username ?? email}</span>
                <span className="flex items-center justify-center ml-2 text-lg text-white rounded-full bg-primary w-9 h-9">
                  {getUserInitials(username ?? email)}
                </span>
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
