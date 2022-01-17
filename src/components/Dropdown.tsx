import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { useSession } from 'next-auth/client';

import Icon from './Icon';

interface IProps {
  children: ReactNode;
}

const Dropdown = ({ children }: IProps) => {
  const listElement = useRef() as MutableRefObject<HTMLDivElement>;
  const selectedButton = useRef() as MutableRefObject<HTMLButtonElement>;
  const [toggle, setToggle] = useState<boolean>(false);
  const [session] = useSession();

  console.log('session', session);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOutsideClick = useCallback((evt) => {
    const myHTMLWrapper = listElement.current;
    const btnElement = selectedButton.current;

    if (
      !myHTMLWrapper?.contains(evt.target) &&
      !btnElement?.contains(evt.target)
    ) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="ml-5 relative">
      <button
        ref={selectedButton}
        onClick={handleToggle}
        className="flex items-center"
      >
        <div className="flex flex-col mr-2 items-end">
          <span className="text-xs">Logged in as</span>
          <span className="text-sm">{session?.user?.email}</span>
        </div>
        <div>
          <Icon name="user-circle" />
        </div>
      </button>
      <div
        ref={listElement}
        className={clsx(
          'w-40 divide-y py-2 absolute top-full right-0 border border-gray bg-white rounded-sm',
          !toggle ? 'hidden' : ''
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
