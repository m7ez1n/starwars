import { useEffect, useState } from 'react';

import { Card } from '../components/Card';

type VehiclesProps = {
  name: string;
  model: string;
  cargo_capacity: string;
  vehicle_class: string;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  const fetchvehicles = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/vehicles/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }

      const vehicles = await response.json();
      setVehicles(vehicles.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchvehicles();
  }, []);

  return (
    <>
      {vehicles.map((film: VehiclesProps) => (
        <Card
          key={`key-${film.name}`}
          name={film.name}
          height={film.model}
          gender={film.vehicle_class}
          birth_year={film.cargo_capacity}
        />
      ))}
    </>
  );
}
