import { SetResume } from "@tcgdex/sdk";
import { useTranslations } from "next-intl";
import PokemonSetImage from "./pokemon-set-image";

interface PokemonSetSingleProps {
	set: SetResume;
}

export default function PokemonSetSingle({ set }: PokemonSetSingleProps) {
	const t = useTranslations("TCGdex");

	return (
		<li key={set.id} className="border rounded p-2 flex flex-col">
			<PokemonSetImage set={set} />
			<span className="font-bold">{set.name}</span>
			<span className="text-sm text-gray-500">
				{set.cardCount.total} {t("cards")}
			</span>
		</li>
	);
}
