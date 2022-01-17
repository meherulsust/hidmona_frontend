import { Children, isValidElement, ReactNode } from 'react';

export const validChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child));
