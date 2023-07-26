import { Data } from './create-car';
import getCurrentPageNumber from './utils';
import { renderGarageFields } from './render-app';

async function updateCar(): Promise<void> {
  const pageNumber = getCurrentPageNumber();
  const updateCarNameInput: HTMLInputElement | null = document.querySelector('.async-race__update-car-name');
  const updateCarColorInput: HTMLInputElement | null = document.querySelector('.async-race__update-car-color');
  const updateCarBtn: HTMLElement | null = document.querySelector('.async-race__update-car-btn');
  if (!updateCarNameInput || !updateCarColorInput || !updateCarBtn) return;
  const id = updateCarBtn?.dataset.id;
  if (id === undefined) return;
  if (updateCarNameInput.value.length === 0) {
    updateCarNameInput.classList.add('shake');
    updateCarNameInput.addEventListener('animationend', () => {
      updateCarNameInput.classList.remove('shake');
    });
    return;
  }

  const data: Data = {
    name: updateCarNameInput.value,
    color: updateCarColorInput.value,
  };

  await fetch(`http://localhost:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  console.log(data, id);
  renderGarageFields(pageNumber);
}

export default updateCar;
