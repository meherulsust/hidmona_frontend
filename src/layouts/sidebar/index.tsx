import React, { useState } from 'react';
import Img from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

import { VSDropdown } from '@common';
import { getUserInitials } from 'utils/helpers';

import Icon from 'components/Icon';

import {
  projectPermissions,
  useShowPermission,
} from 'lib/client/permissionsManager';

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
            <Link href="/user_groups" passHref>
              <button
                className="flex items-center w-full px-4 py-2 text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                data-bs-target="#dashboardCollapse"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="dashboardCollapse"
              >
                <span>
                  <Icon name="pencil-alt" className="flex w-4 h-4" />
                </span>
                <span className="ml-2 font-medium">User Groups</span>
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
                   
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className="ml-2 font-medium">Users</span>
              <span className="ml-auto">
                <svg
                  className="w-4 h-4 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {userIsOpen ? (
              <ul className="collapse  text-[14px]" id="dashboardCollapse">
                <li className="">
                  <Link href="/invitation" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      User Invitation
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/users" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      All User
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/admin-list" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      Admin List
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/assigned-person" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      Assigned User
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/customers" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      Customer List
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>

          <li>
            <Link href="/tickets" passHref>
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
                <span className="ml-2 font-medium">Tickets</span>
              </button>
            </Link>
          </li>

          <li>
            <Link href="/department" passHref>
              <button
                className="flex items-center w-full px-4 py-2 text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                data-bs-target="#dashboardCollapse"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="dashboardCollapse"
              >
                <span>
                  <Icon name="pencil-alt" className="flex w-4 h-4" />
                </span>
                <span className="ml-2 font-medium">Department</span>
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
              onClick={serviceOpenCloseHandler}
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
                    
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className="ml-2 font-medium">Services</span>
              <span className="ml-auto">
                <svg
                  className="w-4 h-4 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {serviceIsOpen ? (
              <ul className="collapse text-[14px]" id="dashboardCollapse">
                <li>
                  <Link href="/service" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      Service List
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/service_categories" passHref>
                    <a
                      href="replace"
                      className="flex px-6 py-1 pl-12 font-medium text-gray-600 transition bg-gray-100 hover:bg-gray-200 "
                    >
                      Service Categories
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>

          <li>
            <Link href="/priorities" passHref>
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
                <span className="ml-2 font-medium">Priorities</span>
              </button>
            </Link>
          </li>
          {useShowPermission(
            projectPermissions.organization.viewOrganization
          ) && (
            <li>
              <Link href="/organizations" passHref>
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
                  <span className="ml-2 font-medium">Organizations</span>
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
