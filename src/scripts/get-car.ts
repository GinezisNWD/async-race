import { Car } from './backend';

async function getCar(id: number): Promise<Car> {
  const responce = await fetch(`http://localhost:3000/garage/${id}`, {
    method: 'GET',
  });
  const data: Car = await responce.json();

  return data;
}

export default getCar;
