"use client";
import { assertLocale } from "@/i18n/routing";
import TCGdex from "@tcgdex/sdk";
import { notFound } from "next/navigation";
import ContentWrapper from "./content-wrapper";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import PokemonSetSingle from "./pokemon-set-single";

interface PokemonSetListProps {}

export default function PokemonSetList() {
  const locale = useLocale();
  const messageTranslations = useTranslations("ErrorMessages");

  try {
    assertLocale(locale);
  } catch {
    notFound();
  }

  const tcgdex = new TCGdex(locale);

  const { data, error, isPending } = useSuspenseQuery({
    queryKey: ["sets", locale],
    queryFn: () => tcgdex.set.list(),
  });

  if (error) {
    return (
      <ContentWrapper className="flex justfiy-center items-center w-full h-full">
        <span>{messageTranslations("SetList.errorLoadingSets")}</span>
      </ContentWrapper>
    );
  }

  if (isPending) {
    return (
      <ContentWrapper className="flex justfiy-center items-center w-full h-full">
        <span>{messageTranslations("SetList.loadingSets")}</span>
      </ContentWrapper>
    );
  }
  const sets = data ?? [];

  if (!sets) {
    return (
      <ContentWrapper className="flex justfiy-center items-center w-full h-full">
        <span>{messageTranslations("SetList.noSets")}</span>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sets.map((set) => (
          <PokemonSetSingle key={set.id} set={set} />
        ))}
      </ul>
    </ContentWrapper>
  );
}
