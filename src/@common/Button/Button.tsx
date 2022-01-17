import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  /**
   * Show the button as a block (full-width)
   */
  block?: boolean;
  /**
   * Button type
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * Additional className for the button
   */
  className?: string;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The style of the button
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'danger'
    | 'danger-outline'
    | 'link';
  /**
   * How large should the button be?
   */
  size?: 'auto' | 'sm' | 'lg' | 'xl';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const VSButton: FC<ButtonProps> = ({
  children,
  className,
  block,
  variant,
  size,
  ...restProps
}) => {
  const classNames = [
    'vs-btn',
    `vs-btn-${variant}`,
    `vs-btn-${size}`,
    block ? 'vs-btn-full' : '',
    className,
  ].join(' ');

  let btnChildren = null;

  if (children) {
    btnChildren = children;
  }

  return (
    <button className={classNames} {...restProps}>
      {btnChildren}
    </button>
  );
};

const buttonDefaultProps = {
  type: 'button',
  size: 'auto',
  className: '',
  disabled: false,
  block: false,
  variant: 'primary',
  onClick: () => {},
} as Partial<ButtonProps>;

VSButton.displayName = 'VSButton';
VSButton.defaultProps = buttonDefaultProps;

export default VSButton;
