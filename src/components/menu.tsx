import { Button } from './ui/button';
import { Moon } from '@/assets/icons/moon';
import { Sun } from '@/assets/icons/sun';
import { useTheme } from './themeprovider';
import { RefObject } from 'react';
import { User } from '@/assets/icons/user';
import { Folder } from '@/assets/icons/folder';
import { Instagram } from '@/assets/icons/instagram';
import { Spotify } from '@/assets/icons/spotify';

interface MenuProps {
  refs: Refs;
}

interface Refs {
  [key: string | number]: RefObject<HTMLDivElement>;
}

export const Menu = ({ refs }: MenuProps) => {
  const { setTheme, theme } = useTheme();
  const links = [
    {
      onClick: () => {
        refs.cv.current?.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <User />,
      id: 'home',
    },
    {
      onClick: () => {
        refs.portfolio.current?.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <Folder />,
      id: 'portfolio',
    },
    {
      onClick: () => {
        refs.instagram.current?.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <Instagram />,
      id: 'instagram',
    },
    {
      onClick: () => {
        refs.spotify.current?.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <Spotify />,
      id: 'spotify',
    },
    {
      onClick: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      icon: (
        <>
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </>
      ),
      id: 'theme',
    },
  ];
  return (
    <div
      className="rounded-lg bg-card text-card-foreground flex flex-auto justify-around align-center items-center fixed z-10 mt-3 transition-colors bg-secondary h-12 p-5"
      style={{
        left: '50%',
        transform: 'translate(-50%, 0)',
      }}
    >
      {links.map((link) => (
        <Button
          onClick={link.onClick}
          variant="ghost"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer"
          key={link.id}
        >
          {link.icon}
        </Button>
      ))}
    </div>
  );
};
