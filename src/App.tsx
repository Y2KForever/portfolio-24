import { RefObject, useRef } from 'react';
import { MainContent } from './components/mainContent';
import { Menu } from './components/menu';
import { Test } from './components/text';
import { Instagram } from './components/instagram';
import { SpotifyPlayer } from './components/spotify';
import { CV } from './components/cv';

export interface Refs {
  [key: string | number]: RefObject<HTMLDivElement>;
}

interface SectionsData {
  id: string;
  element: React.ReactNode;
  height: number;
}

const SectionsData: SectionsData[] = [
  {
    id: 'cv',
    element: <CV />,
    height: -650
  },
  {
    id: 'portfolio',
    element: <Test />,
    height: -300,
  },
  {
    id: 'instagram',
    element: <Instagram />,
    height: -300,
  },
  {
    id: 'spotify',
    element: <SpotifyPlayer />,
    height: -300
  },
];

function App() {
  const refs: Refs = {
    cv: useRef<null | HTMLDivElement>(null),
    portfolio: useRef<null | HTMLDivElement>(null),
    instagram: useRef<null | HTMLDivElement>(null),
    spotify: useRef<null | HTMLDivElement>(null),
  };

  return (
    <>
      <Menu refs={refs} />
      <MainContent refs={refs} sectionsData={SectionsData} />
    </>
  );
}

export default App;
