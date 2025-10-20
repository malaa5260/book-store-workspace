import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { 
  Book, 
  BookCategory, 
  BookFilter, 
  BookSearchResult, 
  BookSortOption,
  ApiResponse,
  PaginatedResponse,
  SearchParams
} from '@angular-demo/models';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly baseUrl = 'https://dummyjson.com/products';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  private categoriesSubject = new BehaviorSubject<BookCategory[]>([]);

  public books$ = this.booksSubject.asObservable();
  public categories$ = this.categoriesSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Get all books with optional filtering and pagination
   */
  getBooks(params?: SearchParams): Observable<PaginatedResponse<Book>> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.query) {
        httpParams = httpParams.set('search', params.query);
      }
      
      if (params.pagination) {
        httpParams = httpParams.set('page', params.pagination.page.toString());
        httpParams = httpParams.set('limit', params.pagination.limit.toString());
        
        if (params.pagination.sortBy) {
          httpParams = httpParams.set('sortBy', params.pagination.sortBy);
        }
        
        if (params.pagination.sortOrder) {
          httpParams = httpParams.set('sortOrder', params.pagination.sortOrder);
        }
      }
      
      if (params.filters) {
        Object.keys(params.filters).forEach(key => {
          if (params.filters![key] !== undefined && params.filters![key] !== null) {
            httpParams = httpParams.set(key, params.filters![key].toString());
          }
        });
      }
    }

    return this.http.get<PaginatedResponse<Book>>(this.baseUrl, { params: httpParams });
  }

  /**
   * Get book by ID
   */
  getBookById(id: string): Observable<Book> {
    return this.http.get<ApiResponse<Book>>(`${this.baseUrl}/${id}`)
      .pipe(map(response => response.data));
  }

  /**
   * Search books with filters
   */
  searchBooks(filter: BookFilter, sort?: BookSortOption, page: number = 1, limit: number = 20): Observable<BookSearchResult> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (filter.category) {
      params = params.set('category', filter.category);
    }
    if (filter.minPrice !== undefined) {
      params = params.set('minPrice', filter.minPrice.toString());
    }
    if (filter.maxPrice !== undefined) {
      params = params.set('maxPrice', filter.maxPrice.toString());
    }
    if (filter.author) {
      params = params.set('author', filter.author);
    }
    if (filter.rating !== undefined) {
      params = params.set('rating', filter.rating.toString());
    }
    if (filter.inStock !== undefined) {
      params = params.set('inStock', filter.inStock.toString());
    }
    if (filter.searchTerm) {
      params = params.set('search', filter.searchTerm);
    }

    if (sort) {
      params = params.set('sortBy', sort.field);
      params = params.set('sortOrder', sort.direction);
    }

    return this.http.get<BookSearchResult>(`${this.baseUrl}/search`, { params });
  }

  /**
   * Get book categories
   */
  getCategories(): Observable<BookCategory[]> {
    return this.http.get<ApiResponse<BookCategory[]>>(`${this.baseUrl}/categories`)
      .pipe(
        map(response => response.data),
        tap(categories => this.categoriesSubject.next(categories))
      );
  }

  /**
   * Get books by category
   */
  getBooksByCategory(categoryId: string, page: number = 1, limit: number = 20): Observable<PaginatedResponse<Book>> {
    const params = new HttpParams()
      .set('category', categoryId)
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<PaginatedResponse<Book>>(`${this.baseUrl}/category/${categoryId}`, { params });
  }

  /**
   * Get featured books
   */
  getFeaturedBooks(limit: number = 10): Observable<Book[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<Book[]>>(`${this.baseUrl}`, { params })
      .pipe(map(response => response.products));
  }

  /**
   * Get bestseller books
   */
  getBestsellerBooks(limit: number = 10): Observable<Book[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<Book[]>>(`${this.baseUrl}/bestsellers`, { params })
      .pipe(map(response => response.data));
  }

  /**
   * Get recently added books
   */
  getRecentlyAddedBooks(limit: number = 10): Observable<Book[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<Book[]>>(`${this.baseUrl}/recent`, { params })
      .pipe(map(response => response.data));
  }

  /**
   * Get related books
   */
  getRelatedBooks(bookId: string, limit: number = 5): Observable<Book[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<Book[]>>(`${this.baseUrl}/${bookId}/related`, { params })
      .pipe(map(response => response.data));
  }

  /**
   * Update book stock
   */
  updateBookStock(bookId: string, quantity: number): Observable<Book> {
    return this.http.patch<ApiResponse<Book>>(`${this.baseUrl}/${bookId}/stock`, { quantity })
      .pipe(map(response => response.data));
  }

  /**
   * Add new book (admin only)
   */
  addBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<ApiResponse<Book>>(this.baseUrl, book)
      .pipe(map(response => response.data));
  }

  /**
   * Update book (admin only)
   */
  updateBook(id: string, book: Partial<Book>): Observable<Book> {
    return this.http.put<ApiResponse<Book>>(`${this.baseUrl}/${id}`, book)
      .pipe(map(response => response.data));
  }

  /**
   * Delete book (admin only)
   */
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
