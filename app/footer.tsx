import { Theme, useTheme } from '~/utils/theme-provider';

export function Footer() {
    const [, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    };

    return (
        <footer className="border-stone-900">
            <button onClick={toggleTheme}>toggle</button>
        </footer>
    )
}
