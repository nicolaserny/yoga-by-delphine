import React, { useCallback, useState } from "react";
import { buildClient } from "shopify-buy";
import { navigate } from "gatsby";

const client = buildClient({
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_API_TOKEN,
});

const BuyButton = ({ course }) => {
  const [isBuying, setIsBuying] = useState(false);
  const checkoutCallback = useCallback(async () => {
    setIsBuying(true);
    const checkout = await client.checkout.create();
    if (checkout) {
      try {
        const updatedCheckout = await client.checkout.addLineItems(
          checkout.id,
          [
            {
              variantId: course.shopifyId,
              quantity: 1,
            },
          ],
        );
        window.location.href = updatedCheckout.webUrl;
      } catch (error) {
        console.error(error);
        navigate("/error");
        setIsBuying(false);
      }
    }
  }, [course.shopifyId, setIsBuying]);

  return (
    <>
      {!isBuying && (
        <button
          onClick={checkoutCallback}
          className="row-start-4 lg:row-start-2 col-start-2 lg:col-start-3 xl:col-start-4 tertiary text-base xl:text-lg text-right -mr-2"
        >
          Réserver
        </button>
      )}
      {isBuying && (
        <div className="row-start-4 lg:row-start-2 col-start-2 lg:col-start-3 xl:col-start-4 font-medium text-base xl:text-lg text-right -mr-2">
          En cours...
        </div>
      )}
    </>
  );
};

export default BuyButton;
