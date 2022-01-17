import { ElementType, PropsWithChildren, useContext } from 'react';

import { ToggleContext } from './ToggleContext';

const DropdownToggle = ({
  children,
  as: Component = 'div',
  className,
}: PropsWithChildren<{
  className?: string;
  as?: ElementType;
}>) => {
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <Component onClick={() => setToggle(!toggle)} className={className}>
      {children}
    </Component>
  );
};

export default DropdownToggle;
