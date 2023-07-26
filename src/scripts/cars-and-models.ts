interface BrandAndModels {
  brand: string;
  models: string[];
}

const brandsAndModels: BrandAndModels[] = [
  {
    brand: 'Tesla',
    models: ['Model-3', 'Model-S', 'Model-Y', 'Model-X', 'Roadster'],
  },
  {
    brand: 'Porshe',
    models: ['Cayman', 'Boxter', 'Spyder', 'Macan', 'Taycab', 'Panamera'],
  },
  {
    brand: 'BWM',
    models: ['M5', 'X5M', 'M4', 'I8'],
  },
  {
    brand: 'Ferrari',
    models: ['599 GTB FIORANO', '458 ITALIA', '458 SPIDER', 'F12 BERLINETTA'],
  },
  {
    brand: 'Mersedes',
    models: ['AMG GT roadste', 'GLC AMG', 'Maybach', 'S-class coupe'],
  },
  {
    brand: 'Lada',
    models: ['Granta', 'Kalina', 'Kaleka', 'chetbIrka'],
  },
];

export { brandsAndModels, BrandAndModels };
