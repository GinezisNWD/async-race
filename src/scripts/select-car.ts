import getCar from './get-car';

async function selectCar(elem: HTMLElement): Promise<void> {
  const carageRow = elem.closest('.garage__row');
  const id = Number(carageRow?.getAttribute('data-id'));
  const updateCarName: HTMLInputElement | null = document.querySelector('.async-race__update-car-name');
  const updateCarColor: HTMLInputElement | null = document.querySelector('.async-race__update-car-color');
  const updateCarBtn: HTMLElement | null = document.querySelector('.async-race__update-car-btn');
  const currentCar = await getCar(id);
  const { color, name } = currentCar;
  if (!updateCarName || !updateCarColor || !updateCarBtn) return;
  updateCarName.value = name;
  updateCarColor.value = color;
  updateCarBtn.dataset.id = `${id}`;
}

export default selectCar;
