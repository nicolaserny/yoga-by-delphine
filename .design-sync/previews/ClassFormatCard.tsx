import { ClassFormatCard } from "yoga-by-delphine";

// A lightweight stand-in for the app's real course illustrations — enough to
// show the card's illustration slot in context.
const LotusIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 120"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M100 96c-26 0-46-14-46-30 0 0 20-4 46 12 26-16 46-12 46-12 0 16-20 30-46 30Z"
      className="fill-purple-200"
    />
    <path
      d="M100 96c-12-10-20-28-20-48 0 0 14 8 20 26 6-18 20-26 20-26 0 20-8 38-20 48Z"
      className="fill-purple-500"
    />
    <circle cx="100" cy="100" r="6" className="fill-purple-700" />
  </svg>
);

export const Solid = () => (
  <ClassFormatCard
    title="Cours collectifs"
    details={
      <p>
        Des séances en petit groupe pour progresser ensemble, dans une ambiance
        bienveillante et à votre rythme.
      </p>
    }
    illustration={LotusIllustration}
    features={[
      "Maximum 8 personnes par cours",
      "Tapis et accessoires fournis",
      "Tous niveaux bienvenus",
    ]}
    buttonText="Réserver une séance"
    buttonVariant="solid"
    buttonHref="/schedule"
  />
);

export const Outline = () => (
  <ClassFormatCard
    title="Cours particuliers"
    details={
      <p>
        Un accompagnement individuel, adapté à vos objectifs et votre emploi du
        temps.
      </p>
    }
    illustration={LotusIllustration}
    features={[
      "Séances sur mesure",
      "À domicile ou en studio",
      "Suivi personnalisé",
    ]}
    buttonText="Demander un devis"
    buttonVariant="outline"
    buttonHref="/contact"
  />
);
