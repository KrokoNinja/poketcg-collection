import SampleCard from "@/components/sample-card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
      <SampleCard />
      <Link href="/de" className="text-blue-500 underline">
        Go to German version
      </Link>
      <Link href="/en" className="text-blue-500 underline">
        Go to English version
      </Link>
    </div>
  );
}
