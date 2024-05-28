import { RefObject, useRef } from 'react';
import { MainContent } from './components/mainContent';
import { Menu } from './components/menu';
import { Test } from './components/text';

export interface Refs {
  [key: string | number]: RefObject<HTMLDivElement>;
}

interface SectionsData {
  id: string;
  element: React.ReactNode;
}

const SectionsData: SectionsData[] = [
  {
    id: 'cv',
    element: <Test />,
  },
  {
    id: 'asd',
    element: <Test />,
  },
  {
    id: '423',
    element: <Test />,
  },
  {
    id: 'fgdf',
    element: <Test />,
  },
];

function App() {
  const refs: Refs = {
    cv: useRef<null | HTMLDivElement>(null),
    2: useRef<null | HTMLDivElement>(null),
  };

  return (
    <>
      <Menu refs={refs} />
      <MainContent refs={refs} sectionsData={SectionsData} />
    </>
  );
}

export default App;
