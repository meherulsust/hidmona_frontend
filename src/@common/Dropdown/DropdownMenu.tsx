import { ReactNode, useContext } from 'react';
import clsx from 'clsx';

import { ToggleContext } from './ToggleContext';

interface Props {
  children: ReactNode;
  className?: string;
}

const DropdownMenu = ({ children, className }: Props) => {
  const { toggle } = useContext(ToggleContext);

  return (
    <div
      className={clsx(
        'w-40 divide-y py-2 absolute top-full right-0 border border-gray bg-white rounded-sm',
        !toggle ? 'hidden' : '',
        className ?? ''
      )}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
