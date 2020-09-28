import { useEffect, useState } from 'react';

import { Card, CardItem, CardTitle } from '../components/Card';

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
        <Card>
          <CardTitle>{film.name}</CardTitle>
          <CardItem title="Model">{film.model}</CardItem>
          <CardItem title="Capacity">{film.cargo_capacity}</CardItem>
          <CardItem title="Class">{film.vehicle_class}</CardItem>
        </Card>
      ))}
    </>
  );
}
