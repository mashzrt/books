export function paginate(
  currentPage: number,
  postsPerPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) {
  return (pageNumber: number) => setCurrentPage(pageNumber);
}

export function generatePageNumbers(
  searchedPosts: any[],
  postsPerPage: number
) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchedPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}
