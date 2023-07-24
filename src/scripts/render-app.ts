import { Car, getCars } from './backend';
import svg from './carSvg';

function createAppNavigation(app: Element): void {
  const nav = document.createElement('div');
  nav.classList.add('async-race__nav');
  const toGarageBtn = document.createElement('button');
  toGarageBtn.classList.add('async-race__to-garage-btn', 'green-btn');
  toGarageBtn.textContent = 'TO GARAGE';
  const toWinnerBtn = document.createElement('button');
  toWinnerBtn.classList.add('async-race__to-winners-btn', 'green-btn');
  toWinnerBtn.textContent = 'TO WINNERS';

  nav.append(toGarageBtn, toWinnerBtn);
  app?.append(nav);
}

function createSettingsField(app: Element): void {
  const settings = document.createElement('div');
  settings.classList.add('async-race__settings');
  const createCarBlock = document.createElement('div');
  createCarBlock.classList.add('async-race__create-car');
  const createCarName = document.createElement('input');
  createCarName.classList.add('async-race__create-car-name');
  const createCarColor = document.createElement('input');
  createCarColor.classList.add('async-race__create-car-color');
  createCarColor.setAttribute('type', 'color');
  createCarColor.setAttribute('value', '#ffffff');
  const createCarBtn = document.createElement('button');
  createCarBtn.classList.add('async-race__create-car-btn', 'blue-btn');
  createCarBtn.textContent = 'CREATE';
  const updateCarBlock = document.createElement('div');
  updateCarBlock.classList.add('async-race__update-car');
  const updateCarName = document.createElement('input');
  updateCarName.classList.add('async-race__update-car-name');
  const updateCarColor = document.createElement('input');
  updateCarColor.classList.add('async-race__update-car-color');
  updateCarColor.setAttribute('type', 'color');
  updateCarColor.setAttribute('value', '#ffffff');
  const updateCarBtn = document.createElement('button');
  updateCarBtn.classList.add('async-race__update-car-btn', 'blue-btn');
  updateCarBtn.textContent = 'UPDATE';

  createCarBlock.append(createCarName, createCarColor, createCarBtn);
  updateCarBlock.append(updateCarName, updateCarColor, updateCarBtn);
  settings.append(createCarBlock, updateCarBlock);
  app?.append(settings);
}

function renderAppContols(app: Element): void {
  const controls = document.createElement('div');
  controls.classList.add('async-race__contols');
  const raceBtn = document.createElement('button');
  raceBtn.classList.add('async-race__race-btn', 'green-btn');
  raceBtn.textContent = 'RACE';
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('async-race__reset-btn', 'green-btn');
  resetBtn.textContent = 'RESET';
  const generateCarsBtn = document.createElement('button');
  generateCarsBtn.classList.add('async-race__generate-cars-btn', 'blue-btn');
  generateCarsBtn.textContent = 'GENERATE CARS';

  controls.append(raceBtn, resetBtn, generateCarsBtn);
  app?.append(controls);
}

function createCar(elem: Car): Element {
  const garageRow = document.createElement('div');
  garageRow.classList.add('garage__row');
  garageRow.dataset.id = `${elem.id}`;
  const carSettings = document.createElement('div');
  carSettings.classList.add('garage__settings');
  const carName = document.createElement('h3');
  carName.classList.add('garage__car-name');
  carName.innerHTML = elem.name;
  const selectBtn = document.createElement('button');
  selectBtn.classList.add('blue-btn');
  selectBtn.textContent = 'SELECT';
  const removetBtn = document.createElement('button');
  removetBtn.classList.add('blue-btn');
  removetBtn.textContent = 'REMOVE';
  carSettings.append(selectBtn, removetBtn, carName);

  const trafficLane = document.createElement('div');
  trafficLane.classList.add('garage__traffic-lane');
  const car = document.createElement('div');
  car.classList.add('garage__svg');
  car.innerHTML = svg;
  car.style.fill = elem.color;

  trafficLane.append(car);

  garageRow.append(carSettings, trafficLane);
  return garageRow;
}

function renderCars(cars: Car[]): void {
  const garageRaceField = document.querySelector('.garage__race-field');
  cars.forEach((elem) => {
    garageRaceField?.append(createCar(elem));
  });
}

async function renderGarageFields(page: number): Promise<void> {
  const test = await getCars(page);
  const { cars, xTotalCount, totalPages } = test;
  if (!xTotalCount || !totalPages) return;
  const counter = document.querySelector('.garage__cars_counter');
  const currentPage = document.querySelector('.garage__page_counter');
  if (!counter || !currentPage) return;
  counter.textContent = xTotalCount;
  currentPage.textContent = `${page}`;

  renderCars(cars);
}

function createGarage(app: Element): void {
  const garage = document.createElement('div');
  garage.classList.add('async-race__garage', 'garage');
  const garageTitle = document.createElement('h2');
  garageTitle.classList.add('garage__title');
  garageTitle.textContent = 'Garage';
  const garageCounter = document.createElement('span');
  garageCounter.classList.add('garage__counter', 'garage__cars_counter');
  const garagePage = document.createElement('h2');
  garagePage.classList.add('garage__page');
  garagePage.textContent = 'Page';
  const garagePageCounter = document.createElement('span');
  garagePageCounter.classList.add('garage__counter', 'garage__page_counter');
  const garageRaceField = document.createElement('div');
  garageRaceField.classList.add('garage__race-field');

  garageTitle.append(garageCounter);
  garagePage.append(garagePageCounter);
  garage.append(garageTitle, garagePage, garageRaceField);
  app.append(garage);
}

function renderApp(): void {
  const mainContainer = document.querySelector('.main .container');
  const app = document.createElement('div');
  app.classList.add('async-race');
  createAppNavigation(app);
  createSettingsField(app);
  renderAppContols(app);
  createGarage(app);
  mainContainer?.append(app);
  renderGarageFields(1);
}

export default renderApp;
