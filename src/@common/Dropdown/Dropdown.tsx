import {
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import { ToggleContext } from './ToggleContext';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  className?: string;
}

const Dropdown = ({
  children,
  className,
}: PropsWithChildren<DropdownProps>) => {
  const listElement = useRef() as MutableRefObject<HTMLDivElement>;
  const selectedButton = useRef() as MutableRefObject<HTMLButtonElement>;
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (evt: MouseEvent) => {
      const myHTMLWrapper = listElement.current;
      const btnElement = selectedButton.current;

      if (
        !myHTMLWrapper?.contains(evt.target as Node) &&
        !btnElement?.contains(evt.target as Node)
      ) {
        setToggle(false);
      }
    };

    if (toggle) document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [toggle]);

  return (
    <div className={clsx('relative', className ?? '')}>
      <ToggleContext.Provider value={{ toggle, setToggle }}>
        {children}
      </ToggleContext.Provider>
    </div>
  );
};

export default Dropdown;

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
