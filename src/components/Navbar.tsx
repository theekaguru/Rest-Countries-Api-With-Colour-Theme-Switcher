interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Navbar = ({ theme, setTheme }: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Where in The World</a>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          />

          {/* sun icon */}
          <svg
            className="swap-on h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m8.66-11.66l-.707.707M4.05 19.95l-.707.707M21 12h-1M4 12H3m16.66 4.95l-.707-.707M4.05 4.05l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
