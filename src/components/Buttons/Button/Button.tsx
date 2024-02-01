import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';

type ButtonVariantType = 'rounded' | 'square';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
};

export const Button = ({
  className,
  children,
  variant = 'rounded',
  ...rest
}: ButtonProps) => {
  const { isDarkMode } = useTheme();

  const variantStyles = variant === 'rounded' ? 'rounded-lg' : '';
  const themeStyles = isDarkMode ? 'bg-white' : 'bg-slate-800';

  return (
    <button
      className={twMerge(
        'border-2 border-black px-4 py-2',
        variantStyles,
        themeStyles,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
