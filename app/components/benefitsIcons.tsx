// Benefits Icons - Paste SVG content from Figma exports
// Figma icon names: iconoir:learning, ArrowsExpandOutline, tabler:yoga

interface IconProps {
  className?: string;
}

export const LearningIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17.045 55v-7.142C16.3 40.415 7.5 36.43 7.5 25c0-11.425 6.818-20.14 20.455-20 9.818.105 19.09 5.715 19.09 17.145l5.455 8.57c0 5.715-5.455 5.715-5.455 5.715s1.365 14.285-10.91 14.285V55"
    />
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M27.5 30a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M27.5 32.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
    />
  </svg>
);

export const ArrowsExpandIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59 60"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.815 20V10m0 0h9.815m-9.815 0 12.268 12.5M49.074 20V10m0 0H39.26m9.815 0L36.806 22.5M9.815 40v10m0 0h9.815m-9.815 0 12.268-12.5M49.074 50 36.806 37.5M49.074 50V40m0 10H39.26"
    />
  </svg>
);

export const YogaIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 50h10l3.75-7.5M42.5 50 40 37.5H27.5L30 20m-2.5-10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
    />
    <path
      stroke="#102A43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m10 25 10-2.5L30 20l10 3.75 10 3.75"
    />
  </svg>
);
