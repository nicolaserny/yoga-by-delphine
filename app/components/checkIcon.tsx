interface CheckIconProps {
  className?: string;
}

export const CheckIcon = ({ className = "" }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    height="1.4em"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M50 3.75C24.498 3.75 3.75 24.498 3.75 50S24.498 96.25 50 96.25 96.25 75.502 96.25 50 75.502 3.75 50 3.75zm25.636 36.827L46.098 70.115a4.866 4.866 0 01-3.416 1.415v2l-.043-2a4.855 4.855 0 01-3.433-1.476L24.304 54.608a4.835 4.835 0 01.122-6.83 4.803 4.803 0 013.353-1.354c1.323 0 2.558.524 3.477 1.476l11.488 11.907 26.062-26.061a4.8 4.8 0 013.416-1.415c1.29 0 2.503.502 3.415 1.414a4.838 4.838 0 01-.001 6.832z"
    />
  </svg>
);

export default CheckIcon;
