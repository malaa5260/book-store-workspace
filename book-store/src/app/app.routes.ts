import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./pages/books/books.routes').then((m) => m.booksRoutes),
  },
];
