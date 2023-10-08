import type { DataFunctionArgs, LoaderFunction } from "@netlify/remix-runtime";
import { json } from "@netlify/remix-runtime";
import type { MetaFunction } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";
import AnchorLink from "~/components/anchorLink";
import type { GiftCardType } from "~/models/giftCards.server";
import { getGiftCardsFromApi } from "~/models/giftCards.server";
import { getSeo, getUrl } from "~/utils/seo";
import { PageTitle, GiftCard } from "../components";

export const loader: LoaderFunction = async ({ context }: DataFunctionArgs) => {
  const buyerIP = (context.ip as string) || undefined;
  const giftCards = await getGiftCardsFromApi(buyerIP);
  return json<Array<GiftCardType>>(giftCards, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
};

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({
    title: "Cartes-Cadeaux: Offrez des cours de Yoga",
    url: getUrl(location),
  }),
];

export default function GifCardRoute() {
  const giftCards = useLoaderData() as Array<GiftCardType>;
  return (
    <main className="width-constraints">
      <PageTitle>Offrez des cours de Yoga</PageTitle>
      <div className="mt-2 pb-1 text-base font-normal leading-normal text-gray-800 lg:pb-3">
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
          <AnchorLink as={Link} to="/contact/">
            contacter-moi
          </AnchorLink>
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
