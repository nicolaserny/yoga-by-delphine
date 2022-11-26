import Button from "./button";

type AnchorLinkProps<Type extends React.ElementType> = {
  children: React.ReactNode;
  as?: Type;
};

function AnchorLink<Type extends React.ElementType = "a">({
  as,
  children,
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
      size="base"
      responsive={false}
    >
      {children}
    </Button>
  );
}

export default AnchorLink;
