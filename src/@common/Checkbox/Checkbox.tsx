import React, {
  ChangeEvent,
  FC,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  /**
   * How large should the checkbox be?
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Checkbox content
   */
  label?: string;
  /**
   * Defines if the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Defines if the checkbox is checked
   */
  checked?: boolean;
  /**
   * Additional className for the checkbox
   */
  className?: string;
  /**
   * Additional className for the label
   */
  labelClassName?: string;
  /**
   * Defines the checkbox's value
   */
  value?: string;
  /**
   * Defines the onChange function to update the checkbox
   */
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const VSCheckbox: FC<CheckboxProps> = ({
  disabled,
  label,
  value,
  children,
  size,
  className,
  onChange,
  checked,
  labelClassName,
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement | null>(
    null
  ) as MutableRefObject<HTMLInputElement>;
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked!);
  }, [checked]);

  const handleClick = () => {
    if (ref) {
      ref.current.click();
    }
  };

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(evt);
  };

  const getContaienrClass = () => {
    const containerClass = ['vs-checkbox-container', `vs-checkbox-${size}`];

    if (className) {
      containerClass.push(className);
    }

    if (disabled) {
      containerClass.push('vs-checkbox-disabled');
    }

    return containerClass.join(' ');
  };

  const checkmark = !isChecked ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  let labelNode;

  if (label) {
    labelNode = (
      <span className={clsx('vs-checkbox-label', labelClassName ?? '')}>
        {label}
      </span>
    );
  } else if (children) {
    labelNode = (
      <span className={clsx('vs-checkbox-label', labelClassName ?? '')}>
        {children}
      </span>
    );
  }

  return (
    <div className={getContaienrClass()} onClick={handleClick}>
      <div className={clsx('vs-checkbox', isChecked ? 'checked' : '')}>
        <input
          ref={ref}
          type="checkbox"
          className="hidden"
          disabled={disabled}
          checked={isChecked}
          value={value}
          onChange={handleCheckboxChange}
        />
        {checkmark}
      </div>
      {labelNode}
    </div>
  );
};

const checkBoxDefaultProps = {
  value: '',
  disabled: false,
  size: 'md',
  checked: false,
  className: '',
  labelClassName: '',
} as Partial<CheckboxProps>;

VSCheckbox.displayName = 'VSCheckbox';
VSCheckbox.defaultProps = checkBoxDefaultProps;

export default VSCheckbox;
