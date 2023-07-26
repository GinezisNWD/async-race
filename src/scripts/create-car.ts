import { renderGarageFields } from './render-app';
import getCurrentPageNumber from './utils';

interface Data {
  name: string;
  color: string;
}

async function postCar(data: Data): Promise<void> {
  fetch(`http://localhost:3000/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function createCar(): void {
  const nameInput: HTMLInputElement | null = document.querySelector('.async-race__create-car-name');
  const colorInput: HTMLInputElement | null = document.querySelector('.async-race__create-car-color');
  if (!nameInput || !colorInput) return;
  if (nameInput.value.length === 0) {
    nameInput.classList.add('shake');
    nameInput.addEventListener('animationend', () => {
      nameInput.classList.remove('shake');
    });
    return;
  }

  const carName = nameInput.value;
  const carColor = colorInput.value;
  const pageNumber = getCurrentPageNumber();
  const data = {
    name: carName,
    color: carColor,
  };
  postCar(data);
  renderGarageFields(pageNumber);
  nameInput.value = '';
  colorInput.value = '#ffffff';
}

export { createCar, Data };
