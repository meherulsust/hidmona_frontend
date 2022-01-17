import { ChangeEvent, FC, HTMLAttributes, useRef, useState } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Defines the input id attribute
   */
  id?: string;
  /**
   * Defines the input name attribute
   */
  name?: string;
  /**
   * Defines the input's label
   */
  label?: string;
  /**
   * Defines the input type
   */
  type: 'text' | 'password' | 'email' | 'number' | 'phone';
  /**
   * Defines the input placeholder
   */
  placeholder?: string;
  /**
   * Defines the input value
   */
  value?: string | number;
  /**
   * Defines the input onChange function to update the value
   */
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Defines if the input is disabled
   */
  disabled: boolean;
  /**
   * Defines the input hint
   */
  hint?: string | null;
  /**
   * Defines if the input has error
   */
  hasError?: boolean;
  /**
   * Defines the wrapper className
   */
  className?: string;
  /**
   * Defines the input's className
   */
  inputClass?: string;
}

const VSInput: FC<InputProps> = ({
  value,
  disabled,
  onChange,
  hasError,
  label,
  id,
  hint,
  className,
  inputClass,
  ...restProps
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string | number>(value!);

  const onLegendClick = () => {
    if (!inputRef.current) {
      return;
    }

    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const containerClass = ['vs-input-container'];

  if (className) {
    containerClass.push(className);
  }

  if (hasError) {
    containerClass.push('vs-input-error');
  }

  if (disabled) {
    containerClass.push('vs-input-disabled');
  }

  const inputLabel = !id ? (
    <legend onClick={onLegendClick}>{label}</legend>
  ) : (
    <label htmlFor={id}>{label}</label>
  );

  const hintMessage = hint ? (
    <span className="vs-input-hint">{hint}</span>
  ) : null;

  return (
    <div className={containerClass.join(' ')}>
      {inputLabel}
      <input
        ref={inputRef}
        id={id}
        value={inputValue}
        onChange={onHandleChange}
        disabled={disabled}
        className={inputClass}
        {...restProps}
      />
      {hintMessage}
    </div>
  );
};

const inputDefaultProps = {
  value: '',
  type: 'text',
  hasError: false,
  disabled: true,
  onChange: () => {},
} as Partial<InputProps>;

VSInput.displayName = 'VSInput';
VSInput.defaultProps = inputDefaultProps;

export default VSInput;
