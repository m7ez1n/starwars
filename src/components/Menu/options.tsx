import { FaJediOrder, FaUserAstronaut, FaSith, FaSun } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';

type Option = {
  icon: React.ReactNode;
  title: string;
  path?: string;
};

export const options: Option[] = [
  {
    icon: <FaJediOrder size={25} />,
    title: 'Jedis',
    path: '/jedis',
  },
  {
    icon: <FaSith size={25} />,
    title: 'Siths',
    path: '/siths',
  },
  {
    icon: <GiFilmSpool size={25} />,
    title: 'Films',
    path: '/films',
  },
  {
    icon: <FaUserAstronaut size={25} />,
    title: 'Characters',
    path: '/Characters',
  },
];