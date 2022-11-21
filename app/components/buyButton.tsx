import React, { useState } from "react";
import Button from "./button";

const BuyButton: React.FC<{ shopifyId: string; children: React.ReactNode }> = ({
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
        <Button type="submit" variant="link" colorScheme="purple">
          {children}
        </Button>
      )}
      {isBuying && (
        <div className="text-base font-medium xl:text-lg">En cours...</div>
      )}
    </form>
  );
};

export default BuyButton;
