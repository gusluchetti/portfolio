import { Theme, useTheme } from '~/utils/theme-provider';

export function Footer() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <footer className="">
      <button className='hover:underline' onClick={toggleTheme}>
        {theme === Theme.LIGHT ? 'light' : 'dark'}
      </button>
    </footer>
  )
}
