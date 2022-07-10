import React, { useCallback, useState } from "react";
import { buildClient } from "shopify-buy";
import { navigate } from "gatsby";

const client = buildClient({
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_API_TOKEN,
});

function useBuy(shopifyId: string) {
  const [isBuying, setIsBuying] = useState(false);
  const checkoutCallback = useCallback(async () => {
    setIsBuying(true);
    try {
      if (window.plausible) {
        window.plausible("Buy");
      }
    } catch (error) {
      // I add a try/catch to avoid breaking the buy process due to an analytics error
      console.warn(error);
    }
    const checkout = await client.checkout.create();
    if (checkout) {
      try {
        const updatedCheckout = await client.checkout.addLineItems(
          checkout.id,
          [
            {
              variantId: shopifyId,
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
  }, [shopifyId, setIsBuying]);

  return { isBuying, checkoutCallback };
}

const BuyButton: React.FC<{ shopifyId: string }> = ({
  shopifyId,
  children,
}) => {
  const { isBuying, checkoutCallback } = useBuy(shopifyId);

  return (
    <>
      {!isBuying && (
        <button
          onClick={checkoutCallback}
          className="tertiary text-base xl:text-lg"
        >
          {children}
        </button>
      )}
      {isBuying && (
        <div className="font-medium text-base xl:text-lg px-2 py-1">
          En cours...
        </div>
      )}
    </>
  );
};

export default BuyButton;
