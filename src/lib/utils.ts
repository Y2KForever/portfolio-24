import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoViewPromise = async (node: HTMLDivElement | null, options?: ScrollIntoViewOptions) => {
  if (node) {
    node.scrollIntoView(options);

    return new Promise((resolve) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            resolve(true);
            intersectionObserver.unobserve(node);
          }, 500);
        }
      });
      intersectionObserver.observe(node);
    });
  }
};
