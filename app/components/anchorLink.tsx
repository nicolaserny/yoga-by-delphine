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
  return (
    <Button
      {...props}
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
