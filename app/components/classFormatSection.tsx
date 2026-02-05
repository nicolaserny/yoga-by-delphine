import AnchorLink from "./anchorLink";
import ClassFormatCard from "./classFormatCard";
import {
  OnlineYogaIllustration,
  StudioIllustration,
} from "./classFormatIllustrations";

const ClassFormatSection = () => {
  return (
    <section
      className="-mx-8 bg-purple-100 py-16 md:py-20 lg:-mx-20 lg:py-24 xl:mx-0"
      aria-labelledby="class-formats-heading"
    >
      <div className="width-constraints px-8 md:px-12 lg:px-20 xl:px-10 2xl:px-0">
        <h2
          id="class-formats-heading"
          className="mb-3 text-center font-sans text-2xl leading-normal font-semibold text-gray-900 md:mb-4 md:text-[30px]"
        >
          Formats de cours
        </h2>
        <p className="mb-8 text-center font-sans text-base leading-relaxed text-gray-800 md:mb-12 md:text-lg">
          Choisissez la façon qui vous convient pour pratiquer avec Delphine.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <ClassFormatCard
            title="Yoga en ligne"
            details={
              <>
                En direct sur{" "}
                <AnchorLink
                  href="https://zoom.us"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Zoom
                </AnchorLink>{" "}
                depuis chez vous, avec replay après chaque cours.
              </>
            }
            illustration={OnlineYogaIllustration}
            features={[
              "Lien envoyé par email",
              "Pas besoin de compte Zoom",
              "Tous niveaux bienvenus",
              "Tapis de yoga et tenue confortable suffisent",
            ]}
            buttonText="Voir les cours en ligne"
            buttonVariant="solid"
            buttonHref="/schedule#online"
          />

          <ClassFormatCard
            title="Yoga en studio"
            details={
              <>
                En petit groupe,{" "}
                <span className="font-semibold text-gray-700">
                  64 promenade du Verger, 92130 Issy-les-Moulineaux
                </span>
                .
              </>
            }
            illustration={StudioIllustration}
            features={[
              "Corrections personnalisées en direct",
              "Petit groupe, ambiance chaleureuse",
              "Briques et couvertures fournies",
              "Tapis personnel conseillé",
            ]}
            buttonText="Voir le planning studio"
            buttonVariant="outline"
            buttonHref="/schedule#studio"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassFormatSection;
