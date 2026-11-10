import { Link } from "react-router";
import Button from "./button";

const badges = ["Adhésion annuelle", "Cours d'essai possible"];

const StudioBanner = () => (
  <div className="flex flex-col gap-4 rounded-2xl border border-purple-200 bg-purple-100/60 p-5 sm:p-6">
    <div>
      <p className="text-lg leading-snug font-semibold text-purple-900">
        Inscription à l'année auprès de l'association Asepgi92
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-800">
        Pas de réservation à la séance&nbsp;: l'adhésion est annuelle et se
        règle directement auprès de l'association.
      </p>
    </div>
    <ul className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li
          key={badge}
          className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-purple-800"
        >
          {badge}
        </li>
      ))}
    </ul>
    <div className="flex flex-col gap-2.5 sm:flex-row">
      <Button
        as="a"
        href="https://asepgi92.fr/yoga/"
        target="_blank"
        rel="noreferrer noopener"
        variant="solid"
        colorScheme="purple"
        responsive={false}
        className="text-center"
      >
        S'inscrire sur asepgi92.fr
      </Button>
      <Button
        as={Link}
        to="/contact"
        variant="outline"
        colorScheme="purple"
        responsive={false}
        className="bg-white text-center"
      >
        Demander un cours d'essai
      </Button>
    </div>
  </div>
);

export default StudioBanner;
