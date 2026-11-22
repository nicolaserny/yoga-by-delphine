import { Link, type MetaFunction } from "react-router";
import Button from "~/components/button";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({ title: "Erreur", url: getUrl(location) }),
];

function ErrorRoute() {
  return (
    <main className="width-constraints">
      <div className="flex flex-col-reverse items-center justify-between gap-12 py-12 lg:flex-row lg:py-20">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold tracking-widest text-purple-700 uppercase">
            Erreur
          </p>
          <h1 className="text-4xl font-semibold text-purple-900 md:text-5xl lg:text-6xl">
            Prenez une respiration
          </h1>
          <p className="mt-6 text-xl font-semibold text-gray-900 lg:text-2xl">
            Une erreur s'est produite
          </p>
          <p className="mt-2 mb-9 text-base font-medium text-gray-800 lg:text-lg">
            Veuillez réessayer ou contactez-moi
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 lg:justify-start">
            <Button
              as={Link}
              to="/"
              variant="solid"
              colorScheme="purple"
              size="large"
              className="text-center"
            >
              Retour à l'accueil
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="link"
              colorScheme="purple"
              className="text-center sm:text-left"
            >
              Contacter Delphine
            </Button>
          </div>
        </div>

        <svg
          className="w-64 shrink-0 md:w-80 lg:w-96"
          viewBox="0 0 400 400"
          role="img"
          aria-label="Cercles concentriques qui se dilatent comme une respiration"
        >
          <circle
            cx="200"
            cy="200"
            r="190"
            className="motion-safe:animate-breathe origin-center fill-purple-100 motion-safe:[animation-delay:1s]"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            className="motion-safe:animate-breathe origin-center fill-purple-200 motion-safe:[animation-delay:0.5s]"
          />
          <circle
            cx="200"
            cy="200"
            r="90"
            className="motion-safe:animate-breathe origin-center fill-purple-600"
          />
          <circle cx="200" cy="200" r="6" className="fill-purple-100" />
        </svg>
      </div>
    </main>
  );
}

export default ErrorRoute;
