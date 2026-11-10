import { useMemo, useState } from "react";
import {
  type LoaderFunctionArgs,
  type MetaFunction,
  Link,
  useLoaderData,
} from "react-router";
import { BuyButton, GiftCard } from "../components";
import AnchorLink from "~/components/anchorLink";
import PageTitle from "~/components/pageTitle";
import { getGiftCardsFromApi } from "~/models/giftCards.server";
import { getBuyerIP } from "~/utils/netlify-context";
import { getSeo, getUrl } from "~/utils/seo";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const buyerIP = getBuyerIP(context);
  const giftCards = await getGiftCardsFromApi(buyerIP);
  return giftCards;
};

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({
    title: "Cartes-cadeaux: Offrez des cours de Yoga",
    url: getUrl(location),
  }),
];

const steps = [
  {
    title: "Choisissez le montant",
    text: "Sélectionnez la carte qui vous convient et réglez-la en ligne.",
  },
  {
    title: "Offrez-la",
    text: "Transmettez le numéro de la carte à la personne de votre choix.",
  },
  {
    title: "Utilisez-la au paiement",
    text: "Il suffit de renseigner son numéro lors du paiement d’un cours, d’une carte ou d’un abonnement.",
  },
];

export default function GiftCardRoute() {
  const loaded = useLoaderData<typeof loader>();
  const giftCards = useMemo(
    () => [...loaded].sort((a, b) => a.price - b.price),
    [loaded],
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected =
    giftCards.find((giftCard) => giftCard.shopifyId === selectedId) ??
    giftCards[Math.floor((giftCards.length - 1) / 2)];

  return (
    <main className="width-constraints pb-12 lg:pb-20">
      <section className="grid items-center gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <PageTitle>Offrez des cours de Yoga</PageTitle>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-800">
            Les cartes-cadeaux sont valables sur l’ensemble des cours, cartes et
            abonnements.
            {selected && " Choisissez le montant qui vous convient."}
          </p>

          {selected ? (
            <>
              <div
                className="mt-7"
                role="group"
                aria-labelledby="gift-card-amount-label"
              >
                <span
                  id="gift-card-amount-label"
                  className="mb-3 block text-sm font-semibold text-gray-900"
                >
                  Montant de la carte
                </span>
                <div className="flex flex-wrap gap-2">
                  {giftCards.map((giftCard) => {
                    const isSelected =
                      giftCard.shopifyId === selected.shopifyId;
                    return (
                      <button
                        key={giftCard.shopifyId}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedId(giftCard.shopifyId)}
                        className={`min-h-11 min-w-20 rounded-full border px-5 text-base transition-colors focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:outline-hidden ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 font-semibold text-white"
                            : "border-gray-300 bg-white font-medium text-gray-800 hover:border-purple-600 hover:text-purple-700"
                        }`}
                      >
                        {`${giftCard.price} €`}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 shadow-sm">
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    {selected.title}
                  </div>
                  <div className="text-sm leading-normal text-gray-600">
                    {selected.description}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BuyButton
                    key={selected.shopifyId}
                    shopifyId={selected.shopifyId}
                    variant="solid"
                    ariaLabel={`Acheter la carte cadeau de ${selected.price} €`}
                  >
                    Acheter
                  </BuyButton>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-6 rounded-xl bg-white px-5 py-4 text-base leading-normal text-gray-800 shadow-sm">
              Les cartes-cadeaux sont momentanément indisponibles.{" "}
              <AnchorLink as={Link} to="/contact">
                Contactez-moi
              </AnchorLink>{" "}
              pour en commander une.
            </p>
          )}
        </div>

        {selected && (
          <div className="flex items-center justify-center rounded-3xl bg-purple-100 px-6 py-8 sm:p-12 lg:min-h-[460px]">
            <GiftCard price={selected.price} />
          </div>
        )}
      </section>

      {selected && (
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-gray-900">
            Comment ça marche ?
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-start gap-4 rounded-xl bg-white p-5 text-sm leading-normal text-gray-800 shadow-sm sm:flex-col"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700"
                >
                  {index + 1}
                </span>
                <div>
                  <strong className="mb-0.5 block text-base font-semibold text-gray-900">
                    {step.title}
                  </strong>
                  {step.text}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-normal text-gray-800">
            Pour toute autre question,{" "}
            <AnchorLink as={Link} to="/contact">
              contactez-moi
            </AnchorLink>
            .
          </p>
        </section>
      )}
    </main>
  );
}
