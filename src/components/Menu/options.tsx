import { FaUserAstronaut } from 'react-icons/fa';
import { GiFilmSpool, GiStarfighter, GiAnimalSkull, GiTechnoHeart } from 'react-icons/gi';

type Option = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

export const options: Option[] = [
  {
    icon: <GiFilmSpool size={25} />,
    title: 'Films',
    path: '/films',
  },
  {
    icon: <FaUserAstronaut size={25} />,
    title: 'Characters',
    path: '/characters',
  },
  {
    icon: <GiStarfighter size={25} />,
    title: 'Vehicles',
    path: '/vehicles',
  },
  {
    icon: <GiAnimalSkull size={25} />,
    title: 'Species',
    path: '/species',
  },
  {
    icon: <GiTechnoHeart size={25} />,
    title: 'He4rt Devs',
    path: 'https://heartdevs.com/',
  },
];