import clsx from "clsx";
import React from "react";
import type { PolymorphicComponentProp } from "~/utils/polymorphicComponentProp";

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  {
    children: React.ReactNode;
    variant: "solid" | "outline" | "link";
    colorScheme: "purple" | "gray" | "white";
    size?: "small" | "base" | "large" | "xlarge" | "hero";
    responsive?: boolean;
  }
>;

const Button = <C extends React.ElementType = "button">({
  as,
  children,
  className,
  variant,
  colorScheme,
  size = "base",
  responsive = true,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button";
  return (
    <Component
      {...props}
      className={clsx(
        className,
        "inline-block transition-colors duration-500 hover:duration-150 focus:outline-hidden",
        {
          "text-sm": size === "small",
          "lg:text-base": size === "small" && responsive,
          "text-base": size === "base",
          "xl:text-lg": size === "base" && responsive,
          "text-lg": size === "large",
          "xl:text-xl": size === "large" && responsive,
          "text-xl": size === "xlarge" || size === "hero",
          "text-2xl": size === "hero",
          "rounded-lg px-6 py-3 font-semibold text-white focus-visible:ring-3":
            variant === "solid",
          "bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-300":
            variant === "solid" && colorScheme === "purple",
          "rounded-lg border border-purple-700 bg-transparent px-6 py-3 font-medium text-purple-700 hover:text-white focus:outline-hidden focus-visible:ring-3":
            variant === "outline",
          "hover:border-purple-600 hover:bg-purple-600 focus-visible:ring-purple-300":
            variant === "outline" && colorScheme === "purple",
          "w-max border-none bg-transparent text-left font-semibold no-underline hover:underline focus:rounded-lg focus:no-underline focus-visible:ring-2 focus-visible:outline-hidden":
            variant === "link",
          "text-purple-700 focus-visible:ring-purple-300 focus-visible:ring-offset-2":
            variant === "link" && colorScheme === "purple",
          "text-white focus-visible:ring-white":
            variant === "link" && colorScheme === "white",
        },
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
