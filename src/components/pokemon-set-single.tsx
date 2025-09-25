import { SetResume } from "@tcgdex/sdk";
import { useTranslations } from "next-intl";
import PokemonSetImage from "./pokemon-set-image";
import Link from "next/link";

interface PokemonSetSingleProps {
	set: SetResume;
}

export default function PokemonSetSingle({ set }: PokemonSetSingleProps) {
	const t = useTranslations("TCGdex");

	return (
		<li key={set.id} className="border rounded p-2 flex flex-col">
			<Link href={`/sets/${set.id}`} className="flex flex-col">
				<PokemonSetImage set={set} />
				<span className="font-bold truncate">{set.name}</span>
				<span className="text-sm text-gray-500">
					{set.cardCount.total} {t("cards")}
				</span>
			</Link>
		</li>
	);
}
