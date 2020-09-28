import { useEffect, useState } from 'react';
import { Card, CardTitle, CardItem } from '../components/Card';

type CharacterProps = {
  name: string;
  height: string;
  gender: string;
  birth_year: string;
}

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }

      const peoples = await response.json();
      setCharacters(peoples.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {characters.map((people: CharacterProps) => (
        <Card key={`key-${people.name}`}>
          <CardTitle>{people.name}</CardTitle>
          <CardItem title="Height">{people.height}</CardItem>
          <CardItem title="Gender">{people.gender}</CardItem>
          <CardItem title="Birth year">{people.birth_year}</CardItem>
        </Card>
      ))}
    </>
  );
}
