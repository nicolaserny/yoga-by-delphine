import clsx from "clsx";
import React, { useState } from "react";
import { Form } from "react-router";
import Button from "./button";

const BuyButton: React.FC<{
  shopifyId: string;
  withLeftPadding?: boolean;
  variant?: "link" | "solid";
  ariaLabel?: string;
  children: React.ReactNode;
}> = ({
  shopifyId,
  withLeftPadding = true,
  variant = "link",
  ariaLabel,
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
    <Form action="/api/checkout" onSubmit={submitHandler} method="POST">
      <input type="hidden" name="shopifyId" value={shopifyId} />
      <div className={clsx(variant === "link" && withLeftPadding && "pl-5")}>
        <Button
          type="submit"
          variant={variant}
          colorScheme="purple"
          aria-label={isBuying ? undefined : ariaLabel}
          aria-busy={isBuying}
          disabled={isBuying}
          className={clsx(
            "disabled:cursor-wait",
            variant === "solid" &&
              "min-h-11 min-w-36 text-center whitespace-nowrap disabled:bg-purple-100 disabled:text-purple-800",
          )}
        >
          {isBuying ? "En cours..." : children}
        </Button>
      </div>
    </Form>
  );
};

export default BuyButton;
