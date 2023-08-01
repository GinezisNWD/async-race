function getCurrentPageNumber(): number {
  const currentPage = document.querySelector('.garage__page_counter');
  if (!currentPage) return 1;
  const pageNumber = Number(currentPage.textContent);
  return pageNumber;
}

export default getCurrentPageNumber;
