import renderBasicPage from './render-main-page';
import { renderApp } from './render-app';
import { createCar } from './create-car';
import garageHandler from './garage-handler';
import updateCar from './update-car';
import generateCars from './generate-cars';
import { nextPage, prevPage } from './pagination-next-page';

export function init(): void {
  renderBasicPage();
  renderApp();

  const createCarBtn = document.querySelector('.async-race__create-car-btn');
  if (createCarBtn) createCarBtn.addEventListener('click', createCar);

  const updateCarBtn = document.querySelector('.async-race__update-car-btn');
  if (updateCarBtn) updateCarBtn.addEventListener('click', updateCar);

  const garage = document.querySelector('.garage');
  if (garage) garage.addEventListener('click', garageHandler);

  const generateCarsBtn = document.querySelector('.async-race__generate-cars-btn');
  generateCarsBtn?.addEventListener('click', generateCars);

  const paginationNextBtn = document.querySelector('.garage__pagination-next-btn');
  paginationNextBtn?.addEventListener('click', nextPage);

  const paginationPrevBtn = document.querySelector('.garage__pagination-prev-btn');
  paginationPrevBtn?.addEventListener('click', prevPage);
}
