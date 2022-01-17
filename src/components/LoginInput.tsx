import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import Icon, { IconName } from './Icon';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconName: IconName;
  showPasswordIconName?: 'eye' | 'eye-off';
  showPasswordIcon?: boolean;
  onHandleShowPassword?: () => void;
}

const LoginInput = ({
  label,
  type = 'text',
  iconName,
  showPasswordIcon,
  onHandleShowPassword,
  showPasswordIconName,
  ...other
}: Props) => {
  return (
    <label className="relative block login-input">
      <Icon
        className="absolute left-2 top-0 translate-y-2.5 text-sm p-0.5 text-gray-500"
        name={iconName}
      />
      <input
        className={clsx(
          'w-full placeholder-transparent bg-transparent border border-gray-400 rounded h-10 px-10 focus:outline-none focus:border-gray-600 focus:ring-0 text-lg'
        )}
        placeholder={label}
        type={type}
        {...other}
      />
      <span className="absolute text-md font-light top-0 left-10 transform translate-y-3 pointer-events-none transition-all ease-in">
        {label}
      </span>

      {showPasswordIcon && (
        <Icon
          className="absolute right-2 top-0 translate-y-2.5 text-sm p-0.5 text-gray-500 cursor-pointer"
          name={showPasswordIconName!}
          onClick={onHandleShowPassword}
        />
      )}
    </label>
  );
};

export default React.memo(LoginInput);
