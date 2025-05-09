import { type MetaFunction, useNavigate } from "@remix-run/react";
import React from "react";
import { PageTitle } from "../components";
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
        alert(error);
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
      <section className="mb-12 md:grid md:grid-cols-2 md:gap-x-12">
        <div className="text-base leading-normal font-normal text-gray-800 md:mr-4 lg:text-lg">
          <PageTitle>Me contacter</PageTitle>
          <p className="mt-2 mb-3 md:mt-3 md:mb-5 lg:mt-4 lg:mb-12">
            Si vous avez des questions, besoin d'un rensignement ou un soucis
            avec une commande, je serai ravie de vous aider.
          </p>
          <form
            name="contactme"
            method="POST"
            action="/sent"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contactme" />
            <div className="hidden">
              <label htmlFor="bot-field">Not for human</label>
              <input name="bot-field" id="bot-field" type="text" />
            </div>
            <div className="w-full lg:flex">
              <div className="mb-6 lg:mr-4 lg:flex-auto">
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
              <div className="mb-6 lg:ml-4 lg:flex-auto">
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
            <div className="mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                required={true}
              />
            </div>
            <div className="mb-6">
              <div className="flex">
                <Label className="flex-auto" htmlFor="message">
                  Message
                </Label>
                <div className="mb-1 flex-auto text-right text-sm font-medium text-gray-600 lg:text-base">
                  Max. 500 caractères
                </div>
              </div>
              <Textarea
                className="h-32"
                maxLength={500}
                name="message"
                id="message"
                placeholder="Détailler vos questions"
                required={true}
              />
            </div>
            <div className="flex flex-row-reverse">
              <Button
                variant="solid"
                size="large"
                colorScheme="red"
                type="submit"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 912.921 680.228"
          className="my-10 w-full self-center md:my-0"
        >
          <path fill="#3f3d56" d="M102.002 641.27H658.11v2.361H102.002z" />
          <path
            d="M396.917 316.375s-11.802 53.11 11.802 43.668 9.442-46.028 9.442-46.028zM617.615 334.078s28.324 34.226 10.621 41.307-27.144-31.865-24.784-35.406 14.163-5.9 14.163-5.9z"
            className="fill-red-200"
          />
          <circle
            cx="550.343"
            cy="56.731"
            r="35.406"
            className="fill-red-200"
          />
          <path
            className="fill-red-200"
            d="M523.789 70.304l-4.721 36.586 38.946 14.162 8.262-41.307-42.487-9.441z"
          />
          <path
            d="M545.622 106.3s-20.007-9.877-24.166-17.921l-8.88 8.48s-63.73-5.902-73.172 25.964-1.18 147.525-1.18 147.525-12.982 51.928-9.442 53.109 47.208 22.423 108.579 10.621c0 0 27.144-4.72 31.865-1.18s-2.36-56.65-2.36-56.65 47.208-106.217 38.947-119.2-44.848-40.127-44.848-40.127l2.36-12.982s-16.523 7.082-17.703 2.36z"
            fill="#cfcce0"
          />
          <path
            d="M448.846 114.561s-21.244 10.622-24.784 27.145-36.587 153.426-33.046 161.687 2.36 18.883 2.36 18.883l30.686-3.54s-5.901-8.262-2.36-11.802 7.08-15.343 4.72-20.064-4.72 3.541 8.261-11.802 42.488-155.786 14.163-160.507zM598.731 154.688s10.032.59 12.392 17.113 6.492 118.61 6.492 118.61 15.342 33.046 9.441 37.766-2.36 11.802-2.36 11.802l-21.244 5.901-46.028-71.992z"
            fill="#cfcce0"
          />
          <path
            d="M432.323 318.736s-7.081 1.18-7.081 27.144-12.982 106.219-4.721 119.2 9.442 129.823 9.442 129.823 22.423 9.441 41.307-21.244l2.36-16.523 4.72-80.253 18.884-100.317 25.964 110.939s-3.54 133.362 9.442 133.362 37.766-10.622 37.766-10.622 5.901-11.802 3.541-17.703-4.72-4.72-2.36-9.441 5.9-127.462 5.9-127.462-4.72-126.281-10.621-129.822-134.543-7.081-134.543-7.081z"
            className="fill-gray-900"
          />
          <path
            d="M432.323 590.182l-18.883 20.063s-34.226 31.866-4.721 33.046 46.028-18.883 46.028-21.244 1.18-10.621 9.441-10.621 28.325-20.064 23.604-28.325-18.883-11.802-18.883-11.802zM533.82 616.146s-14.162 28.325-5.9 34.226 10.621 8.262 10.621 8.262 7.081-1.18 5.901 9.441 42.487 16.523 44.848 8.262 1.18-24.785-3.54-29.505-18.884-37.767-18.884-37.767-15.343-17.703-33.046 7.081zM586.076 28.301l6.67-.947S583.46 10.264 565.49 7.16l6.308-4.258S560.836-4.93 546.669 5.14c-7.447 5.293-16.094 11.541-22.454 19.406l-6.506-1.59 1.254 6.642-10.965 3.657 10.017 1.31a34.395 34.395 0 00-2.688 9.853 13.21 13.21 0 002.647 9.543s11.346-13.755 11.94-16.187l-1.486 6.08s7.413-3.987 8.305-7.635l2.273 5.066L542.298 35l18.8 11.683-1.976-6.282 12.257 4.928-3.336-7.903s12.428 11.414 11.346 18.238c-1.083 6.823 1.572 14.188 1.572 14.188s18.903-28.516 5.115-41.55z"
            className="fill-gray-900"
          />
          <path fill="#3f3d56" d="M723.921 429.45h189v2.262h-189z" />
          <path fill="#cfcce0" d="M160.896 603.708h45.558v45.558h-45.558z" />
          <path
            d="M200.46 643.272h-47.956v-47.956h47.956zm-45.558-2.398h43.16v-43.16h-43.16z"
            fill="#3f3d56"
          />
          <path
            fill="#f2f2f2"
            d="M227.467 216.786l28.832-11.15 10.764 27.832-28.832 11.15z"
          />
          <path
            d="M261.853 231.273l-30.349 11.738-11.331-29.298 30.349-11.738zm-29.398 9.686l27.314-10.564-10.198-26.368-27.314 10.564z"
            fill="#3f3d56"
          />
          <path
            fill="#f2f2f2"
            d="M776.03 515.709l10.05 29.234-28.22 9.702-10.05-29.234z"
          />
          <path
            d="M760.25 549.521l-10.58-30.772 29.707-10.213 10.58 30.772zm-8.565-29.744l9.521 27.695 26.736-9.192-9.521-27.694z"
            fill="#3f3d56"
          />
          <path
            d="M143.34 399.622c16.904.363 30.35 12.612 30.35 12.612s-13.959 11.662-30.862 11.3-30.35-12.613-30.35-12.613 13.959-11.662 30.863-11.3zM58.358 341.921c15.272 7.255 32.783 2.335 32.783 2.335s-7.248-16.683-22.52-23.938-32.783-2.335-32.783-2.335 7.248 16.683 22.52 23.938z"
            className="fill-purple-600"
          />
          <path
            d="M59.91 334.711c16.838-1.539 31.575 9.123 31.575 9.123s-12.56 13.156-29.398 14.695-31.575-9.123-31.575-9.123 12.56-13.156 29.398-14.695zM121.63 337.626c-1.613 16.83 8.982 31.616 8.982 31.616s13.213-12.502 14.826-29.333-8.981-31.615-8.981-31.615-13.212 12.502-14.826 29.332zM200.926 440.846c-8.831 14.418-5.793 32.352-5.793 32.352s17.357-5.442 26.188-19.86 5.793-32.351 5.793-32.351-17.356 5.441-26.188 19.859z"
            fill="#3f3d56"
          />
          <path
            d="M175.306 597.604l1.287-.87a40.32 40.32 0 01-7.117-22.36c.036-11.694 5.78-22.51 11.335-32.97a420.957 420.957 0 003.048-5.811 126.848 126.848 0 009.866-24.768c8.616-32.02.133-69.797-22.692-101.055-18.107-24.796-45.1-46.48-82.519-66.288l-.726 1.373c37.206 19.696 64.025 41.23 81.99 65.831 22.55 30.881 30.942 68.166 22.447 99.735a125.341 125.341 0 01-9.749 24.465c-.986 1.927-2.01 3.855-3.037 5.79-5.643 10.626-11.479 21.615-11.516 33.693a41.888 41.888 0 007.383 23.235z"
            fill="#3f3d56"
          />
          <circle cx="14.756" cy="330.767" r="14.756" fill="#3f3d56" />
          <path
            className="fill-gray-900"
            d="M818.044 417.926l-189.935-68.217 33.909-94.413 118.263-29.003 71.673 97.221-33.91 94.412z"
          />
          <path
            d="M795.035 399.204l-141.94-54.106c36.849-49.357 53.326-84.173 53.338-138.959l141.94 54.106c-32.976 46.841-46.766 82.054-53.338 138.96z"
            fill="#f2f2f2"
          />
          <path
            fill="#3f3d56"
            d="M732.672 239.619l73.535 28.03-1.304 3.42-73.535-28.03zM727.457 253.3l73.535 28.03-1.304 3.42-73.535-28.03zM722.242 266.98l73.534 28.031-1.303 3.42-73.535-28.03zM717.027 280.66l73.535 28.032-1.304 3.42-73.534-28.031zM711.812 294.342l73.535 28.03-1.304 3.42-73.534-28.03zM706.597 308.023l73.535 28.03-1.304 3.42-73.535-28.03zM701.382 321.704l73.535 28.03-1.304 3.42-73.535-28.03zM696.166 335.384l73.535 28.031-1.304 3.42-73.535-28.03z"
          />
          <path
            fill="#3f3d56"
            d="M813.656 430.144l-189.935-68.217 38.297-106.631 80.208 75.206 109.728-6.988-38.298 106.63z"
          />
          <path
            className="fill-purple-600"
            d="M717.148 396.545l-94.706-34.015 23.076-64.253 1.883.676-22.4 62.37 92.823 33.339-.676 1.883z"
          />
          <path
            className="fill-purple-600"
            d="M655.715 318.24l27.769 9.973-3.99 11.108-27.768-9.973z"
          />
          <path
            fill="#3f3d56"
            d="M369.521 642.111l-148.656-.079 1.167-83.456 73.878 33.205 74.778-31.126-1.167 81.456z"
          />
          <path
            className="fill-purple-600"
            d="M232.701 603.94l21.734.303-.121 8.694-21.734-.304zM371.185 560.541l-75.14 38.307-74.404-38.307v-2.21h149.544v2.21z"
          />
          <ellipse
            cx="923.327"
            cy="345.645"
            rx="9.03"
            ry="25"
            transform="rotate(-69.133 771.814 394.867)"
            className="fill-purple-600"
          />
          <path
            d="M823.565 102.553a38 38 0 00-47.57 25.003c-6.23 20.04 10.752 93.405 10.752 93.405s55.59-50.798 61.821-70.839a38 38 0 00-25.003-47.57zm-16.628 53.474a18 18 0 1122.533-11.843 18 18 0 01-22.533 11.843z"
            className="fill-purple-600"
          />
        </svg>
      </section>
    </main>
  );
}

export default ContactRoute;
