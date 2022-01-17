import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export const ToggleContext = createContext<AppContextInterface>({
  toggle: false,
  setToggle: () => {},
});
