
import { FaJediOrder, FaUserAstronaut, FaSith } from 'react-icons/fa';
import { GiFilmSpool, GiMoon } from 'react-icons/gi';

type IOption = {
  icon: React.ReactNode;
  title: string;
  path?: string;
}[];

export const options: IOption = [
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
  {
    icon: <GiMoon size={25} />,
    title: 'Themify',
  },
];