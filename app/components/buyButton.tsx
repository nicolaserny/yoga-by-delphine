import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router";
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
  const navigation = useNavigation();
  // Set when the page is restored from the bfcache (Back from Shopify), where
  // the frozen navigation state would otherwise keep the button disabled.
  const [isRestored, setIsRestored] = useState(false);
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsRestored(true);
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);
  // Derived from the router so the button re-enables when the submission ends
  // without leaving the page (e.g. a checkout error).
  const isBuying =
    !isRestored &&
    navigation.state !== "idle" &&
    navigation.formAction === "/api/checkout" &&
    navigation.formData?.get("shopifyId") === shopifyId;

  const submitHandler = () => {
    setIsRestored(false);
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
