import { FaMoon } from 'react-icons/fa';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const isDark = theme === 'dark';

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="navbar bg-base-200 shadow-md px-4 md:px-12">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg md:text-xl font-bold">Where in the world?</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-ghost flex items-center gap-2 text-sm font-semibold"
          onClick={handleToggleTheme}
          aria-label="Toggle dark mode"
        >
          <FaMoon className="text-base" />
          <span className="hidden sm:inline">Dark Mode</span>
        </button>
      </div>
    </div>
  );
};
