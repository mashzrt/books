interface Book {
  isbn13: string;
  price: string;
  title: string;
  image: string;
}

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch("https://api.itbook.store/1.0/new");
  const data = await response.json();
  return data.books;
}
