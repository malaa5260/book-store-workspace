import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button, Card } from '@angular-demo/ui-components';
import { Book } from '@angular-demo/models';
import { CommonModule } from '@angular/common';
import { BookService } from '@angular-demo/data-access';

@Component({
  selector: 'app-home',
  imports: [Button, RouterModule, Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featuredBooks: Book[] = [];

  bookService = inject(BookService);

  constructor() {
    this.loadFeaturedBooks();
  }

  private loadFeaturedBooks(): void {
    this.bookService.getFeaturedBooks(8).subscribe({
      next: (books) => {
        this.featuredBooks = books;
      },
      error: (error) => {
        console.error('Error loading featured books:', error);
      },
    });
  }
  viewBook(bookId: string): void {
    // Navigate to book detail page
    console.log('View book:', bookId);
  }
}
