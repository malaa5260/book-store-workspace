export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  description: string;
  coverImageUrl: string;
  category: BookCategory;
  publishedDate: Date;
  pageCount: number;
  language: string;
  publisher: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  images: string[];
}

export interface BookCategory {
  id: string;
  name: string;
  description: string;
  parentCategoryId?: string;
}

export interface BookFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  author?: string;
  rating?: number;
  inStock?: boolean;
  searchTerm?: string;
}

export interface BookSortOption {
  field: 'title' | 'author' | 'price' | 'rating' | 'publishedDate';
  direction: 'asc' | 'desc';
}

export interface BookSearchResult {
  books: Book[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
