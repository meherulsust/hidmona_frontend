import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { FC } from 'react';

interface BodyProps {
  children?: ReactNode;
  /**
   * Additional className for modal body
   */
  className?: string;
}

const VSModalBody: FC<BodyProps> = ({ className, children }: BodyProps) => {
  return (
    <div className={clsx('vs-modal-body', className ?? '')}>{children}</div>
  );
};

const modalBodyDefaultProps = {
  className: '',
} as Partial<BodyProps>;

VSModalBody.displayName = 'VSModalBody';
VSModalBody.defaultProps = modalBodyDefaultProps;

export default VSModalBody;
