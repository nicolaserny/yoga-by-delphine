import React from "react";
import { CourseDescription } from ".";
import { useCourseImages } from "../hooks";

const SubSection = ({ title, elements, className }) => (
  <div className={`-mx-8 lg:-mx-20 py-6 md:py-8 lg:py-16 ${className}`}>
    <section className="width-constraints px-8 lg:px-20 xl:px-0">
      <h1 className="text-gray-800 text-xl lg:text-2xl font-semibold">
        {title}
      </h1>
      <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-x-24 md:gap-y-12 md:items-center mt-4 md:mt-8 lg:mt-12 w-full">
        {elements.map((element) => (
          <CourseDescription
            key={element.title}
            title={element.title}
            description={element.description}
            description2={element.description2}
            image={element.image}
            imageRight={element.imageRight}
          />
        ))}
      </div>
    </section>
  </div>
);

const YogaInfoBlock = () => {
  const images = useCourseImages();
  const yogaDetails = [
    {
      title: "Hatha yoga",
      description:
        "Le rythme est lent, on prend le temps d'explorer les postures physiques, les ressentis, en y restant un certain temps.",
      description2:
        "Le cours comprend un échauffement des articulations et une préparation respiratoire, éventuellement un enchaînement de postures sur le souffle (type salutations au soleil), puis viennent des postures plus statiques. Il se termine sur un temps d’intégration (savasana) et selon le thème du cours, une assise en méditation ou un pranayama (travail sur le souffle). ",
      image: images["course-1"],
    },
    {
      title: "Vinyasa yoga",
      description:
        "Le cours est un mouvement permanent, sans fin, emmené par le souffle. On suit un thème en relation avec l’énergie du moment (saison, événement...).",
      description2:
        "L’accent est mis sur des mouvements fonctionnels, respectant les articulations. Le cours se termine sur un temps d’intégration (savasana) et selon le thème du cours, une assise en méditation ou un pranayama (travail sur le souffle).",
      image: images["course-2"],
      imageRight: false,
    },
    {
      title: "Running yoga",
      description:
        "Un temps sur tapis, un temps en baskets, ou comment améliorer et apprendre à courir grâce au yoga.",
      description2:
        "Le cours commence sur le tapis de yoga, au sol. On prend le temps de se connecter au souffle pour détendre, animer, ouvrir et renforcer le corps. Les postures et mouvements sont spécialement étudiés pour le geste de la course à pied. La deuxième partie du cours, en extérieur, permet d’intégrer le travail sur tapis en condition de course à pied. Le cours s’adresse à tout le monde, et surtout à celles et ceux qui souhaitent se mettre ou remettre à la course à pied.",
      image: images["course-3"],
    },
  ];
  const courses = [
    {
      title: "Cours en ligne sur zoom",
      description: (
        <span>
          Les cours ont lieu via la plateforme{" "}
          <a
            className="text-purple-600 hover:text-purple-800 font-semibold underline"
            href="https://zoom.us"
            target="_blank"
            rel="noreferrer noopener"
          >
            Zoom
          </a>
          , en direct. Un lien vers la salle virtuelle vous sera envoyé sur
          l’email utilisé lors de la réservation (pas besoin de créer un compte
          pour participer). Le lien Zoom s’ouvre dans un navigateur internet, ou
          l’application Zoom. L’idéal est de pouvoir installer votre appareil de manière à ce que je vous vois pratiquer.
        </span>
      ),
      description2:
        "Pour le cours en lui même, ayez une tenue confortable et un tapis de yoga ou fitness. Des briques de yoga ou tout autre accessoire pour rendre l’assise ou la position allongée confortable peuvent être utiles.",
      image: images["course-4"],
      imageRight: false,
    },
    {
      title: "Cours en studio",
      description: "Prochainement...",
      description2: "",
      image: images["course-5"],
    },
  ];
  return (
    <>
      <SubSection
        title="Les styles de yoga proposés"
        elements={yogaDetails}
        className="bg-white"
      />
      <SubSection title="Les différents types de cours" elements={courses} />
    </>
  );
};

export default YogaInfoBlock;
