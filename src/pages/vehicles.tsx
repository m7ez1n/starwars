import { useEffect, useState } from 'react';
import { fetchPageRange } from '../common/FetchPageRange';
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
      const response = await fetchPageRange(1, 4, 'https://swapi.dev/api/vehicles/');

      setVehicles(response);
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
        <Card>
          <CardTitle>{vehicle.name}</CardTitle>
          <CardItem title="Model">{vehicle.model}</CardItem>
          <CardItem title="Capacity">{vehicle.cargo_capacity}</CardItem>
          <CardItem title="Class">{vehicle.vehicle_class}</CardItem>
        </Card>
      ))}
    </>
  );
}
