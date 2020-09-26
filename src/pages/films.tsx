import { useEffect, useState } from 'react';
import { Card, CardProps } from '../components/Card';

type FilmProps = {
  title: string;
  director: string;
  release_date: string;
  episode_id: number;
}

export default function Films() {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }

      const films = await response.json();
      setFilms(films.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <>
      {films.map((film: FilmProps) => (
        <Card
          key={`key-${film.episode_id}`}
          name={film.title}
          height={film.director}
          gender={film.release_date}
          birth_year={film.episode_id.toString()}
        />
      ))}
    </>
  );
}

// TODO criar o component de header dinamico
