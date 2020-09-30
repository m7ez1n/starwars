import { useEffect, useState } from 'react';

import { Card, CardItem, CardTitle } from '../components/Card';
import { Modal } from '../components/Modal';

type VehiclesProps = {
  name: string;
  model: string;
  cargo_capacity: string;
  vehicle_class: string;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchvehicles = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/vehicles/');

      if (!response.ok) {
        throw new Error('Opa, algo deu errado!');
      }
      
      const vehiclesResponse = await response.json();
      
      setVehicles(vehiclesResponse.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchvehicles();
  }, []);

  return (
    <>
      {vehicles.map((vehicle: VehiclesProps) => (
        <Card onClick={() => setOpen(!open)}>
          <CardTitle>{vehicle.name}</CardTitle>
          <CardItem title="Model">{vehicle.model}</CardItem>
          <CardItem title="Capacity">{vehicle.cargo_capacity}</CardItem>
          <CardItem title="Class">{vehicle.vehicle_class}</CardItem>
        </Card>
      ))}
    </>
  );
}
