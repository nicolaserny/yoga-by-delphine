import { LearningIcon, ArrowsExpandIcon, YogaIcon } from "./benefitsIcons";

const benefits = [
  {
    title: "Expérience enrichissante",
    description:
      "Découvrez une pratique qui vous reconnecte avec votre corps et vous invite à explorer votre potentiel intérieur.",
    Icon: LearningIcon,
  },
  {
    title: "Au-delà de la technique",
    description:
      "Les cours se concentrent moins sur la technique et plus sur l'expérience personnelle.",
    Icon: ArrowsExpandIcon,
  },
  {
    title: "Yoga pour tous",
    description:
      "Que vous soyez un débutant ou un yogi aguerri, les cours de yoga dynamique sont accessibles à tous.",
    Icon: YogaIcon,
  },
];

const BenefitsSection = () => (
  <section className="-mx-8 bg-purple-100 py-16 md:py-20 lg:-mx-20 lg:py-24 xl:mx-0">
    <div className="width-constraints px-8 md:px-12 lg:px-20 xl:px-10 2xl:px-0">
      <h2 className="sr-only">Les bienfaits du yoga</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex w-full flex-col items-center text-center sm:max-w-[340px]"
          >
            <benefit.Icon className="mb-8 size-12 text-purple-600 sm:size-[60px]" />
            <div className="flex flex-col gap-4 lg:gap-5">
              <h3 className="font-sans text-xl font-semibold text-balance text-gray-900 md:text-2xl">
                {benefit.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-gray-800">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
