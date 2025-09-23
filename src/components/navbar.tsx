import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import ThemeToggle from "./theme-toggle";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navigation");

  return (
    <nav className="w-full h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-xl font-bold">
            P<strong className="text-red-300">TCG</strong>C
          </h1>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/collection">{t("collection")}</Link>
          </li>
          <li>
            <Link href="/search">{t("search")}</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
}
