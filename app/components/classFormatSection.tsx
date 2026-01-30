import AnchorLink from "./anchorLink";
import {
  OnlineYogaIllustration,
  StudioIllustration,
} from "./classFormatIllustrations";

interface ClassFormatItemProps {
  title: string;
  description: React.ReactNode;
  details: React.ReactNode;
  illustration: React.ComponentType<{ className?: string }>;
  imageRight?: boolean;
}

const ClassFormatItem = ({
  title,
  description,
  details,
  illustration: Illustration,
  imageRight = false,
}: ClassFormatItemProps) => {
  const imageContent = (
    <Illustration className="w-full shrink-0 md:max-w-sm lg:max-w-[386px]" />
  );

  const textContent = (
    <div
      className={`flex flex-col gap-4 md:gap-[18px] ${imageRight ? "md:items-end md:text-right" : "md:items-start"}`}
    >
      <h3 className="font-sans text-2xl leading-normal font-semibold text-gray-900 lg:text-[30px]">
        {title}
      </h3>
      <p className="max-w-full font-sans text-base leading-relaxed text-gray-800 md:max-w-[386px] lg:text-lg">
        {description}
      </p>
      <p className="max-w-full font-sans text-base leading-relaxed text-gray-800 md:max-w-[386px] lg:text-lg">
        {details}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 md:flex-row md:gap-12 md:py-12 lg:gap-24 lg:py-16">
      {imageRight ? (
        <>
          <div className="order-2 md:order-1">{textContent}</div>
          <div className="order-1 md:order-2">{imageContent}</div>
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
};

const ClassFormatSection = () => {
  const classFormats: ClassFormatItemProps[] = [
    {
      title: "Cours en ligne sur zoom",
      description: (
        <>
          Les cours ont lieu via la plateforme{" "}
          <AnchorLink
            href="https://zoom.us"
            target="_blank"
            rel="noreferrer noopener"
          >
            Zoom
          </AnchorLink>
          , en direct. Un lien vers la salle virtuelle vous sera envoyé sur
          l'email utilisé lors de la réservation (pas besoin de créer un compte
          pour participer).
        </>
      ),
      details:
        "Pour le cours, ayez une tenue confortable et un tapis de yoga. Des briques ou accessoires pour rendre l'assise confortable peuvent être utiles.",
      illustration: OnlineYogaIllustration,
      imageRight: true,
    },
    {
      title: "Cours en studio",
      description: (
        <>
          Adresse du studio:
          <br />
          <span className="font-semibold text-gray-800">
            64 promenade du Verger, 92130 Issy-les-Moulineaux
          </span>
        </>
      ),
      details:
        "Il est préférable de venir avec votre tapis de yoga personnel. La salle propose des briques et des couvertures.",
      illustration: StudioIllustration,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="width-constraints">
        <h2 className="mb-12 text-center font-sans text-[30px] leading-normal font-semibold text-gray-900">
          Les différents formats de cours
        </h2>
        {classFormats.map((format) => (
          <ClassFormatItem
            key={format.title}
            title={format.title}
            description={format.description}
            details={format.details}
            illustration={format.illustration}
            imageRight={format.imageRight}
          />
        ))}
      </div>
    </section>
  );
};

export default ClassFormatSection;
