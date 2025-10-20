# 📚 BookStore - Modern E-commerce Platform

A comprehensive, scalable e-commerce platform built with Angular 20, Nx workspace, and modern web technologies. This project demonstrates enterprise-level architecture patterns, state management, and best practices for large-scale Angular applications.

## 🚀 Features

### Core Functionality
- **Book Catalog**: Browse, search, and filter thousands of books
- **Shopping Cart**: Add/remove items, quantity management, persistent cart
- **User Management**: Registration, authentication, profile management
- **Order Management**: Order placement, tracking, history
- **Admin Panel**: Book management, order processing, user administration

### Technical Features
- **Nx Monorepo**: Scalable workspace with multiple apps and libraries
- **NgRx State Management**: Predictable state management with effects
- **Lazy Loading**: Optimized routing with code splitting
- **Responsive Design**: Mobile-first, accessible UI components
- **Type Safety**: Full TypeScript implementation with strict mode
- **Testing**: Comprehensive unit and integration tests
- **CI/CD**: Automated testing and deployment pipeline

## 🏗️ Architecture

### Project Structure
```
book-store-workspace/
├── apps/
│   ├── book-store/          # Main e-commerce application
│   └── angular-demo/        # Demo application
├── libs/
│   ├── shared/
│   │   ├── data-access/     # API services and data layer
│   │   ├── models/          # TypeScript interfaces and types
│   │   ├── ui-components/   # Reusable UI components
│   │   ├── utils/           # Utility functions and helpers
│   │   └── store/           # NgRx store configuration
│   └── features/
│       ├── book-catalog/    # Book browsing and search
│       ├── shopping-cart/   # Cart management
│       ├── user-management/ # User authentication and profiles
│       └── order-management/ # Order processing
└── tools/                   # Build tools and configurations
```

### Technology Stack
- **Frontend**: Angular 20, TypeScript, RxJS
- **State Management**: NgRx Store, Effects, Router Store
- **Build System**: Nx, Vite, SWC
- **Testing**: Vitest, Angular Testing Library
- **Styling**: CSS3, CSS Grid, Flexbox
- **Code Quality**: ESLint, Prettier, Husky
- **CI/CD**: GitHub Actions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 1.22+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-store-workspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Available Scripts

```bash
# Development
npm run serve              # Start development server
npm run build              # Build for production
npm run test               # Run unit tests
npm run lint               # Run ESLint
npm run format             # Format code with Prettier

# Nx specific commands
nx serve book-store        # Serve specific app
nx build book-store        # Build specific app
nx test shared-ui          # Test specific library
nx graph                   # Visualize project graph
nx affected:build          # Build affected projects
```

## 📦 Libraries Overview

### Shared Libraries

#### `@book-store/shared/models`
Contains all TypeScript interfaces and types:
- Book, User, Order, Cart models
- API response types
- Filter and search interfaces

#### `@book-store/shared/data-access`
API services and data layer:
- BookService: Book catalog operations
- CartService: Shopping cart management
- UserService: Authentication and user management
- OrderService: Order processing

#### `@book-store/shared/ui-components`
Reusable UI components:
- Button, Input, Card, Loading components
- Form controls and validation
- Responsive design system

#### `@book-store/shared/utils`
Utility functions:
- Currency formatting
- Date manipulation
- String utilities
- Validation helpers

### Feature Libraries

#### `@book-store/features/book-catalog`
Book browsing and search functionality:
- Book listing with filters
- Search and pagination
- Category browsing
- Book detail views

#### `@book-store/features/shopping-cart`
Shopping cart management:
- Add/remove items
- Quantity updates
- Cart persistence
- Checkout flow

#### `@book-store/features/user-management`
User authentication and profiles:
- Login/registration
- Profile management
- Password reset
- User preferences

#### `@book-store/features/order-management`
Order processing and tracking:
- Order placement
- Order history
- Status tracking
- Admin order management

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests for specific project
nx test book-store
nx test shared-ui

# Run tests with coverage
nx test --coverage

# Run e2e tests
npm run e2e
```

### Test Structure
- **Unit Tests**: Component and service testing
- **Integration Tests**: Feature testing with real data
- **E2E Tests**: Full user journey testing
- **Visual Regression**: Component visual testing

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Configuration
Configure environment variables for different stages:
- `development`: Local development
- `staging`: Pre-production testing
- `production`: Live environment

### CI/CD Pipeline
The project includes GitHub Actions workflows for:
- Automated testing on PR
- Build verification
- Deployment to staging/production
- Code quality checks

## 📚 Development Guidelines

### Code Style
- Follow Angular Style Guide
- Use TypeScript strict mode
- Implement proper error handling
- Write comprehensive tests
- Document public APIs

### Git Workflow
- Feature branches from `main`
- Descriptive commit messages
- Pull request reviews required
- Automated testing before merge

### Performance
- Lazy load feature modules
- Optimize bundle sizes
- Implement proper caching
- Monitor Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core e-commerce functionality
- ✅ User authentication
- ✅ Shopping cart
- ✅ Order management

### Phase 2 (Next)
- 🔄 Payment integration
- 🔄 Advanced search
- 🔄 Recommendation engine
- 🔄 Mobile app

### Phase 3 (Future)
- 📋 Multi-vendor support
- 📋 Advanced analytics
- 📋 AI-powered features
- 📋 Internationalization

---

Built with ❤️ using Angular, Nx, and modern web technologies.
