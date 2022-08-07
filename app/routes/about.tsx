import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { BlurrableImage, PageTitle } from "~/components";
import { getImgProps, images } from "~/images";
import type { BlurredDataUrlsLoader } from "~/models/images.server";
import { getBlurredDataUrlsFromApi } from "~/models/images.server";

export const loader: LoaderFunction = async () => {
  const blurDataUrls = await getBlurredDataUrlsFromApi([images["about"].id]);
  return json<BlurredDataUrlsLoader>({ blurDataUrls }, { status: 200 });
};

const StyledLi: React.FC<{}> = ({ children }) => (
  <li className="mb-1 last:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      height="1.4em"
      className="inline-block mr-4  text-purple-600"
    >
      <path
        fill="currentColor"
        d="M50 3.75C24.498 3.75 3.75 24.498 3.75 50S24.498 96.25 50 96.25 96.25 75.502 96.25 50 75.502 3.75 50 3.75zm25.636 36.827L46.098 70.115a4.866 4.866 0 01-3.416 1.415v2l-.043-2a4.855 4.855 0 01-3.433-1.476L24.304 54.608a4.835 4.835 0 01.122-6.83 4.803 4.803 0 013.353-1.354c1.323 0 2.558.524 3.477 1.476l11.488 11.907 26.062-26.061a4.8 4.8 0 013.416-1.415c1.29 0 2.503.502 3.415 1.414a4.838 4.838 0 01-.001 6.832z"
      />
    </svg>
    {children}
  </li>
);

const StyledLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
}) => (
  <a
    className="text-purple-600 hover:text-purple-800 text-sm lg:text-base font-semibold underline"
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

function About() {
  const { blurDataUrls } = useLoaderData() as BlurredDataUrlsLoader;
  return (
    <main className="width-constraints">
      <PageTitle>Je suis Delphine, professeur de Yoga...</PageTitle>
      <section className="md:grid md:grid-cols-2 gap-x-4 xl:gap-x-12 my-4 md:my-8 lg:my-12">
        <div className="text-base lg:text-lg font-normal text-gray-800 leading-relaxed md:mr-4">
          <h2 className="text-lg lg:text-xl font-semibold leading-normal mb-3 md:mb-5 lg:mb-8">
            Le yoga est un style de vie
          </h2>
          <p className="mb-3 md:mb-5 lg:mb-8">
            Mes cours représentent ma pratique personnelle. Ils évoluent donc
            avec ce que j'explore, découvre et expérimente.
          </p>
          <div className="mb-3 md:mb-5 lg:mb-8">
            <h3 className="font-medium">Mes influences actuelles :</h3>
            <ol className="mt-2 leading-loose">
              <StyledLi>hatha yoga, vinyasa yoga</StyledLi>
              <StyledLi>
                CSV (core strength vinyasa) yoga et yoga shred
              </StyledLi>
              <StyledLi>LYT yoga method</StyledLi>
              <StyledLi>Primal vinyasa yoga</StyledLi>
              <StyledLi>Budokon yoga</StyledLi>
              <StyledLi>Animal flow</StyledLi>
            </ol>
          </div>
          <div className="mb-3 md:mb-5 lg:mb-8">
            <h3 className="font-medium">Mes formations :</h3>
            <ol className="mt-2 leading-loose">
              <StyledLi>
                Hatha yoga:{" "}
                <StyledLink href="https://ecolefrancaisedeyoga.fr">
                  EFY, école française du yoga
                </StyledLink>
              </StyledLi>
              <StyledLi>
                Yoga alchimique, avec{" "}
                <StyledLink href="https://www.dayogaschool.com">
                  Mira Jamadi
                </StyledLink>
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://www.running-yogis.com">
                  Running yoga
                </StyledLink>
              </StyledLi>
              <StyledLi>
                En cours de formation :{" "}
                <StyledLink href="https://lytyoga.com/about-us/">
                  LYT yoga method
                </StyledLink>
              </StyledLi>
            </ol>
          </div>
        </div>
        <div className="lg:pl-8">
          <BlurrableImage
            className="aspect-h-7 aspect-w-5 w-full self-start"
            blurDataUrl={blurDataUrls[images["about"].id]}
            img={
              <img
                className="rounded-lg object-cover object-center"
                {...getImgProps(images.about, {
                  widths: [280, 560, 840, 1100, 1650],
                  sizes: ["(min-width: 600px) 600px", "50vw"],
                })}
              />
            }
          />
        </div>
      </section>
    </main>
  );
}

export default About;
