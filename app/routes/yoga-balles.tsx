import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import { PageTitle } from "~/components";
import AnchorLink from "~/components/anchorLink";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: V2_MetaFunction = ({ location }) => [
  ...getSeo({ title: "Yoga-balles", url: getUrl(location) }),
];

const StyledLi: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="mb-1 last:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      height="1.4em"
      className="mr-4 inline-block  text-purple-600"
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
  <AnchorLink href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </AnchorLink>
);

const Illustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1063.01 715.08"
    className=" w-full place-self-center"
  >
    <path
      d="M999.72 174.41a105.8 105.8 0 008.38-12.34l-59.12-9.7 63.94.47a107.93 107.93 0 002.06-85.4l-85.78 44.5 79.11-58.15a107.78 107.78 0 10-178 120.62 108.18 108.18 0 00-12.29 19.65l76.74 39.87-81.82-27.46a107.83 107.83 0 0017.36 101.21 107.79 107.79 0 0064.83 172.57 37 37 0 00-2.13 12.52 35.52 35.52 0 004.69 18 36.89 36.89 0 000 36 36.89 36.89 0 000 36 36.89 36.89 0 000 36 35.52 35.52 0 00-4.69 18c0 16.27 10.07 29.45 22.5 29.45s22.5-13.18 22.5-29.45a35.53 35.53 0 00-4.7-18 36.82 36.82 0 000-36 36.82 36.82 0 000-36 36.82 36.82 0 000-36 35.53 35.53 0 004.7-18 37.1 37.1 0 00-2.19-12.69 107.79 107.79 0 0063.91-172.4 107.77 107.77 0 000-133.27zM643.33 289.11a72.48 72.48 0 01-5.6-8.25l39.53-6.49-42.75.31a72.17 72.17 0 01-1.38-57.1l57.37 29.76-52.9-38.89a72.07 72.07 0 11119 80.66 71.75 71.75 0 018.22 13.14l-51.32 26.66 54.74-18.37a72.06 72.06 0 01-11.62 67.68 72.07 72.07 0 01-43.34 115.4 24.83 24.83 0 011.42 8.37 23.7 23.7 0 01-3.14 12 24.63 24.63 0 010 24.07 24.65 24.65 0 010 24.08 24.63 24.63 0 010 24.07 23.71 23.71 0 013.14 12c0 10.87-6.73 19.69-15 19.69s-15-8.82-15-19.69a23.71 23.71 0 013.14-12 24.63 24.63 0 010-24.07 24.65 24.65 0 010-24.08 24.63 24.63 0 010-24.07 23.7 23.7 0 01-3.14-12 24.76 24.76 0 011.47-8.49 72.08 72.08 0 01-42.75-115.28 72.08 72.08 0 010-89.11z"
      fill="#f2f2f2"
    />
    <ellipse cx="562.16" cy="652.08" rx="500.85" ry="63" fill="#f2f2f2" />
    <path
      d="M715.97 510.38c0 2-.06 4-.17 5.92v.86a107.09 107.09 0 01-4.57 24.89c-.07.25-.16.52-.24.77a115.19 115.19 0 01-10.26 23.09l-.43.72a128.5 128.5 0 01-16 21.46l-.62.66a146 146 0 01-22.53 19.68c-.28.21-.57.42-.85.61a166.55 166.55 0 01-27.17 15.44c-1.31.59-2.63 1.17-4 1.74l-1.2.5a188.12 188.12 0 01-45.43 12.33l-1.91.26a201.11 201.11 0 01-26.42 1.73c-65.48 0-121.88-31.42-147.33-76.63q-2.57-4.53-4.69-9.24l-.58-1.29a108.54 108.54 0 01-9.07-38.89v-1c0-1.2-.05-2.41-.05-3.62a106.78 106.78 0 013.64-27.69c.07-.28.14-.55.22-.82a113.32 113.32 0 0111-26.32c.13-.23.26-.47.4-.7a127.48 127.48 0 0116.56-22.3 7.23 7.23 0 01.53-.59l.08-.08c.79-.84 1.59-1.69 2.41-2.52l1.23-1.24c.81-.81 1.64-1.6 2.47-2.4h.05q3-2.82 6.11-5.47c2.88-2.44 5.89-4.79 9-7.05l.67-.5a167 167 0 0126.22-15.31c.27-.13.55-.27.82-.38a182 182 0 0132.19-11.34c.35-.1.69-.18 1-.26a196.7 196.7 0 0141.82-5.55h1.42c1.28 0 2.57-.05 3.86-.05 64.89 0 120.86 30.87 146.64 75.4.23.4.45.8.68 1.19l1 1.75c.55 1 1.07 2 1.59 3.06.24.48.47.95.7 1.43.14.28.29.56.42.85a110.21 110.21 0 018.43 24.62c.08.33.14.65.21 1a107 107 0 012.15 21.28z"
      className="fill-purple-600"
    />
    <path
      d="M701.5 456.3q-11.09-4.2-22-8.74a852.93 852.93 0 01-130.55-67.77h1.42a853.15 853.15 0 00150.5 75.36c.19.39.41.76.63 1.15zM713.81 488.98q-27-9-53.43-20a853 853 0 01-131.83-68.54q-11.84-7.53-22.5-14.85l1-.25q10.41 7.11 22 14.48a852.72 852.72 0 00184.55 88.2c.08.32.14.64.21.96zM715.8 516.3v.86q-37.69-11.49-74.45-26.68a853.06 853.06 0 01-131.85-68.59 812.78 812.78 0 01-36.43-24.57l.82-.39c10.93 7.81 23 16 36.1 24.34A850.25 850.25 0 00715.8 516.3zM711.18 542.04c-.07.27-.16.53-.24.79a822.66 822.66 0 01-88.72-30.9 852.13 852.13 0 01-131.83-68.58 816.318 816.318 0 01-44.24-30.22l.67-.49c13 9.49 27.68 19.66 44.06 30.09a848.43 848.43 0 00220.3 99.31zM700.68 565.91l-.43.72a820.28 820.28 0 01-97.11-33.24 853.56 853.56 0 01-131.84-68.58 805.809 805.809 0 01-47-32.29c.16-.19.34-.39.53-.58 13.66 10.1 29.37 21 47 32.25 52.37 33.35 130.81 74.84 228.85 101.72zM684.26 588.09l-.62.66a818.63 818.63 0 01-99.58-33.9 853.1 853.1 0 01-131.84-68.58 831.55 831.55 0 01-44.91-30.73c.13-.23.26-.46.4-.69a821.031 821.031 0 0045 30.79c52.88 33.67 132.27 75.6 231.55 102.45zM661.11 608.43c-.28.21-.57.42-.85.61a821.81 821.81 0 01-95.28-32.73 852.65 852.65 0 01-131.84-68.58c-13.5-8.6-25.89-17-37.08-25.05.07-.27.14-.54.22-.81a826.952 826.952 0 0037.36 25.24c52.15 33.2 130.09 74.43 227.47 101.32zM629.12 626.22l-1.2.5a821.19 821.19 0 01-82-28.95c-26-10.75-51.61-22.88-76.59-36.25q-28.2-15.12-55.25-32.33-11.31-7.2-21.54-14.2v-1q10.48 7.15 22.09 14.56c16.43 10.47 35.43 21.73 56.79 33.1a844.07 844.07 0 00157.7 64.57zM582.5 639.05l-1.91.26q-27.17-9.09-53.8-20.09a849.69 849.69 0 01-111.29-55.95q-6.68-4-13.3-8.1l-.58-1.29q7.29 4.54 15.18 9.25a851.6 851.6 0 00165.7 75.92z"
      fill="#f2f2f2"
      opacity=".2"
    />
    <path
      d="M633.09 624.48c-1.31.59-2.63 1.17-4 1.74l-1.2.5a188.12 188.12 0 01-45.39 12.33l-1.91.26a201.11 201.11 0 01-26.42 1.73c-65.48 0-121.88-31.42-147.33-76.63 2.86-.44 5.73-.81 8.61-1.14l1.3-.14c7.74-.82 15.54-1.28 23.32-1.61a279.21 279.21 0 0129.22 0c.68 0 1.36.08 2 .14a134 134 0 0119.71 2.88c19.75 4.48 37.85 14.21 55.79 23.6 27.71 14.46 56.04 28.56 86.3 36.34zM700.83 455.11c-25.78-44.53-81.75-75.4-146.64-75.4H548.91a196.06 196.06 0 00-41.82 5.55l-1 .25a183.63 183.63 0 00-32.19 11.34l-.82.39a166.27 166.27 0 00-26.22 15.32l-.67.49a145.36 145.36 0 00-21.27 18.74c-.84 8.53-2.28 16.88-6 24.57-2.62 5.4-5.33 10.6-1.62 16 2.49 3.63 7.88 8.23 12.47 8.41 12.61.51 19.62-16.35 25.56-24.75 9.1-12.86 22.59-21.79 35.77-30.42 5.63-3.69 11.32-7.41 17.67-9.62a60.67 60.67 0 0116.55-2.91c15.33-.86 31 1.47 45 7.82 16 7.25 30.2 19.75 47.66 21.48 7.91.78 16-.75 23.75 1.06 13.77 3.23 23.32 16.22 36.72 20.76 8.67 2.94 18 2 26.82-.88q-1.71-3.6-3.67-7.09c-.32-.31-.54-.68-.77-1.11z"
      opacity=".1"
    />
    <path
      d="M308.64 505.22c-4.74 5-10.06 9.39-14.95 14.24-18.11 18-29.72 41.39-46 61-4.39 5.29-9.16 10.37-12.43 16.41s-4.91 13.39-2.57 19.85c2 5.54 6.61 9.69 11.09 13.52a50.93 50.93 0 009.05 6.63c7.52 4 16.42 4.22 24.94 4.35 4.7.07 10.43-.46 12.44-4.71a82.57 82.57 0 01-20.8-14.16c-3.53-3.3-6.86-7.08-8.29-11.69-2.44-7.86 1.17-16.42 6.28-22.87s11.7-11.62 16.69-18.16 8.21-14.05 14.22-19.39c4.16-3.69 9.33-6 14-9.07 6.82-4.49 12.45-10.53 18-16.51l29.5-31.73a4.21 4.21 0 001.39-2.35c.12-1.19-.76-2.23-1.6-3.09-6.42-6.59-18.52-18.16-27.34-9.48-8.5 8.36-15.39 18.53-23.62 27.21z"
      fill="#a0616a"
    />
    <path
      d="M308.64 505.22c-4.74 5-10.06 9.39-14.95 14.24-18.11 18-29.72 41.39-46 61-4.39 5.29-9.16 10.37-12.43 16.41s-4.91 13.39-2.57 19.85c2 5.54 6.61 9.69 11.09 13.52a50.93 50.93 0 009.05 6.63c7.52 4 16.42 4.22 24.94 4.35 4.7.07 10.43-.46 12.44-4.71a82.57 82.57 0 01-20.8-14.16c-3.53-3.3-6.86-7.08-8.29-11.69-2.44-7.86 1.17-16.42 6.28-22.87s11.7-11.62 16.69-18.16 8.21-14.05 14.22-19.39c4.16-3.69 9.33-6 14-9.07 6.82-4.49 12.45-10.53 18-16.51l29.5-31.73a4.21 4.21 0 001.39-2.35c.12-1.19-.76-2.23-1.6-3.09-6.42-6.59-18.52-18.16-27.34-9.48-8.5 8.36-15.39 18.53-23.62 27.21z"
      opacity=".1"
    />
    <path
      d="M350.8 447.54c5.95-1.26 12.36 1.91 18.11-.06 3.26-1.12 5.75-3.72 8.1-6.24l9.6-10.23c2.71-2.89 5.47-5.84 7.14-9.44 1.48-3.18 2-6.69 2.72-10.13 1.76-8.8 4.77-17.82 11.38-23.88 8.24-7.58 20.94-9 31.52-5.38s19.19 11.7 25.52 20.94c-5.66 6.8-12 13.08-17.65 19.88a32.79 32.79 0 01-6.31 6.31 35.24 35.24 0 01-8.43 3.73c-10.17 3.6-21 8.81-25.19 18.76-1.46 3.46-2 7.23-2.8 10.9-1.54 6.94-4.35 13.81-9.43 18.78s-12.75 7.69-19.52 5.54c-7.49-2.38-12.08-9.72-15.94-16.56a79.88 79.88 0 01-8.82-22.92z"
      fill="#a0616a"
    />
    <path
      d="M350.8 447.54c5.95-1.26 12.36 1.91 18.11-.06 3.26-1.12 5.75-3.72 8.1-6.24l9.6-10.23c2.71-2.89 5.47-5.84 7.14-9.44 1.48-3.18 2-6.69 2.72-10.13 1.76-8.8 4.77-17.82 11.38-23.88 8.24-7.58 20.94-9 31.52-5.38s19.19 11.7 25.52 20.94c-5.66 6.8-12 13.08-17.65 19.88a32.79 32.79 0 01-6.31 6.31 35.24 35.24 0 01-8.43 3.73c-10.17 3.6-21 8.81-25.19 18.76-1.46 3.46-2 7.23-2.8 10.9-1.54 6.94-4.35 13.81-9.43 18.78s-12.75 7.69-19.52 5.54c-7.49-2.38-12.08-9.72-15.94-16.56a79.88 79.88 0 01-8.82-22.92z"
      opacity=".1"
    />
    <path
      d="M611.31 407.82c37.58 13.45 74.94 29.38 106 54.5 14.22 11.51 26.89 24.79 40.41 37.12 7.08 6.46 14.39 12.65 21.7 18.85l51.89 44c6.42 5.45 12.87 10.91 20 15.47 16.77 10.78 36.77 16.26 53.19 27.85a53.2 53.2 0 002.9 17.59 10.12 10.12 0 0010.26 6.69c25.86-1.49 52.08 11.06 78.13 7.9a4.9 4.9 0 003.67-2.35c1.75-3.06-1.24-5.92-3.86-7.75l-35.37-24.76c-5.83-4.08-11.66-8.16-17.6-12.07-21.48-14.12-44.42-26.11-64.33-42.32-4.25-3.46-8.34-7.1-12.44-10.75-21.68-19.26-43.37-38.54-63.92-59-29.87-29.75-58.12-62.94-87.73-92.95a82.08 82.08 0 00-9.08-8.31 83.7 83.7 0 00-9.91-6.07l-37.59-20.65c-5.69-3.13-12-6.36-18.35-5.13a9.84 9.84 0 00-9 2.3c-2.42 2.23-4 5.18-5.6 8.07a49.17 49.17 0 00-4.9 11.15c-1.34 5.31-.9 11-2.45 16.22-1 3.45-2.86 6.6-4.12 10a34.36 34.36 0 00-1.9 14.4z"
      fill="#a0616a"
    />
    <path
      d="M611.31 407.82c37.58 13.45 74.94 29.38 106 54.5 14.22 11.51 26.89 24.79 40.41 37.12 7.08 6.46 14.39 12.65 21.7 18.85l51.89 44c6.42 5.45 12.87 10.91 20 15.47 16.77 10.78 36.77 16.26 53.19 27.85a53.2 53.2 0 002.9 17.59 10.12 10.12 0 0010.26 6.69c25.86-1.49 52.08 11.06 78.13 7.9a4.9 4.9 0 003.67-2.35c1.75-3.06-1.24-5.92-3.86-7.75l-35.37-24.76c-5.83-4.08-11.66-8.16-17.6-12.07-21.48-14.12-44.42-26.11-64.33-42.32-4.25-3.46-8.34-7.1-12.44-10.75-21.68-19.26-43.37-38.54-63.92-59-29.87-29.75-58.12-62.94-87.73-92.95a82.08 82.08 0 00-9.08-8.31 83.7 83.7 0 00-9.91-6.07l-37.59-20.65c-5.69-3.13-12-6.36-18.35-5.13a9.84 9.84 0 00-9 2.3c-2.42 2.23-4 5.18-5.6 8.07a49.17 49.17 0 00-4.9 11.15c-1.34 5.31-.9 11-2.45 16.22-1 3.45-2.86 6.6-4.12 10a34.36 34.36 0 00-1.9 14.4z"
      opacity=".1"
    />
    <circle cx="356.33" cy="483" r="42.31" fill="#a0616a" />
    <path
      d="M613.81 330.22c5.91.1 12.62.56 16.34 5.15s2.88 10.88 1.94 16.54c-2.94 17.89-6 36.1-14.18 52.28a7.46 7.46 0 01-2.91 3.55c-2.35 1.21-5.14-.21-7.39-1.6-16.39-10.18-32.78-21.14-51.46-26a4.66 4.66 0 01-2.91-1.55 4.49 4.49 0 01-.17-3.46c1.86-8.29 4.21-16.48 5.67-24.86.88-5-.75-17 3.68-20.1 4.69-3.3 18.2-.51 23.75-.42zM633.71 412.8c37.58 13.45 74.94 29.38 105.95 54.49 14.22 11.52 26.89 24.8 40.41 37.13 7.08 6.46 14.39 12.65 21.7 18.84l51.89 44c6.42 5.44 12.87 10.91 20 15.46 16.84 10.82 36.84 16.28 53.2 27.82a53.21 53.21 0 002.9 17.6 10.13 10.13 0 0010.26 6.69c25.86-1.5 52.08 11.06 78.13 7.9a4.91 4.91 0 003.67-2.36c1.75-3-1.24-5.92-3.86-7.75l-35.37-24.75c-5.83-4.08-11.66-8.16-17.6-12.07-21.44-14.12-44.38-26.11-64.29-42.31-4.25-3.46-8.34-7.11-12.44-10.75-21.68-19.26-43.37-38.54-63.93-59-29.86-29.75-58.11-62.94-87.72-93a83.16 83.16 0 00-9.11-8.2 85 85 0 00-9.91-6.06L680 355.83c-5.69-3.13-12-6.36-18.35-5.13a9.81 9.81 0 00-9 2.29c-2.42 2.23-4 5.19-5.6 8.08a49.29 49.29 0 00-4.9 11.14c-1.34 5.31-.9 11-2.45 16.23-1 3.45-2.86 6.6-4.12 10a34.34 34.34 0 00-1.87 14.36z"
      fill="#a0616a"
    />
    <path
      d="M646.18 415.9l1.19-17.31c.34-4.84.68-9.74 2.17-14.35 1.69-5.23 4.77-9.88 7.9-14.4a34.68 34.68 0 016-7.13c3.41-2.87 7.82-4.43 11-7.54.91-.89 1.76-2.2 1.22-3.35a3.36 3.36 0 00-1-1.08c-7.84-6.43-17.24-10.61-26.52-14.72l-17.54-7.76c-7.38 10-14.89 20.31-18.69 32.17a47.53 47.53 0 01-2.15 6.18c-2.25 4.69-6.52 8.11-9.23 12.55-2.55 4.18-3.61 9.07-4.62 13.86-.6 2.81-1.18 5.81-.17 8.5 1.12 3 4 4.94 6.62 6.69 11.61 7.61 23.87 15.46 37.72 16.54 2.54.19 5.92 1.46 6.73-1 .57-1.65-.76-5.83-.63-7.85zM299.59 464.54c-4.38 5.87-1.44 14.42 3.1 20.17s10.61 10.57 13.15 17.44c6.09 16.43-10.9 33-10.32 50.48.52 15.58 14.29 26.87 26 37.22 24.88 22 46.14 52.66 43.34 85.78a49.9 49.9 0 0027.6-20.37 53.71 53.71 0 014.66 26.63c26.08-17.85 40.93-50.85 37-82.2-1.87-14.84-7.59-29.31-6.7-44.23.48-8.09 2.89-15.92 4.63-23.84a145 145 0 003.3-31.08c0-11.92-2.21-25.16-11.61-32.49-8-6.23-19-6.44-29.14-6.39-10.71.07-21.42.12-32.11.79-10.91.68-22.16 4.28-32.9 4.55-11.96.3-28.81-17.46-40-2.46z"
      fill="#3f3d56"
    />
    <path
      d="M459.5 386.27a44.18 44.18 0 00-18.51 11.87c-3.19 3.46-5.83 7.41-9.14 10.76-3.94 4-8.75 7-13.36 10.2-8.81 6.1-17.06 12.95-25.3 19.79l-40.6 33.7c-6.35 5.27-12.7 10.55-18.69 16.23-7.39 7-14.21 14.64-22.1 21.09-4.62 3.78-9.59 7.15-13.83 11.36-4 4-7.24 8.61-10.52 13.18a634.75 634.75 0 01-43 53.36c-6.49 7.23-13.2 14.35-21.09 20-16.36 11.79-28.78 29.44-43.16 43.59-1.22 1.2-2.56 2.91-1.81 4.46a3.36 3.36 0 002 1.51c10.52 3.92 19.58-13.15 30.54-10.73 5 1.1 8.07 5.83 11.65 9.44s9.72 6.27 13.46 2.82a59.44 59.44 0 013.79-29.64c6.13-15.21 18.29-27.2 31.27-37.24s27.11-18.6 39.3-29.59c20.45-18.43 35.39-43.57 59.65-56.58 9.5-5.1 20-8.08 29.47-13.3 18.33-10.14 31.15-28 41.17-46.37a24.77 24.77 0 014.72-6.81 26.71 26.71 0 016.9-3.93 106.13 106.13 0 0034-24.91c-3-2.15-5.81-4.45-8.8-6.61a35.63 35.63 0 01-6.63-5.67c-2-2.36-3.3-5.19-5-7.77s-3.48-3.28-6.38-4.21z"
      fill="#a0616a"
    />
    <path
      d="M568.75 389.36c-2.64-2.12-2.73-6-2.6-9.43q.65-15.78 1.28-31.55c.29-7.41 1-15.71 6.59-20.57q-24.25-4.87-48.9-7.47c-6.52-.69-13.13-1.26-19.63-.31-7.83 1.14-15.17 4.42-22.39 7.67-8 3.6-16.05 7.23-23.22 12.28a93.32 93.32 0 01-8.62 5.92c-5.44 3-11.69 4-17.55 6a57.17 57.17 0 00-37.1 67.77c2-5.17 3.4-10.58 5.74-15.61s5.79-9.78 10.7-12.35c5.12-2.66 11.3-2.64 16.87-1.11s10.58 4.48 15.58 7.46c11.14 6.75 22.52 14.63 27.81 26.52 11-8.18 22.25-16 33.27-24.22 4.78-3.55 9.63-7.13 15.17-9.28 7.28-2.83 15.27-3 23.08-3.15s16.28-.59 23.92 1.43z"
      className="fill-red-400"
    />
    <path
      className="fill-red-400"
      d="M396.57 418.71l-1.33 18.45 4.8-3.96-2.4-16.32-1.07 1.83z"
    />
    <path
      d="M216.33 181.78l-15.52 9.84 9.42-17.08a15.34 15.34 0 00-9.39-3.35h-.25a18.16 18.16 0 01-3.22-.24l-5.26 3.34 2.26-4.1a18.7 18.7 0 01-9.2-7l-9.42 6 5.95-10.81c-5.51-6.61-12.93-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.89a18.05 18.05 0 01-16 8.61h-.53c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.73 14.73 0 006.82-1.71 28.22 28.22 0 0123.68-.46 24.66 24.66 0 0020.14 0 28.25 28.25 0 0123.48.46 14.65 14.65 0 006.74 1.67c10.81 0 19.57-12.26 19.57-27.37a34.71 34.71 0 00-4.04-16.77z"
      fill="#f2f2f2"
    />
    <path
      d="M187.08 221.83a28.89 28.89 0 00-16.77 1.82 24.71 24.71 0 01-20.14-.05 28.22 28.22 0 00-23.68.47 14.75 14.75 0 01-6.82 1.7c-9.6 0-17.59-9.67-19.25-22.43a18.41 18.41 0 004.8-5.17c5.62-9.07 14.35-14.9 24.14-14.9s18.4 5.75 24 14.73a18.51 18.51 0 0016 8.76h.25c7.63 0 14.25 6.13 17.47 15.07z"
      opacity=".03"
    />
    <path
      d="M493.3 239.67l-7.74 4.87 4.7-8.54a7.61 7.61 0 00-4.68-1.67h-.08a9.42 9.42 0 01-1.6-.12l-2.63 1.66 1.13-2a9.31 9.31 0 01-4.59-3.49l-4.7 3 3-5.39a13.74 13.74 0 00-10.61-5.34c-4.88 0-9.23 2.9-12 7.43a9 9 0 01-8 4.29h-.26c-5.39 0-9.76 6.11-9.76 13.65s4.37 13.65 9.76 13.65a7.35 7.35 0 003.4-.85 14 14 0 0111.81-.23 12.41 12.41 0 005 1.08 12.28 12.28 0 005-1.06 14.08 14.08 0 0111.71.23 7.33 7.33 0 003.37.83c5.39 0 9.76-6.11 9.76-13.65a17.31 17.31 0 00-1.99-8.35z"
      fill="#f2f2f2"
    />
    <path
      d="M478.71 259.65a14.4 14.4 0 00-8.36.91 12.53 12.53 0 01-5 1.06 12.29 12.29 0 01-5.05-1.08 14.08 14.08 0 00-11.81.24 7.32 7.32 0 01-3.4.85c-4.79 0-8.77-4.83-9.6-11.19a9.21 9.21 0 002.39-2.58c2.81-4.53 7.16-7.43 12-7.43s9.18 2.87 12 7.34a9.26 9.26 0 008 4.38h.12c3.8-.02 7.11 3.04 8.71 7.5z"
      opacity=".03"
    />
    <path
      d="M530.5 85.88l12.43 7.89-7.55-13.73a12.32 12.32 0 017.52-2.68h.2a15.67 15.67 0 002.58-.19l4.22 2.67-1.84-3.3a15 15 0 007.37-5.59l7.55 4.78-4.77-8.66c4.41-5.3 10.36-8.54 16.9-8.54 7.85 0 14.83 4.66 19.34 11.93a14.45 14.45 0 0012.79 6.89h.42c8.66 0 15.68 9.81 15.68 21.93s-7 21.92-15.68 21.92a11.8 11.8 0 01-5.46-1.36 22.59 22.59 0 00-19-.37 20 20 0 01-8.11 1.73 19.73 19.73 0 01-8-1.7 22.65 22.65 0 00-18.81.37 11.85 11.85 0 01-5.41 1.33c-8.66 0-15.68-9.81-15.68-21.92a27.89 27.89 0 013.31-13.4z"
      fill="#f2f2f2"
    />
    <path
      d="M553.9 117.97a23.14 23.14 0 0113.44 1.46 19.77 19.77 0 0016.13 0 22.67 22.67 0 0119 .37 11.69 11.69 0 005.46 1.37c7.69 0 14.09-7.75 15.43-18a14.69 14.69 0 01-3.85-4.15c-4.51-7.26-11.5-11.93-19.34-11.93s-14.75 4.61-19.26 11.8a14.83 14.83 0 01-12.78 7h-.2c-6.14.01-11.43 4.92-14.03 12.08z"
      opacity=".03"
    />
    <path
      d="M324.24 309.95c-.52-.79-3.07 0-5.69 1.71-.46.31-.9.63-1.3.95a18.84 18.84 0 00-5.82-1.9l.11-.08a44.21 44.21 0 007.31-6h-5.63l8.17-3.14c1-1.59 1.32-2.92.77-3.75-1.48-2.22-8.62-.08-16 4.8a39.56 39.56 0 00-8.87 7.73c-6 .7-10.21 2.46-10.21 4.51 0 1.42 2 2.7 5.25 3.59l-.19.12c-7.34 4.87-12.1 10.63-10.62 12.85 1.3 2 7 .52 13.38-3.19l-4.23-2 6.67.46.14-.09c.71-.47 1.39-.95 2.05-1.43l-5-2.32 7.33.5a35.12 35.12 0 003.88-3.75c6.83-.36 12.17-2 13.1-4.12a18.17 18.17 0 001.66-.86 15.6 15.6 0 002.6-2.12h-2l2.91-1.12c.32-.58.43-1.05.23-1.35z"
      fill="#f2f2f2"
    />
    <path
      d="M129.98 613.71a49 49 0 01-1 10.19c-.14.63-.28 1.25-.42 1.85-3.73 14.95-14.25 25.89-26.8 26.59h-1.28c-13.27 0-24.49-11.45-28.2-27.22-.1-.42-.19-.84-.29-1.26a49 49 0 01-1.05-10.19c0-21.36 13.23-38.67 29.54-38.67s29.5 17.35 29.5 38.71z"
      fill="#3f3d56"
    />
    <path
      d="M129.98 613.71a49 49 0 01-1 10.19c-.14.63-.28 1.25-.42 1.85-.45 0-.88 0-1.33-.05a60.08 60.08 0 01-9.66-1.33 59.23 59.23 0 01-8.62 2 60 60 0 01-6.75.63h-2.28a60.07 60.07 0 01-8.09-.54 58.93 58.93 0 01-12.69-3.15 60.75 60.75 0 01-6.86 1.84c-.1-.42-.19-.84-.29-1.26a49 49 0 01-1.05-10.19c0-21.36 13.23-38.67 29.54-38.67s29.5 17.32 29.5 38.68z"
      opacity=".1"
    />
    <path
      d="M193 541.67a59.79 59.79 0 00-6.43-27l-34.75 10.81 30.5-17.94a60 60 0 00-45.11-25.72 60.28 60.28 0 00-4.71-6.28l-49.94 15.53 40.94-24.02a60 60 0 00-94.49 32l42.75 49.2-46.42-33.52a60.05 60.05 0 0053.74 106 60.26 60.26 0 0038.42 1.02 60.1 60.1 0 0073-58.63c0-1.34-.05-2.66-.14-4a59.93 59.93 0 002.64-17.45z"
      fill="#57b894"
    />
    <path
      d="M191.96 552.81a160.2 160.2 0 00-55.59-.71c-20.86 3.46-42.18 11.05-62.58 5.5-12-3.26-22.34-10.79-34-15a64.48 64.48 0 00-35.14-2.06 60.07 60.07 0 0074.43 80.17 60.26 60.26 0 0038.42 1.04 60.1 60.1 0 0073-58.63c0-1.34-.05-2.66-.14-4a57.32 57.32 0 001.6-6.31z"
      opacity=".1"
    />
  </svg>
);

