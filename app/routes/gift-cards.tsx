import type {
  DataFunctionArgs,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import AnchorLink from "~/components/anchorLink";
import type { GiftCardType } from "~/models/giftCards.server";
import { getGiftCardsFromApi } from "~/models/giftCards.server";
import { getSeo, getUrl } from "~/utils/seo";
import { PageTitle, GiftCard } from "../components";

export const loader: LoaderFunction = async ({ request }: DataFunctionArgs) => {
  const buyerIP = request.headers.get("x-nf-client-connection-ip") || undefined;
  const giftCards = await getGiftCardsFromApi(buyerIP);
  return json<Array<GiftCardType>>(giftCards, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=120, s-maxage=120",
    },
  });
};

export const meta: V2_MetaFunction = ({ location }) => [
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
