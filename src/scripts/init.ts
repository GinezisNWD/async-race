import renderBasicPage from './render-main-page';
import { renderApp } from './render-app';
import createCar from './create-car';

export function init(): void {
  renderBasicPage();
  renderApp();

  const createCarBtn = document.querySelector('.async-race__create-car-btn');
  if (createCarBtn) createCarBtn.addEventListener('click', createCar);
}
