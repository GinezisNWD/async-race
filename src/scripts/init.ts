import renderBasicPage from './render-main-page';
import { renderApp } from './render-app';
import createCar from './create-car';
import garageHandler from './garage-handler';

export function init(): void {
  renderBasicPage();
  renderApp();

  const createCarBtn = document.querySelector('.async-race__create-car-btn');
  if (createCarBtn) createCarBtn.addEventListener('click', createCar);

  const garage = document.querySelector('.garage');
  if (garage) garage.addEventListener('click', garageHandler);
}
