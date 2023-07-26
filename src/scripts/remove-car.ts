import getCurrentPageNumber from './utils';
import { renderGarageFields } from './render-app';

async function removeCar(elem: HTMLElement): Promise<void> {
  const carageRow = elem.closest('.garage__row');
  const id = carageRow?.getAttribute('data-id');
  const pageNumber = getCurrentPageNumber();

  await fetch(`http://localhost:3000/garage/${id}`, {
    method: 'DELETE',
  });
  console.log(id);
  renderGarageFields(pageNumber);
}

export default removeCar;
