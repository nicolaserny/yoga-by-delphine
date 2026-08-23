import { Button } from "yoga-by-delphine";

export const Solid = () => (
  <Button variant="solid" colorScheme="purple">
    Réserver un cours
  </Button>
);

export const Outline = () => (
  <Button variant="outline" colorScheme="purple">
    En savoir plus
  </Button>
);

export const LinkVariant = () => (
  <Button variant="link" colorScheme="purple">
    Voir le planning →
  </Button>
);

export const Sizes = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem",
    }}
  >
    <Button variant="solid" colorScheme="purple" size="small">
      Small
    </Button>
    <Button variant="solid" colorScheme="purple" size="base">
      Base
    </Button>
    <Button variant="solid" colorScheme="purple" size="large">
      Large
    </Button>
    <Button variant="solid" colorScheme="purple" size="xlarge">
      XLarge
    </Button>
    <Button variant="solid" colorScheme="purple" size="hero">
      Hero
    </Button>
  </div>
);
