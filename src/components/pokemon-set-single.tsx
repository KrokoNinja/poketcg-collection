import getDefaultLanguageSetLogo from "@/lib/tcgdex";
import { SetResume } from "@tcgdex/sdk";
import { useTranslations } from "next-intl";

interface PokemonSetSingleProps {
  set: SetResume;
}

export default function PokemonSetSingle({ set }: PokemonSetSingleProps) {
  const t = useTranslations("TCGdex");
  let setLogo = set.logo;

  if (!setLogo) {
    const query = getDefaultLanguageSetLogo(set.id);
    if (query.data) {
      setLogo = query.data;
    } else {
      setLogo = "/no-image-language";
    }
  }

  return (
    <li key={set.id} className="border rounded p-2 flex flex-col">
      <img
        src={`${setLogo}.webp`}
        alt={set.name}
        className="mb-2 h-32 object-contain"
      />
      <span className="font-bold">{set.name}</span>
      <span className="text-sm text-gray-500">
        {set.cardCount.total} {t("cards")}
      </span>
    </li>
  );
}
