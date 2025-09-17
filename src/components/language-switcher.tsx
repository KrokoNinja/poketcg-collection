"use client";
import { SelectValue } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Locale, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

interface LanguageSwitcherProps {}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const onSelectChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale as Locale }
    );
  };

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
