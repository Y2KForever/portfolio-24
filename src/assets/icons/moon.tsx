import { HTMLProps } from 'react';

export const Moon = (props: HTMLProps<HTMLElement>) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.32"
        d="M11.5425 2.45285C11.7267 2.20966 11.7452 1.87914 11.5894 1.61688C11.4335 1.35463 11.1344 1.2129 10.8327 1.25842C5.96272 1.99337 2.25 6.28809 2.25 11.4489C2.25 17.12 6.737 21.75 12.3118 21.75C16.6025 21.75 20.2516 19.0038 21.7018 15.1571C21.81 14.8702 21.7326 14.5463 21.5064 14.3393C21.2802 14.1323 20.9507 14.0838 20.6745 14.2169C19.7065 14.6832 18.6262 14.9439 17.485 14.9439C13.3457 14.9439 9.95787 11.4967 9.95787 7.20398C9.95787 5.41053 10.5502 3.76308 11.5425 2.45285Z"
        fill="currentColor"
      />
      <path
        d="M11.5425 2.45285C11.7267 2.20966 11.7452 1.87914 11.5894 1.61688C11.4335 1.35463 11.1344 1.2129 10.8327 1.25842C5.96272 1.99337 2.25 6.28809 2.25 11.4489C2.25 14.4331 3.49245 17.129 5.48205 19.0138L11.9958 12.5C10.7334 11.1182 9.95787 9.25786 9.95787 7.20398C9.95787 5.41053 10.5502 3.76308 11.5425 2.45285Z"
        fill="currentColor"
      />
    </svg>
  );
};
