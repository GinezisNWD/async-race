import getCurrentPageNumber from './utils';

function paginationIsAviable(totalPages: number | undefined): void {
  if (totalPages === undefined) return;
  const prevBtn = document.querySelector('.garage__pagination-prev-btn');
  const nextBtn = document.querySelector('.garage__pagination-next-btn');
  const CurrentPageNumber = getCurrentPageNumber();
  prevBtn?.classList.remove('_inactive');
  nextBtn?.classList.remove('_inactive');

  if (CurrentPageNumber === 1) {
    prevBtn?.classList.add('_inactive');
  }
  if (CurrentPageNumber >= totalPages) {
    nextBtn?.classList.add('_inactive');
  }
}

export default paginationIsAviable;
