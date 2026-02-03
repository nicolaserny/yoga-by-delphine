import { Link } from "react-router";
import AnchorLink from "./anchorLink";
import {
  HathaYogaIllustration,
  VinyasaYogaIllustration,
  RunningYogaIllustration,
  YogaBallesIllustration,
} from "./courseIllustrations";

interface CourseItemProps {
  title: string;
  description: React.ReactNode;
  illustration: React.ComponentType<{ className?: string }>;
  imageRight?: boolean;
  link?: React.ReactNode;
}

const CourseItem = ({
  title,
  description,
  illustration: Illustration,
  imageRight = false,
  link,
}: CourseItemProps) => {
  const imageContent = (
    <Illustration className="w-full max-w-[386px] flex-1 shrink-0" />
  );

  const textContent = (
    <div
      className={`flex flex-1 flex-col gap-3 md:gap-4 lg:gap-[18px] ${imageRight ? "md:items-end md:text-right" : "md:items-start"}`}
    >
      <h3 className="font-sans text-xl leading-normal font-semibold text-gray-900 md:text-2xl lg:text-[30px]">
        {title}
      </h3>
      <p className="max-w-[386px] font-sans text-base leading-relaxed text-gray-800">
        {description}
        {link && <span className="ml-1">{link}</span>}
      </p>
    </div>
  );

  return (
    <div className="flex w-full max-w-[868px] flex-col items-center justify-center gap-6 md:flex-row md:gap-12 lg:gap-24">
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

const YogaInfoBlock = () => {
  const yogaTypes: CourseItemProps[] = [
    {
      title: "Hatha yoga",
      description:
        "Dans un rythme lent, le cours se concentre sur l'exploration des postures et des sensations. Il se conclut par un moment d'intégration (savasana).",
      illustration: HathaYogaIllustration,
    },
    {
      title: "Vinyasa yoga",
      description:
        "Un enchaînement fluide de postures guidé par le souffle, axé sur des mouvements fonctionnels et en harmonie avec l'énergie du moment.",
      illustration: VinyasaYogaIllustration,
      imageRight: true,
    },
    {
      title: "Yoga-balles",
      description:
        "Une technique douce avec des balles flexibles pour masser et étirer vos muscles, adaptée à tous, y compris aux futures mamans et personnes à mobilité réduite.",
      illustration: YogaBallesIllustration,
      link: (
        <AnchorLink as={Link} to="/yoga-balles" prefetch="intent">
          En savoir plus...
        </AnchorLink>
      ),
    },
    {
      title: "Yoga pour runner",
      description:
        "Combinez yoga et course à pied : des postures spécifiques sur tapis suivies d'une session en extérieur pour une expérience complète, ouvert à tous niveaux.",
      illustration: RunningYogaIllustration,
      imageRight: true,
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <h2 className="sr-only">Les styles de yoga proposés</h2>
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        {yogaTypes.map((yogaType) => (
          <CourseItem
            key={yogaType.title}
            title={yogaType.title}
            description={yogaType.description}
            illustration={yogaType.illustration}
            imageRight={yogaType.imageRight}
            link={yogaType.link}
          />
        ))}
      </div>
    </section>
  );
};

export default YogaInfoBlock;
