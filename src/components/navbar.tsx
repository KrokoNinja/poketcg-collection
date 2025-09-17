import LanguageSwitcher from "./language-switcher";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-800 flex items-center justify-center">
      <LanguageSwitcher />
      <h1 className="text-xl font-bold">My Navbar</h1>
      <ThemeToggle />
    </nav>
  );
}
