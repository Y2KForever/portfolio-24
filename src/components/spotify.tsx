import {Spotify} from 'react-spotify-embed';
import { useWindowSize } from '@uidotdev/usehooks';

export const SpotifyPlayer = () => {
  const size = useWindowSize();
  console.log('size', size);
  return <Spotify link='https://open.spotify.com/playlist/3Zdjcymji7aJG8D0OwQuRF' width={size.width !== null ? size.width - 100 : 500} />
}