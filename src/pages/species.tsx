import { useEffect, useState } from 'react';
import { fetchPageRange } from '../common/FetchPageRange';
import { Card, CardItem, CardTitle } from '../components/Card';

type SpeciesProps = {
  name: string;
  language: string;
  classification: string;
  average_lifespan: string;
}

export default function Species() {
  const [species, setSpecies] = useState([]);

  const fetchspecies = async () => {
    try {
      const response = await fetchPageRange(1, 4,'https://swapi.dev/api/species/');

      setSpecies(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchspecies();
  }, []);

  return (
    <>
      {species.map((film: SpeciesProps) => (
        <Card>
          <CardTitle>{film.name}</CardTitle>
          <CardItem title="Language">{film.language}</CardItem>
          <CardItem title="Classification">{film.classification}</CardItem>
          <CardItem title="Average Lifespan">{film.average_lifespan}</CardItem>
        </Card>
      ))}
    </>
  );
}
