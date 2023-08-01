import { postCar } from './create-car';
import { renderGarageFields } from './render-app';
import getCurrentPageNumber from './utils';
import { brandsAndModels, BrandAndModels } from './cars-and-models';

async function createRandomCar(randomName: string, randomColor: string): Promise<void> {
  const pageNumber = getCurrentPageNumber();
  const data = {
    name: randomName,
    color: randomColor,
  };
  await postCar(data);
  renderGarageFields(pageNumber);
}

function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomNumber(min: number, max: number): number {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function getRandomName(array: BrandAndModels[]): string {
  const brandIndex = getRandomNumber(0, array.length);
  const modelsArray = array[brandIndex].models;
  const modelIndex = getRandomNumber(0, modelsArray.length);
  const result = `${array[brandIndex].brand} ${array[brandIndex].models[modelIndex]}`;
  return result;
}

function generateCars(): void {
  for (let i = 0; i < 100; i += 1) {
    createRandomCar(getRandomName(brandsAndModels), getRandomColor());
  }
}

export default generateCars;
