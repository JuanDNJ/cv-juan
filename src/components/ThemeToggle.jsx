import { useStore } from "../context/useStore";

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23L5.46 5.46" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20.1 14.15A8.75 8.75 0 0 1 9.85 3.9a8.75 8.75 0 1 0 10.25 10.25Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useStore();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-trigger"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      data-theme={theme}
      onClick={toggleTheme}
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <SunIcon />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <MoonIcon />
      </span>
    </button>
  );
}
