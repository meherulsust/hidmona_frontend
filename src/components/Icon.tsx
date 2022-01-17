import React, { SVGAttributes } from 'react';

export type IconName = keyof typeof IconComponentMappings;

interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Icon name to render
   */
  name: IconName;
  /**
   * Additional classes for icon styling
   */
  className?: string;
}

const IconComponentMappings = {
  dashboard: DashboardIcon,
  'user-group': UserGroupIcon,
  'pencil-alt': PencilAltIcon,
  trash: TrashIcon,
  mail: MailIcon,
  password: PasswordIcon,
  lock: LockIcon,
  'clipboard-list': ClipBoardIcon,
  adjustments: AdjustmentsIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-down': ChevronDownIcon,
  search: SearchIcon,
  x: XIcon,
  eye: ViewIcon,
  'eye-off': EyeOffIcon,
  'user-circle': UserCircle,
};

export default function Icon({ name, className = '', ...others }: IconProps) {
  const Component = IconComponentMappings[name];

  if (!Component) return null;

  return <Component className={className} {...others} />;
}

function UserCircle(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function EyeOffIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
        clipRule="evenodd"
      />
      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
    </svg>
  );
}

function ViewIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronDownIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function DashboardIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M10.039 16a1.1 1.1 0 01-1.1-1.1v-4.861a1.1 1.1 0 011.1-1.1H14.9a1.1 1.1 0 011.1 1.1V14.9a1.1 1.1 0 01-1.1 1.1zm.157-1.255h4.549V10.2H10.2zM1.1 16A1.1 1.1 0 010 14.9v-4.861a1.1 1.1 0 011.1-1.1h4.861a1.1 1.1 0 011.1 1.1V14.9a1.1 1.1 0 01-1.1 1.1zm.157-1.255H5.8V10.2H1.255zm8.785-7.686a1.1 1.1 0 01-1.1-1.1V1.1a1.1 1.1 0 011.1-1.1H14.9A1.1 1.1 0 0116 1.1v4.861a1.1 1.1 0 01-1.1 1.1zM10.2 5.8h4.549V1.255H10.2zM1.1 7.059A1.1 1.1 0 010 5.961V1.1A1.1 1.1 0 011.1 0h4.861a1.1 1.1 0 011.1 1.1v4.861a1.1 1.1 0 01-1.1 1.1zM1.255 5.8H5.8V1.255H1.255z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserGroupIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="30.155"
      height="15.706"
      viewBox="0 0 30.155 15.706"
      {...props}
    >
      <defs></defs>
      <g transform="translate(-3713.645 102)">
        <g transform="translate(3713.645 -102)">
          <g transform="translate(22.616 1.885)">
            <path
              style={{ fill: 'inherit' }}
              d="M20.513,13.026a2.513,2.513,0,1,1,2.513-2.513A2.52,2.52,0,0,1,20.513,13.026Zm0-3.769a1.187,1.187,0,0,0-1.256,1.256,1.256,1.256,0,0,0,2.513,0A1.187,1.187,0,0,0,20.513,9.256Z"
              transform="translate(-18 -8)"
            />
          </g>
          <g transform="translate(22.616 8.167)">
            <path
              style={{ fill: 'inherit' }}
              d="M24.911,18.026a.594.594,0,0,1-.628-.628V16.141A1.932,1.932,0,0,0,22.4,14.256H18.628a.628.628,0,1,1,0-1.256H22.4a3.111,3.111,0,0,1,3.141,3.141V17.4A.594.594,0,0,1,24.911,18.026Z"
              transform="translate(-18 -13)"
            />
          </g>
          <g transform="translate(2.513 1.885)">
            <path
              style={{ fill: 'inherit' }}
              d="M4.513,13.026a2.513,2.513,0,1,1,2.513-2.513A2.52,2.52,0,0,1,4.513,13.026Zm0-3.769a1.187,1.187,0,0,0-1.256,1.256,1.187,1.187,0,0,0,1.256,1.256,1.187,1.187,0,0,0,1.256-1.256A1.187,1.187,0,0,0,4.513,9.256Z"
              transform="translate(-2 -8)"
            />
          </g>
          <g transform="translate(0 8.167)">
            <path
              style={{ fill: 'inherit' }}
              d="M.628,18.026A.594.594,0,0,1,0,17.4V16.141A3.111,3.111,0,0,1,3.141,13H6.911a.628.628,0,1,1,0,1.256H3.141a1.932,1.932,0,0,0-1.885,1.885V17.4A.594.594,0,0,1,.628,18.026Z"
              transform="translate(0 -13)"
            />
          </g>
          <g transform="translate(11.308 0)">
            <path
              style={{ fill: 'inherit' }}
              d="M12.769,14.039A3.7,3.7,0,0,1,9,10.269,3.7,3.7,0,0,1,12.769,6.5a3.7,3.7,0,0,1,3.769,3.769A3.7,3.7,0,0,1,12.769,14.039Zm0-6.282a2.513,2.513,0,1,0,2.513,2.513A2.52,2.52,0,0,0,12.769,7.756Z"
              transform="translate(-9 -6.5)"
            />
          </g>
          <g transform="translate(8.167 9.423)">
            <path
              style={{ fill: 'inherit' }}
              d="M19.693,20.282a.594.594,0,0,1-.628-.628V17.141a1.932,1.932,0,0,0-1.885-1.885H9.641a1.932,1.932,0,0,0-1.885,1.885v2.513a.594.594,0,0,1-.628.628.594.594,0,0,1-.628-.628V17.141A3.111,3.111,0,0,1,9.641,14H17.18a3.111,3.111,0,0,1,3.141,3.141v2.513A.594.594,0,0,1,19.693,20.282Z"
              transform="translate(-6.5 -14)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function PencilAltIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

function TrashIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

function MailIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PasswordIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      />
    </svg>
  );
}

function LockIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function ClipBoardIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  );
}

function AdjustmentsIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  );
}
