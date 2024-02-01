import { twMerge } from 'tailwind-merge';
import { Button } from './components/Buttons/Button';
import { useTheme } from './hooks/useTheme';
import { Toggle } from './components/Toggle/Toggle';
import { useEffect } from 'react';

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    console.log({ isDarkMode });
  }, [isDarkMode]);

  return (
    <main
      className={twMerge(
        'flex h-screen w-full items-center justify-center',
        isDarkMode ? 'bg-slate-800' : 'bg-white',
      )}
    >
      <Toggle className="absolute right-10 top-10" />
      <Button>Custom Button</Button>
    </main>
  );
};

export default App;
