import { Chat } from '@/assets/icons/chat';
import { Header } from './cvCompontents/header';
import { Name } from './cvCompontents/name';
import { Photo } from './cvCompontents/photo';
import { Button } from './ui/button';

export const CV = () => {
  return (
    <div className="flex flex-col max-h-60">
      <Header />
      <div className="flex flex-row items-center">
        <Photo />
        <Name />
        <Button variant="default" className="ml-auto mt-5">
          <Chat className='mr-3' />
          Message
        </Button>
      </div>
    </div>
  );
};
