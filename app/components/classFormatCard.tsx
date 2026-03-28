import { Link } from "react-router";
import Button from "./button";
import { CheckIcon } from "./checkIcon";

interface ClassFormatCardProps {
  title: string;
  details: React.ReactNode;
  illustration: React.ComponentType<{ className?: string }>;
  features: string[];
  buttonText: string;
  buttonVariant: "solid" | "outline";
  buttonHref: string;
}

const ClassFormatCard = ({
  title,
  details,
  illustration: Illustration,
  features,
  buttonText,
  buttonVariant,
  buttonHref,
}: ClassFormatCardProps) => {
  return (
    <article className="flex flex-col rounded-xl bg-white p-6 shadow-lg md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-sans text-xl font-semibold text-gray-900 md:text-2xl lg:text-[30px]">
          {title}
        </h3>
      </div>

      {/* Details */}
      <div className="mb-8 min-h-[80px] max-w-full font-sans text-base leading-relaxed text-gray-800">
        {details}
      </div>

      {/* Illustration */}
      <div className="mb-8" aria-hidden="true">
        <Illustration className="mx-auto w-full max-w-[300px]" />
      </div>

      {/* Features List */}
      <ul className="mb-8 flex w-full flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <CheckIcon className="mr-4 shrink-0 text-purple-600" />
            <span className="font-sans text-base text-gray-800">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto w-full">
        <Button
          as={Link}
          to={buttonHref}
          variant={buttonVariant}
          colorScheme="purple"
          className="w-full text-center"
        >
          {buttonText}
        </Button>
      </div>
    </article>
  );
};

export default ClassFormatCard;
