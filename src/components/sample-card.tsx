import { assertLocale } from "@/i18n/routing";
import TCGdex from "@tcgdex/sdk";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface SampleCardProps {}

export default async function SampleCard() {
  const locale = await getLocale();

  try {
    assertLocale(locale);
  } catch {
    notFound();
  }

  const tcgdex = new TCGdex(locale);
  const card = await tcgdex.card.get("xy1-1");

  if (!card) {
    notFound();
  }

  return (
    <div>
      <p>{card.name}</p>
      <img src={card.getImageURL("low", "webp")} alt={card.name} />
    </div>
  );
}
