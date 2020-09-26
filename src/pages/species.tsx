import { useEffect, useState } from 'react';

import { Card } from '../components/Card';

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
      const response = await fetch('https://swapi.dev/api/species/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }

      const species = await response.json();
      setSpecies(species.results);
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
        <Card
          key={`key-${film.name}`}
          name={film.name}
          height={film.language}
          gender={film.classification}
          birth_year={film.average_lifespan}
        />
      ))}
    </>
  );
}
