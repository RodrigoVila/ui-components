import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../hooks/useTheme';

type ToggleProps = {
  className?: string;
};

export const Toggle = ({ className }: ToggleProps) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div
      className={twMerge('cursor-pointer', className)}
      onClick={toggleTheme}
    >{`Switch to: ${isDarkMode ? 'light' : 'dark'}`}</div>
  );
};
