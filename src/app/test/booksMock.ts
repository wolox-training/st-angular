import { Book } from '@app/models/book';

export const bookMock: Book = {
  id: 1,
  author: 'Mario Mendoza',
  title: 'Akelarre',
  image_url: 'http://imagen-com',
  editor: 'librosSA',
  year: '2016',
  genre: 'Suspense'
};

export const arrayBooksMock: Book[] = [
  bookMock,
  {
    id: 2,
    author: 'Stephen King',
    title: 'Misery',
    image_url: 'http://imagen-com',
    editor: 'librosSAS',
    year: '2001',
    genre: 'Terror'
  }
]
