import { renderGarageFields } from './render-app';

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
  const currentPage = document.querySelector('.garage__page_counter');
  if (!nameInput || !colorInput || !currentPage) return;
  const carName = nameInput.value;
  const carColor = colorInput.value;
  const pageNumber = Number(currentPage.textContent);
  const data = {
    name: carName,
    color: carColor,
  };
  postCar(data);
  renderGarageFields(pageNumber);
  nameInput.value = '';
  colorInput.value = '#ffffff';
}

export default createCar;
