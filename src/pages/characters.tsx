import { useEffect, useState } from 'react';
import { Card, CardProps } from '../components/Card';


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
      {characters.map((people: CardProps) => (
        <Card key={`key-${people.name}`} name={people.name} height={people.height} gender={people.gender} birth_year={people.birth_year} />
      ))}
    </>
  );
}
