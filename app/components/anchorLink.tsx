import Button, { ButtonProps } from "./button";

type AnchorLinkProps<Type extends React.ElementType> = {
  children: React.ReactNode;
  as?: Type;
  size?: ButtonProps<Type>["size"];
  responsive?: ButtonProps<Type>["responsive"];
};

function AnchorLink<Type extends React.ElementType = "a">({
  as,
  children,
  size,
  responsive,
  ...props
}: AnchorLinkProps<Type> &
  Omit<React.ComponentPropsWithoutRef<Type>, keyof AnchorLinkProps<Type>>) {
  const Component = (as || "a") as React.ElementType;
  return (
    <Button
      {...props}
      as={Component}
      variant="link"
      colorScheme="purple"
      size={size || "base"}
      responsive={responsive || false}
    >
      {children}
    </Button>
  );
}

export default AnchorLink;
