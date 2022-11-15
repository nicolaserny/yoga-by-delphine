import clsx from "clsx";
import React from "react";

type ButtonProps<Type extends React.ElementType> = {
  children: React.ReactNode;
  as?: Type;
  variant: "solid" | "outline" | "link";
  colorScheme: "purple" | "red" | "gray";
  size?: "base" | "large";
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
        "inline-block transition-colors duration-500 hover:duration-150",
        {
          "text-lg xl:text-xl": size === "large",
          "text-base xl:text-lg": size === "base",
          "rounded-lg py-2 px-4 font-bold text-white focus:outline-none focus:ring":
            variant === "solid",
          "bg-red-500 hover:bg-red-600 focus:ring-red-300":
            variant === "solid" && colorScheme === "red",
          "rounded-lg border border-red-600  bg-transparent py-2 px-4 font-semibold hover:border-transparent hover:text-white focus:outline-none focus:ring":
            variant === "outline",
          "text-red-600 hover:bg-red-500 focus:ring-red-300 ":
            variant === "outline" && colorScheme === "red",
          "w-max border-none bg-transparent py-1 px-2  text-left   font-semibold focus:outline-none focus:ring-2":
            variant === "link",
          "text-purple-600 no-underline hover:text-purple-700 hover:underline focus:rounded-lg focus:no-underline focus:ring-purple-300":
            variant === "link" && colorScheme === "purple",
        },
      )}
    >
      {children}
    </Component>
  );
}) as ButtonComponent;

export default Button;
