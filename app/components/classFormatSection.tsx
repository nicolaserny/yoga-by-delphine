import AnchorLink from "./anchorLink";
import ClassFormatCard from "./classFormatCard";
import {
  OnlineYogaIllustration,
  StudioIllustration,
} from "./classFormatIllustrations";

const ClassFormatSection = () => {
  return (
    <section
      className="bg-purple-100 py-[96px]"
      aria-labelledby="class-formats-heading"
    >
      <div className="width-constraints px-4 sm:px-8 lg:px-[120px]">
        <h2
          id="class-formats-heading"
          className="mb-4 text-center font-sans text-[30px] leading-normal font-semibold text-gray-900"
        >
          Formats de cours
        </h2>
        <p className="mb-12 text-center font-sans text-lg leading-relaxed text-gray-800">
          Choisissez la façon qui vous convient pour pratiquer avec Delphine.
        </p>

        <div className="grid grid-cols-2 gap-8">
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
            buttonHref="/schedule"
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
            buttonHref="/schedule"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassFormatSection;
