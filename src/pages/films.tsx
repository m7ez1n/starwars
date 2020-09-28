import { useEffect, useState } from 'react';
import { Card, CardItem, CardTitle } from '../components/Card';

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
        <Card>
          <CardTitle>{film.title}</CardTitle>
          <CardItem title="Director">{film.director}</CardItem>
          <CardItem title="Release Date">{film.release_date}</CardItem>
          <CardItem title="Episode">{film.episode_id}</CardItem>
        </Card>
      ))}
    </>
  );
}

// TODO criar o component de header dinamico
