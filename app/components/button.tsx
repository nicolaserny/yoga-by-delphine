import clsx from "clsx";
import React from "react";

type ButtonProps<Type extends React.ElementType> = {
  children: React.ReactNode;
  as?: Type;
  variant: "solid" | "outline" | "link";
  colorScheme: "purple" | "red" | "gray" | "white";
  size?: "small" | "base" | "large" | "xlarge";
  responsive?: boolean;
};

type ButtonComponent = <T extends React.ElementType = "button">(
  props: ButtonProps<T> &
    Omit<React.ComponentPropsWithRef<T>, keyof ButtonProps<T>>,
) => React.ReactElement | null;

const Button = React.forwardRef(function Button<
  Type extends React.ElementType = "button",
>(
  {
    as,
    children,
    className,
    variant,
    colorScheme,
    size = "base",
    responsive = true,
    ...props
  }: ButtonProps<Type> &
    Omit<React.ComponentPropsWithRef<Type>, keyof ButtonProps<Type>>,
  ref: React.ComponentPropsWithRef<Type>["ref"],
) {
  const Component = as || "button";
  return (
    <Component
      ref={ref}
      {...props}
      className={clsx(
        className,
        "inline-block transition-colors duration-500 hover:duration-150 focus:outline-none",
        {
          "text-sm": size === "small",
          "lg:text-base": size === "small" && responsive,
          "text-base": size === "base",
          "xl:text-lg": size === "base" && responsive,
          "text-lg": size === "large",
          "xl:text-xl": size === "large" && responsive,
          "text-xl": size === "xlarge",
          "rounded-lg py-2 px-4 font-bold text-white focus-visible:ring":
            variant === "solid",
          "bg-red-500 hover:bg-red-600 focus-visible:ring-red-300":
            variant === "solid" && colorScheme === "red",
          "rounded-lg border border-red-600  bg-transparent py-2 px-4 font-semibold  hover:text-white focus:outline-none focus-visible:ring":
            variant === "outline",
          "text-red-600 hover:border-red-500 hover:bg-red-500 focus-visible:ring-red-300":
            variant === "outline" && colorScheme === "red",
          "w-max border-none bg-transparent text-left font-semibold no-underline hover:underline focus:rounded-lg focus:no-underline focus-visible:outline-none focus-visible:ring-2 ":
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
}) as ButtonComponent;

export default Button;
