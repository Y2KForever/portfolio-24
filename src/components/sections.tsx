import { scrollIntoViewPromise } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface SectionsProps {
  id: string;
  element: React.ReactNode;
  height: number;
}

const Sections = forwardRef(({ element, id, height }: SectionsProps, ref) => {
  const outerRef = useRef<null | HTMLDivElement>(null);
  const compRef = useRef<null | HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: async () => {
      await scrollIntoViewPromise(outerRef.current, { behavior: 'smooth' });
      window.location.hash = outerRef.current?.id || '';
    },
  }));
  const { scrollYProgress } = useScroll({ target: compRef });
  const y = useTransform(scrollYProgress, [0, 1], [height, 350]); // -650 for CV, -300 for rest.
  return (
    <section ref={outerRef} id={id}>
      <motion.div ref={compRef} style={{ y }}>
        {element}
      </motion.div>
    </section>
  );
});

export default Sections;
