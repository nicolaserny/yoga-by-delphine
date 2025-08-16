import type { MetaFunction } from "react-router";
import { PageTitle } from "~/components";
import Button from "~/components/button";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({
    title: "Cours de yoga en vidéo",
    url: getUrl(location),
  }),
];

const videoSections = [
  {
    title: "Yoga mini routine",
    videoUrl: `https://www.youtube.com/embed/Ha5i6OoZ-tc`,
    videoTitle: "Yoga mini routine",
  },
  {
    title: "Hatha Yoga",
    videoUrl: `https://www.youtube.com/embed/gF4w_TZI-Cg`,
    videoTitle: "Hatha yoga - vers upavistha konasana",
  },
  {
    title: "Yoga Vinyasa",
    videoUrl: `https://www.youtube.com/embed/oSmYigfg8nQ`,
    videoTitle: "Yoga Vinyasa tout niveau",
  },
  {
    title: "Yoga Balles",
    videoUrl: `https://www.youtube.com/embed/JZuqoCZU2pg`,
    videoTitle: "Yoga Balles",
  },
];

function videos() {
  return (
    <main className="width-constraints">
      <PageTitle>Cours de yoga en vidéo</PageTitle>
      <p className="mt-3 mb-10 text-base leading-normal font-normal text-gray-800 md:mb-16 lg:mb-24">
        Découvrez des séances de Yoga pour tout niveau.
      </p>
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-24">
        {videoSections.map((section) => (
          <section
            key={section.title}
            className="flex flex-col items-start justify-center gap-6 text-base leading-normal font-normal text-gray-800 sm:mx-auto sm:w-[min(100%,42rem)] lg:mx-0 lg:w-full lg:flex-row"
          >
            <h2 className="text-lg leading-none font-semibold text-gray-800 lg:w-2/5 lg:text-xl xl:w-1/3">
              {section.title}
            </h2>
            <div className="aspect-h-5 aspect-w-9 lg:aspect-h-4 xl:aspect-h-3 w-full xl:max-w-2xl">
              <iframe
                title={section.videoTitle}
                src={section.videoUrl}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="h-full w-full rounded-md border-0 shadow-lg"
              ></iframe>
            </div>
          </section>
        ))}
      </div>
      <div className="mx-auto my-10 w-full bg-white p-8 text-center shadow-md sm:w-[32rem] md:my-16 lg:my-24">
        <h2 className="text-lg leading-none font-semibold text-gray-800 lg:text-xl">
          Ma chaîne YouTube
        </h2>
        <p className="my-4 text-base leading-normal font-normal text-gray-800">
          Je publie régulièrement de nouvelles vidéos (cours, mini routines...).
          Venez pratiquer avec moi.
        </p>
        <Button
          variant="solid"
          colorScheme="red"
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.youtube.com/@delphineleblancyoga"
        >
          S'abonner
        </Button>
      </div>
    </main>
  );
}

export default videos;
