import React, { useState } from "react";

const BuyButton: React.FC<{ shopifyId: string }> = ({
  shopifyId,
  children,
}) => {
  const [isBuying, setIsBuying] = useState(false);
  const submitHandler = () => {
    setIsBuying(true);
    try {
      if (window.plausible) {
        window.plausible("Buy");
      }
    } catch (error) {
      // I add a try/catch to avoid breaking the buy process due to an analytics error
      console.warn(error);
    }
  };

  return (
    <form action="/api/checkout" onSubmit={submitHandler} method="POST">
      <input type="hidden" name="shopifyId" value={shopifyId} />
      {!isBuying && (
        <button type="submit" className="tertiary text-base xl:text-lg">
          {children}
        </button>
      )}
      {isBuying && (
        <div className="font-medium text-base xl:text-lg px-2 py-1">
          En cours...
        </div>
      )}
    </form>
  );
};

export default BuyButton;
