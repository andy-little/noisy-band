import {
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaItunes,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa';
import { contactUrl } from './nav';

export type SocialData = {
  icon: JSX.Element;
  url: string;
  description: string;
  id: number;
};

export const socialIcons: SocialData[] = [
  {
    icon: <FaSpotify />,
    url: 'https://open.spotify.com/artist/4hZ0YIg9waQoLrqq1DCUH9?si=cr6XhyfYSjqlcsA5YHD5nA',
    description: 'Spotify',
    id: 1,
  },
  {
    icon: <FaItunes />,
    url: 'https://music.apple.com/gb/artist/mr-littles-noisy-band/723941055',
    description: 'iTunes',
    id: 2,
  },
  {
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/c/mrlittleofficial',
    description: 'YouTube',
    id: 3,
  },
  {
    icon: <FaFacebook />,
    url: 'https://www.facebook.com/MrLittlesNoisyBand',
    description: 'Facebook',
    id: 4,
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/mrlittlesnoisyband/',
    description: 'Instagram',
    id: 5,
  },
];

export const socialAndContactIcons: SocialData[] = [
  {
    icon: <FaEnvelope />,
    url: contactUrl,
    description: 'email',
    id: 0,
  },
  ...socialIcons,
];

/* I think 'ReactNode' should suffice.
there's a stackoverflow discussion about typing react element: https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement */
