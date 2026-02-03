import React from "react";
import type { MetaFunction } from "react-router";
import { BlurrableImage, PageTitle } from "~/components";
import AnchorLink from "~/components/anchorLink";
import { CheckIcon } from "~/components/checkIcon";
import { blurDataUrls } from "~/generated/blurDataUrls";
import { getImgProps, images } from "~/images";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({ title: "Delphine, professeur de Yoga", url: getUrl(location) }),
];

const StyledLi: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="mb-1 last:mb-0">
    <CheckIcon className="mr-4 inline-block text-purple-600" />
    {children}
  </li>
);

const StyledLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
}) => (
  <AnchorLink
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    size="base"
    responsive={true}
  >
    {children}
  </AnchorLink>
);

function About() {
  return (
    <main className="width-constraints">
      <PageTitle>Je suis Delphine, professeur de Yoga...</PageTitle>
      <section className="my-4 gap-x-4 md:my-8 md:grid md:grid-cols-2 lg:my-12 xl:gap-x-12">
        <div className="text-base leading-relaxed font-normal text-gray-800 md:mr-4 lg:text-lg">
          <h2 className="mb-3 text-lg leading-normal font-semibold md:mb-5 lg:mb-8 lg:text-xl">
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
                <StyledLink href="https://yogaforlifeonline.com/the-yoga-teacher-revolution-training/">
                  CSV (core strength vinyasa)
                </StyledLink>{" "}
                yoga et yoga shred
              </StyledLi>
              <StyledLi>LYT yoga method</StyledLi>
              <StyledLi>
                <StyledLink href="https://primalvinyasayoga.com/">
                  Primal vinyasa yoga
                </StyledLink>
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://budokonacademy.thinkific.com/">
                  Budokon yoga
                </StyledLink>
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://animalflow.com/">
                  Animal flow
                </StyledLink>
              </StyledLi>
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
                </StyledLink>{" "}
                avec Bénédicte Opsomer
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://lytyoga.com/teacher-training/">
                  LYT yoga
                </StyledLink>{" "}
                avec Lara Heimann
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://universitedeyoga.com/">
                  Diva yoga
                </StyledLink>{" "}
                avec Maryse Lehoux
              </StyledLi>
              <StyledLi>
                <StyledLink href="https://universitedeyoga.com/balles/">
                  Yoga balles
                </StyledLink>{" "}
                avec Mireille Martel et Julie Cadorette
              </StyledLi>
            </ol>
          </div>
        </div>
        <div className="lg:pl-8">
          <div className="relative mx-auto md:mt-[80px] md:mb-[100px] md:w-[calc(100%-110px)] lg:mt-[80px] lg:mb-[100px] lg:w-[calc(100%-120px)] xl:mt-[133px] xl:mb-[160px] xl:w-[calc(100%-168px)]">
            <BlurrableImage
              className="aspect-h-4 aspect-w-3 w-full shadow-lg"
              blurDataUrl={
                blurDataUrls[
                  images["profile-3"].id as keyof typeof blurDataUrls
                ]
              }
              img={
                <img
                  className="rounded-lg object-cover object-center"
                  loading="lazy"
                  {...getImgProps(images["profile-3"], {
                    widths: [280, 560, 840, 1100, 1650],
                    sizes: [
                      "(max-width: 768px) 100vw",
                      "(min-width:768px) and (max-width:1200px) 50vw",
                      "376px",
                    ],
                  })}
                />
              }
            />
            <div className="absolute bottom-0 left-0 hidden -translate-x-1/2 shadow-lg md:block md:w-[110px] md:translate-y-[100px] lg:w-[120px] lg:translate-y-[100px] xl:w-[168px] xl:translate-y-[160px]">
              <BlurrableImage
                className="aspect-h-4 aspect-w-3 w-full"
                blurDataUrl={
                  blurDataUrls[
                    images["profile-4"].id as keyof typeof blurDataUrls
                  ]
                }
                img={
                  <img
                    className="rounded-lg object-cover object-center"
                    loading="lazy"
                    {...getImgProps(images["profile-4"], {
                      widths: [280, 560, 840, 1100, 1650],
                      sizes: [
                        "(max-width: 768px) 100vw",
                        "(min-width:768px) and (max-width:1200px) 120px",
                        "168px",
                      ],
                    })}
                  />
                }
              />
            </div>
            <div className="absolute top-0 right-0 hidden translate-x-1/2 shadow-lg md:block md:w-[110px] md:-translate-y-[80px] lg:w-[120px] lg:-translate-y-[80px] xl:w-[168px] xl:-translate-y-[133px]">
              <BlurrableImage
                className="aspect-h-4 aspect-w-3 w-full"
                blurDataUrl={
                  blurDataUrls[
                    images["profile-2"].id as keyof typeof blurDataUrls
                  ]
                }
                img={
                  <img
                    className="rounded-lg object-cover object-center"
                    loading="lazy"
                    {...getImgProps(images["profile-2"], {
                      widths: [280, 560, 840, 1100, 1650],
                      sizes: [
                        "(max-width: 768px) 100vw",
                        "(min-width:768px) and (max-width:1200px) 120px",
                        "168px",
                      ],
                    })}
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
