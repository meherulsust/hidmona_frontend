import { ElementType, PropsWithChildren } from 'react';

const DropdownItem = ({
  children,
  as: Component = 'button',
  ...restProps
}: PropsWithChildren<{
  as?: ElementType;
  href?: string;
  passHref?: boolean;
  className?: string;
  onClick?: () => void;
}>) => {
  return (
    <li>
      <Component {...restProps}>{children}</Component>
    </li>
  );
};

export default DropdownItem;
