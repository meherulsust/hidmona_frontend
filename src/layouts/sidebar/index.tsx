import Icon from 'components/Icon';
import { signOut, useSession } from 'next-auth/client';
import Img from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SideBar = () => {
  const [session] = useSession();
  const username = session?.user?.fullName as string;
  const email = session?.user?.email;

  const [userIsOpen, setUserIsOpen] = useState(false);
  const [serviceIsOpen, setServiceIsOpen] = useState(false);

  const userOpenCloseHandler = () => {
    if (userIsOpen) {
      setUserIsOpen(false);
    } else {
      setUserIsOpen(true);
    }
  };

  const serviceOpenCloseHandler = () => {
    if (serviceIsOpen) {
      setServiceIsOpen(false);
    } else {
      setServiceIsOpen(true);
    }
  };

  const handleLogout = () => {
    signOut({ callbackUrl: `${window.location.origin}/auth/login` });
  };

  React.useEffect(() => {
    // grab everything we need
    const btn = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');

    // add our event listener for the click
    btn?.addEventListener('click', () => {
      sidebar?.classList.toggle('-translate-x-full');
    });
  }, []);

  return (
    <div className="absolute inset-y-0 left-0 w-64 py-1 text-blue-100 transition duration-200 ease-in-out transform -translate-x-full bg-gray-100 px-21 space-y-7 sidebar md:relative md:translate-x-0">
      <Link href="/" passHref>
        <a
          href="replace"
          className="flex items-center px-2 space-x-2 text-white"
        >
          <Img src="/logo.png" alt="" width="125" height="53" />
        </a>
      </Link>

      <nav>
        <ul className="max-h-full p-2 space-y-1 overflow-y-auto ">
          <li>
            <Link href="/dashboard" passHref>
              <button
                className="flex items-center w-full px-4 py-2 text-gray-600 transition bg-gray-100 hover:bg-gray-200"
                data-bs-target="#dashboardCollapse"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="dashboardCollapse"
              >
                <span>
                  <Icon name="pencil-alt" className="flex w-4 h-4" />
                </span>
                <span className="ml-2 font-medium">Dashboard</span>
              </button>
            </Link>
          </li>

          <li>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
              data-bs-target="#dashboardCollapse"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="dashboardCollapse"
              onClick={userOpenCloseHandler}
            >
              <span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1"
                    d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"
                  />
                </svg>
              </span>
              <span className="ml-2 font-medium">User Management</span>
              <span className="ml-auto">
                <svg
                  className="w-4 h-4 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {userIsOpen ? (
              <ul className="collapse  text-[14px]" id="dashboardCollapse">
                <li>
                  <Link href="/admin/user-list" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      User List
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
