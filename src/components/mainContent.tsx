import Sections from './sections';
import { Refs } from '@/App';

interface SectionsData {
  id: string | number;
  element: React.ReactNode;
  height: number;
}

interface MainContentProps {
  refs: Refs;
  sectionsData: SectionsData[];
}

export const MainContent = ({ refs, sectionsData }: MainContentProps) => {
  return (
    <>
      <div id="mainContent">
        {sectionsData.map((section) => (
          <Sections height={section.height} ref={refs[section.id]} id={section.id.toString()} key={section.id} element={section.element} />
        ))}
      </div>
    </>
  );
};
