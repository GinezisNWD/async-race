import { renderGarageFields } from './render-app';

function nextPage(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('_inactive')) return;
  const currentPage = document.querySelector('.garage__page_counter');
  if (!currentPage) return;
  const test2 = Number(currentPage?.textContent) + 1;
  currentPage.textContent = `${test2}`;
  renderGarageFields(test2);
}

function prevPage(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('_inactive')) return;
  const currentPage = document.querySelector('.garage__page_counter');
  if (!currentPage) return;
  const test2 = Number(currentPage?.textContent) - 1;
  currentPage.textContent = `${test2}`;
  renderGarageFields(test2);
}

export { nextPage, prevPage };
