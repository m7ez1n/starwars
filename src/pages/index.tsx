import { useEffect, useState } from 'react';
import { Card, CardItem, CardTitle } from '../components/Card';

type FilmProps = {
  title: string;
  director: string;
  release_date: string;
  episode_id: number;
};

export default function Films() {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }

      const filmsResponse = await response.json();
      setFilms(filmsResponse.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <>
      {films.map((film: FilmProps) => (
        <Card key={`key-${film.title}`}>
          <CardTitle>{film.title}</CardTitle>
          <CardItem title="Director">{film.director}</CardItem>
          <CardItem title="Release Date">{film.release_date}</CardItem>
          <CardItem title="Episode">{film.episode_id}</CardItem>
        </Card>
      ))}
    </>
  );
}
