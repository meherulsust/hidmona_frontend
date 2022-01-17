import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { FC } from 'react';

interface HeaderProps {
  children: ReactNode;
  /**
   * Additional className for the modal header
   */
  className?: string;
  /**
   * Defines the close button's position
   */
  closeButtonPosition?: 'right' | 'left';
  /**
   * Defines the modal should be hidden
   */
  onClose?: () => void;
}

const VSModalHeader: FC<HeaderProps> = ({
  onClose,
  closeButtonPosition,
  className,
  children,
}: HeaderProps) => {
  return (
    <header
      className={clsx(
        `vs-modal-header`,
        closeButtonPosition === 'left' ? 'left' : ''
      )}
    >
      <span className={clsx('vs-modal-header-content', className ?? '')}>
        {children}
      </span>

      <span className="vs-modal-close" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </header>
  );
};

const modalHeaderDefaultProps = {
  className: '',
  closeButtonPosition: 'right',
  onClose: () => {},
} as Partial<HeaderProps>;

VSModalHeader.displayName = 'VSModalHeader';
VSModalHeader.defaultProps = modalHeaderDefaultProps;

export default VSModalHeader;
