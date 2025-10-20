import { Routes } from '@angular/router';

export const booksRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./books-list/books-list').then((m) => m.BooksList),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./book-detail/book-detail').then((m) => m.BookDetail),
  },
];
