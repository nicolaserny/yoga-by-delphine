import clsx from "clsx";
import React from "react";

const GiftCard: React.FC<{ price: number; className?: string }> = ({
  price,
  className,
}) => (
  <div
    aria-hidden="true"
    className={clsx(
      "relative flex aspect-[1.586] w-full max-w-[440px] -rotate-3 flex-col justify-between overflow-hidden rounded-xl bg-purple-700 p-5 text-white shadow-[0_20px_40px_-16px_rgba(36,7,84,0.45)] sm:p-7",
      className,
    )}
  >
    <svg
      viewBox="144 6 120 84"
      className="pointer-events-none absolute -right-[6%] -bottom-[10%] w-[58%] opacity-45"
    >
      <path
        className="fill-purple-300"
        d="M200.06 30.688c14.658 21.782.847 56.815.847 56.815s-37.576-.282-52.234-22.064c-14.658-21.782-.847-56.815-.847-56.815s37.576.282 52.234 22.064Z"
      />
      <path
        className="fill-purple-300"
        d="M206.785 30.688c-14.658 21.782-.847 56.815-.847 56.815s37.576-.282 52.234-22.064c14.658-21.782.847-56.815.847-56.815s-37.576.282-52.234 22.064Z"
      />
    </svg>
    <div className="relative flex items-baseline justify-between gap-3">
      <span className="text-sm font-semibold sm:text-base">
        Yoga <span className="text-purple-200">by</span> Delphine
      </span>
      <span className="text-[11px] font-semibold tracking-[0.08em] text-purple-100 uppercase">
        Carte cadeau
      </span>
    </div>
    <div className="relative text-5xl leading-none font-semibold sm:text-6xl">
      {price}
      <span className="ml-1 text-[0.6em]">€</span>
    </div>
  </div>
);

export default GiftCard;
