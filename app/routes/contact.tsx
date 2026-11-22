import React from "react";
import { type MetaFunction, useNavigate } from "react-router";
import Button from "~/components/button";
import Input from "~/components/input";
import Label from "~/components/label";
import Textarea from "~/components/textarea";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({ title: "Me contacter", url: getUrl(location) }),
];

function ContactRoute() {
  const navigate = useNavigate();
  const firstNameRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Netlify will accept form submissions to any valid URL
    // by submitting to a static file we skip Remix's POST catcher
    fetch("/favicon-32x32.png", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as URLSearchParams).toString(),
    })
      .then(() => {
        navigate("/sent");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  React.useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  return (
    <main className="width-constraints">
      <section className="mx-auto max-w-160 pt-6 text-center md:pt-8">
        <h1 className="text-purple-1000 text-3xl font-bold md:text-4xl">
          Me contacter
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-800">
          Si vous avez des questions, besoin d'un renseignement ou un souci avec
          une commande, je serai ravie de vous aider.
        </p>
      </section>
      <form
        name="contactme"
        method="POST"
        action="/sent"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mx-auto mt-6 mb-12 max-w-170 overflow-hidden rounded-2xl bg-white shadow-lg md:mt-8 md:mb-16"
      >
        <div className="flex items-center gap-3 bg-purple-100 px-6 py-5 text-[15px] font-semibold text-purple-900 md:px-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Écrivez-moi un message
        </div>
        <div className="p-6 md:p-10">
          <input type="hidden" name="form-name" value="contactme" />
          <div className="hidden">
            <label htmlFor="bot-field">Not for human</label>
            <input name="bot-field" id="bot-field" type="text" />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-5">
            <div className="mb-5">
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                ref={firstNameRef}
                name="firstname"
                id="firstname"
                type="text"
                autoComplete="given-name"
                required={true}
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="lastname">Nom</Label>
              <Input
                name="lastname"
                id="lastname"
                type="text"
                autoComplete="family-name"
                required={true}
              />
            </div>
          </div>
          <div className="mb-5">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              autoComplete="email"
              required={true}
            />
          </div>
          <div className="mb-5">
            <div className="flex flex-wrap justify-between gap-x-4">
              <Label htmlFor="message">Message</Label>
              <div className="mb-1 text-sm font-medium text-gray-700">
                Max. 500 caractères
              </div>
            </div>
            <Textarea
              className="h-36"
              maxLength={500}
              name="message"
              id="message"
              placeholder="Détailler vos questions"
              required={true}
            />
          </div>
          <div className="flex md:justify-end">
            <Button
              variant="solid"
              size="large"
              colorScheme="purple"
              type="submit"
              className="w-full md:w-auto md:px-10"
            >
              Envoyer
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default ContactRoute;
