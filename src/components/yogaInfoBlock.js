import React from "react";
import { CourseDescription } from ".";
import { useCourseImages } from "../hooks";
import { Link } from "gatsby";

const SubSection = ({ title, elements, className }) => (
  <div
    className={`-mx-8 lg:-mx-20 xl:-mx-10 2xl:mx-0 py-5 md:py-8 lg:py-16 ${className}`}
  >
    <section className="width-constraints px-8 lg:px-20 xl:px-10 2xl:px-0">
      <h2 className="text-gray-800 text-xl lg:text-2xl font-semibold">
        {title}
      </h2>
      <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-x-8 lg:gap-x-12 xl:gap-x-24 md:gap-y-12 md:items-center mt-4 md:mt-8 lg:mt-12 w-full">
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
      title: "Yoga-balles",
      description:
        "Le yoga-balles est une méthode simple et efficace qui vous permet de prendre votre santé en charge en apprenant à utiliser des balles en caoutchouc flexibles et adhérentes pour masser, pétrir et étirer vos muscles et tissus conjonctifs. Ce type de yoga convient à tous, même aux femmes enceintes et aux personnes à mobilité réduite. ",
      description2: (
        <span>
          Le cours dure généralement 1 heure, et nécessite un peu de matériel.{" "}
          <Link
            className="text-purple-600 hover:text-purple-800 font-semibold underline"
            to="/yoga-balles/"
          >
            En savoir plus...
          </Link>
        </span>
      ),
      image: images["course-yoga-balles"],
    },
    {
      title: "Running yoga",
      description:
        "Un temps sur tapis, un temps en baskets, ou comment améliorer et apprendre à courir grâce au yoga.",
      description2:
        "Le cours commence sur le tapis de yoga, au sol. On prend le temps de se connecter au souffle pour détendre, animer, ouvrir et renforcer le corps. Les postures et mouvements sont spécialement étudiés pour le geste de la course à pied. La deuxième partie du cours, en extérieur, permet d’intégrer le travail sur tapis en condition de course à pied. Le cours s’adresse à tout le monde, et surtout à celles et ceux qui souhaitent se mettre ou remettre à la course à pied.",
      image: images["course-3"],
      imageRight: false,
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
          l’application Zoom. L’idéal est de pouvoir installer votre appareil de
          manière à ce que je vous voie pratiquer.
        </span>
      ),
      description2:
        "Pour le cours en lui même, ayez une tenue confortable et un tapis de yoga ou fitness. Des briques de yoga ou tout autre accessoire pour rendre l’assise ou la position allongée confortable peuvent être utiles.",
      image: images["course-4"],
    },
    {
      title: "Cours en studio",
      description: (
        <>
          Adresse:{" "}
          <span className="font-medium text-purple-600">
            IWKA - 7 impasse Crozatier 75012 Paris
          </span>
          <br /> Vous devez avoir votre propre tapis de yoga, le studio n’a pas
          de tapis adéquat. Il faudra arriver quelques minutes avant le cours,
          et sonner pour qu’on vous ouvre. Les chaussures sont à laisser à
          l'entrée.
        </>
      ),
      description2: (
        <>
          Vous avez accès à des vestiaires, pour vous changer et déposer vos
          effets personnels dans des casiers. Selon les mesures sanitaires en
          cours, des accessoires (briques, coussins de méditation...) sont
          disponibles pour la pratique (mais pas de tapis) Vous pouvez
          évidemment venir avec vos propres accessoires.
        </>
      ),
      image: images["course-5"],
      imageRight: false,
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
