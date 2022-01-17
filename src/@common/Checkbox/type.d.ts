export type TICheckbox = {
  id?: string;
  type?: 'checkbox' | 'radio';
  isValid?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  value?: any;
  checked?: any;
  handleChange?: (evt) => evt.target.value;
};
