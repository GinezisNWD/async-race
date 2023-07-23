function renderAppNavigation(app: Element): void {
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
  const createCar = document.createElement('div');
  createCar.classList.add('async-race__create-car');
  const createCarName = document.createElement('input');
  createCarName.classList.add('async-race__create-car-name');
  const createCarColor = document.createElement('input');
  createCarColor.classList.add('async-race__create-car-color');
  createCarColor.setAttribute('type', 'color');
  createCarColor.setAttribute('value', '#ffffff');
  const createCarBtn = document.createElement('button');
  createCarBtn.classList.add('async-race__create-car-btn', 'blue-btn');
  createCarBtn.textContent = 'CREATE';
  const updateCar = document.createElement('div');
  updateCar.classList.add('async-race__update-car');
  const updateCarName = document.createElement('input');
  updateCarName.classList.add('async-race__update-car-name');
  const updateCarColor = document.createElement('input');
  updateCarColor.classList.add('async-race__update-car-color');
  updateCarColor.setAttribute('type', 'color');
  updateCarColor.setAttribute('value', '#ffffff');
  const updateCarBtn = document.createElement('button');
  updateCarBtn.classList.add('async-race__update-car-btn', 'blue-btn');
  updateCarBtn.textContent = 'UPDATE';

  createCar.append(createCarName, createCarColor, createCarBtn);
  updateCar.append(updateCarName, updateCarColor, updateCarBtn);
  settings.append(createCar, updateCar);
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

function renderApp(): void {
  const mainContainer = document.querySelector('.main .container');
  const app = document.createElement('div');
  app.classList.add('async-race');
  renderAppNavigation(app);
  createSettingsField(app);
  renderAppContols(app);
  mainContainer?.append(app);
}

export default renderApp;
