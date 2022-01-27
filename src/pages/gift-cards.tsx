import { Link, PageProps } from "gatsby";
import React from "react";
import { Layout, Seo, PageTitle, GiftCard } from "../components";
import useShopifyGiftCards from "../hooks/useShopifyGiftCards";

const GiftCards: React.FC<PageProps> = () => {
  const giftCards = useShopifyGiftCards();
  return (
    <Layout>
      <Seo metadata={{ title: "Cartes-Cadeaux: Offrez des cours de Yoga" }} />
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
    </Layout>
  );
};

export default GiftCards;
