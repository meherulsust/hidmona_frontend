import clsx from 'clsx';
import React, {
  HTMLAttributes,
  MouseEvent,
  MutableRefObject,
  ReactNode,
} from 'react';
import { FC, useRef } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /**
   * Function executed when the closed button is clicked
   */
  onClose: () => void;
  /**
   * Defines if the modal is open
   */
  isOpen: boolean;
  /**
   * Defines the modal will not be hidden if turns true
   */
  disableOutsideClick?: boolean;
  /**
   * Defines the modal animation
   */
  animation?: 'fade' | 'zoom' | 'top' | 'bottom';
  /**
   * Defines the modal width
   */
  width?: string;
}

const VSModal: FC<ModalProps> = ({
  width,
  disableOutsideClick,
  isOpen,
  onClose,
  children,
  animation,
}) => {
  const refModal = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isOpen || disableOutsideClick) return;
    if (refModal?.current.contains(event.target as Node)) {
      return;
    }
    onClose();
  };

  return (
    <div
      className={clsx(
        'vs-modal',
        isOpen ? 'vs-modal-visible' : 'vs-modal-hidden'
      )}
      onClick={handleModalClick}
    >
      <div
        className={`vs-modal-content vs-modal-animate-${animation} ${width}`}
        ref={refModal}
      >
        {children}
      </div>
    </div>
  );
};

const modalDefaultProps = {
  disableOutsideClick: false,
  animation: 'zoom',
  isOpen: false,
  width: 'w-1/2',
} as Partial<ModalProps>;

VSModal.displayName = 'VSModal';
VSModal.defaultProps = modalDefaultProps;

export default VSModal;
