'use client';
import clsx from 'clsx';

interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  className?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  name,
  label,
  error,
  className,
  type,
  value,
  placeholder,
  required,
  onChange,
}: InputProps) => {
  return (
    <div className='my-5'>
      <label
        htmlFor={name}
        className='text-sm uppercase tracking-wide font-medium my-4 block pl-2'
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          'border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full',
          className
        )}
        required={required || true}
      />
      {error && <p className='text-xs text-red-500 font-normal p-1'>{error}</p>}
    </div>
  );
};

export default Input;
