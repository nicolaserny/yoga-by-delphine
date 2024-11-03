import { Form } from "@remix-run/react";
import clsx from "clsx";
import React, { useState } from "react";
import Button from "./button";

const BuyButton: React.FC<{
  shopifyId: string;
  withLeftPadding?: boolean;
  children: React.ReactNode;
}> = ({ shopifyId, withLeftPadding = true, children }) => {
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
    <Form action="/api/checkout" onSubmit={submitHandler} method="POST">
      <input type="hidden" name="shopifyId" value={shopifyId} />
      {!isBuying && (
        <div className={clsx(withLeftPadding && "pl-5")}>
          <Button type="submit" variant="link" colorScheme="purple">
            {children}
          </Button>
        </div>
      )}
      {isBuying && (
        <div className="text-base font-medium xl:text-lg">En cours...</div>
      )}
    </Form>
  );
};

export default BuyButton;
