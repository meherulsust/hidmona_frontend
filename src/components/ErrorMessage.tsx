interface IProps {
  message: string;
  className?: string;
}

const ErrorMessage = ({ message, className = 'text-center' }: IProps) => (
  <p className={className}>{message}</p>
);

export default ErrorMessage;