function YogaBallsRoute() {
  return (
    <main className="width-constraints">
      <PageTitle>Yoga-balles</PageTitle>
      <div className="mb-14 text-base font-normal leading-relaxed text-gray-800 lg:text-lg">
        <section className="mt-4 gap-x-4 md:mt-8 lg:mt-12 xl:grid xl:grid-cols-2 xl:gap-x-12">
          <div className="md:mr-4">
            <h2 className="mb-3 text-lg font-semibold leading-normal md:mb-4 lg:mb-5 lg:text-xl">
              Qu'est ce que le Yoga-balles ?
            </h2>
            <p className="mb-2 md:mb-3 lg:mb-4">
              Le{" "}
              <StyledLink href="https://www.tuneupfitness.com/therollmodel/about">
                yoga-balles
              </StyledLink>{" "}
              (the Roll Model Method créé par Jill Miller) est une méthode
              simple et efficace qui vous permet de prendre votre santé en
              charge en apprenant à utiliser des balles en caoutchouc flexibles
              et adhérentes pour masser, pétrir et étirer vos muscles et tissus
              conjonctifs.
            </p>
            <p className="mb-2 md:mb-3 lg:mb-4">
              Les techniques d'automassage enseignées permettent de réduire ou
              d'éliminer les douleurs, d'améliorer votre posture, de réduire le
              niveau de stress, d'augmenter la mobilité et la flexibilité de vos
              articulations, de relâcher la tension dans vos muscles et
              d'améliorer vos performances sportives.
            </p>
            <p className="mb-2 md:mb-3 lg:mb-4">
              Ce type de yoga convient à tous, même aux femmes enceintes et aux
              personnes à mobilité réduite.
            </p>
          </div>
          <Illustration />
        </section>
        <section className="mt-3 md:mt-5 lg:mt-6">
          <h2 className="mb-3 text-lg font-semibold leading-normal md:mb-4 lg:mb-5 lg:text-xl">
            Le cours
          </h2>
          <div className="mt-2 gap-x-4 md:mt-3 md:grid md:grid-cols-2 lg:mt-4 xl:gap-x-12">
            <p className="mb-2 md:mb-3 md:mr-4 lg:mb-4">
              Le cours dure généralement une heure, et nécessite un peu de
              matériel, l’accès à un mur ou surface équivalente (porte fermée,
              sans risque qu’elle ne s’ouvre ...), un tapis de yoga ou une
              grande serviette pour s’isoler du sol.
            </p>
            <p className="mb-2 md:mb-3 lg:mb-4">
              Il est préférable de porter une tenue confortable proche du corps
              pour permettre l’adhérence des balles à la peau sous le vêtement
              et pas seulement au tissu du vêtement, idéalement on essaiera de
              privilégier l’accès à la peau directement.
            </p>
          </div>
        </section>
        <section className="mt-3 md:mt-5 lg:mt-6">
          <h2 className="mb-3 text-lg font-semibold leading-normal md:mb-4 lg:mb-5 lg:text-xl">
            Matériel nécessaire
          </h2>
          <div className="mt-2 gap-x-4 md:mt-3 md:grid md:grid-cols-2 lg:mt-4 xl:gap-x-12">
            <div className="md:mr-4">
              <ol className="leading-loose">
                <StyledLi>un bloc ou un livre épais</StyledLi>
                <StyledLi>
                  une couverture ou une grande serviette de plage
                </StyledLi>
                <StyledLi>
                  une paire de balles Yoga Tune Up régulières (ou des balles de
                  tennis, bas ou chaussettes en attendant d'avoir les balles)
                </StyledLi>
              </ol>
            </div>
            <div>
              <ol className="leading-loose">
                <StyledLi>une sangle (ou une ceinture/écharpe)</StyledLi>
                <StyledLi>une balle Alpha</StyledLi>
                <StyledLi>
                  un ballon Coregeous (ou une serviette roulée en attendant
                  d’avoir le ballon)
                </StyledLi>
              </ol>
            </div>
          </div>
        </section>
        <section className="mt-3 md:mt-5 lg:mt-6">
          <h2 className="mb-3 text-lg font-semibold leading-normal md:mb-4 lg:mb-5 lg:text-xl">
            Où acheter le matériel ?
          </h2>
          <p className="mb-2 md:mb-3 lg:mb-4">
            Le matériel n’est malheureusement pas disponible dans les boutiques
            physiques en France pour le moment.
          </p>
          <p>
            On peut les commander{" "}
            <StyledLink href="https://nouveauyoga.com/products/troussededepartyogaballes">
              sur Nouveau Yoga
            </StyledLink>
            {", "}
            <StyledLink href="https://www.tuneupfitness.com/shop/self-massage-therapy-balls">
              sur tune up fitness
            </StyledLink>
            {", "}
            ou sur Amazon :
          </p>
          <div className="mt-2 gap-x-4 md:mt-3 md:grid md:grid-cols-2 lg:mt-4 xl:gap-x-12">
            <div className="md:mr-4">
              <ol className="leading-loose">
                <StyledLi>
                  <StyledLink href="https://www.amazon.fr/Yoga-Tune-Up-Therapy-Balls/dp/B00U3712CK/ref=sr_1_6?__mk_fr_FR=ÅMÅŽÕÑ&crid=1MJISTPDL65GV&dchild=1&keywords=tune+up+fitness&qid=1614335806&sprefix=Tune+up%2Caps%2C160&sr=8-6">
                    Balles régulières
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="https://www.amazon.fr/Yoga-Tune-Up-Ballon-dexercice/dp/B00CWAQGLS/ref=sr_1_7?__mk_fr_FR=ÅMÅŽÕÑ&crid=1MJISTPDL65GV&dchild=1&keywords=tune+up+fitness&qid=1614335806&sprefix=Tune+up%2Caps%2C160&sr=8-7">
                    Balle alpha
                  </StyledLink>
                </StyledLi>
              </ol>
            </div>
            <div>
              <ol className="leading-loose">
                <StyledLi>
                  <StyledLink href="https://www.amazon.fr/Tune-Up-Fitness-Coregeous-Ball/dp/B00NQIUI96/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&crid=1MJISTPDL65GV&dchild=1&keywords=tune+up+fitness&qid=1614335806&sprefix=Tune+up%2Caps%2C160&sr=8-2">
                    Ballon Coregeous
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="https://www.amazon.fr/Roll-model-kit-de-démarrage/dp/B00PA12WKU/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&dchild=1&keywords=Balle+kit+tune+up&qid=1614336055&sr=8-2">
                    Kit de balles
                  </StyledLink>
                </StyledLi>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default YogaBallsRoute;
