import { Link, type MetaFunction } from "react-router";
import Button from "~/components/button";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({ title: "Message envoyé", url: getUrl(location) }),
];

const steps = [
  {
    title: "Message reçu",
    description: "Votre message vient de m'être transmis.",
  },
  {
    title: "Je le lis",
    description: "Je prends le temps de répondre à votre demande.",
  },
  {
    title: "Vous recevez ma réponse",
    description: "Directement dans votre boîte e-mail.",
  },
];

const moreLinks = [
  { to: "/schedule", label: "Programme des cours" },
  { to: "/videos", label: "Vidéos de yoga" },
  { to: "/gift-cards", label: "Cartes-cadeaux" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function SentRoute() {
  return (
    <main className="width-constraints">
      <section className="grid items-center gap-8 pt-10 pb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-16 lg:pb-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-purple-700 uppercase">
            <CheckIcon className="h-4 w-4" />
            Message envoyé
          </span>
          <h1 className="mt-5 text-3xl leading-tight font-semibold text-gray-800 md:text-4xl lg:text-5xl">
            Merci pour le message
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-700">
            Votre message est bien arrivé. Je le lis avec attention et je
            reviens vers vous dès que possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={Link} to="/" variant="solid" colorScheme="purple">
              Retour à l&apos;accueil
            </Button>
            <Button
              as={Link}
              to="/schedule"
              variant="outline"
              colorScheme="purple"
            >
              Voir le programme
            </Button>
          </div>
        </div>

        <div className="rounded-xl bg-white px-6 py-7 shadow lg:px-8 lg:py-9">
          <h2 className="mb-5 text-sm font-semibold tracking-wide text-gray-700 uppercase">
            Et maintenant ?
          </h2>
          <ol>
            {steps.map((step, index) => {
              const isDone = index === 0;
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className={`relative flex gap-4 ${isLast ? "" : "pb-6"}`}
                >
                  {!isLast && (
                    <span
                      className="absolute top-10 bottom-0 left-[19px] w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-base font-semibold ${
                      isDone
                        ? "border-purple-600 bg-purple-600 text-white"
                        : "border-gray-300 bg-white text-gray-700"
                    }`}
                    aria-hidden="true"
                  >
                    {isDone ? (
                      <CheckIcon className="h-[18px] w-[18px]" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <div>
                    <h3 className="mt-2 text-base font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-normal text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <nav
        aria-label="À découvrir en attendant"
        className="grid gap-3 pb-16 md:grid-cols-3"
      >
        {moreLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            prefetch="intent"
            className="flex min-h-14 items-center justify-between rounded-xl bg-white px-5 py-4 text-base font-semibold text-gray-800 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:outline-none"
          >
            {link.label}
            <span className="text-purple-600" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default SentRoute;
