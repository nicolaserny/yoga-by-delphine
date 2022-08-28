import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { GiftCardType } from "~/models/giftCards.server";
import { getGiftCardsFromApi } from "~/models/giftCards.server";
import { getSeo } from "~/utils/seo";
import { PageTitle, GiftCard } from "../components";

export const loader: LoaderFunction = async () => {
  const giftCards = await getGiftCardsFromApi();
  return json<Array<GiftCardType>>(giftCards, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=120, s-maxage=120",
    },
  });
};

export const meta: MetaFunction = () => ({
  ...getSeo({ title: "Cartes-Cadeaux: Offrez des cours de Yoga" }),
});

export default function GifCardRoute() {
  const giftCards = useLoaderData() as Array<GiftCardType>;
  return (
    <main className="width-constraints">
      <PageTitle>Offrez des cours de Yoga</PageTitle>
      <div className="mt-2 pb-1 lg:pb-3 text-gray-800 text-base font-normal leading-normal">
        <p>
          Les cartes-cadeaux sont valables sur l’ensemble des cours, cartes et
          abonnements.
        </p>
        <p>
          Pour utiliser une carte, il suffit de renseigner son numéro lors du
          paiement.
        </p>
        <p>
          Pour toute autre question,{" "}
          <Link
            className="text-purple-600 hover:text-purple-800 font-semibold underline"
            to="/contact/"
          >
            contacter-moi
          </Link>
          .
        </p>
      </div>
      <div className="mb-3 lg:mb-5">
        {giftCards.map((giftCard) => (
          <GiftCard key={giftCard.shopifyId} giftCard={giftCard} />
        ))}
      </div>
    </main>
  );
}
