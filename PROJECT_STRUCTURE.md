# 📁 Project Structure Documentation

## 🎯 Overview
This React portfolio is built following modern React best practices with a proper Single Page Application (SPA) architecture.

## 📂 Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components used across pages
│   │   ├── LoadingScreen.jsx
│   │   └── RevealOnScroll.jsx
│   ├── layout/          # Layout components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── MobileMenu.jsx
│   └── assets/          # Component-specific assets (images)
│
├── pages/               # Page components (route components)
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── BackgroundPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ContactPage.jsx
│   └── index.js         # Barrel export
│
├── context/             # React Context for state management
│   └── AppContext.jsx   # Global app state
│
├── hooks/               # Custom React hooks
│   ├── useScrollReveal.js
│   ├── useTyped.js
│   └── index.js         # Barrel export
│
├── constants/           # Constants and data
│   ├── data.js          # All app data
│   └── index.js         # Barrel export
│
├── utils/               # Utility functions
│   └── iconMapping.js   # Icon component mapping
│
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Key Technologies

### React Router v6
- **BrowserRouter**: Main router wrapper
- **Routes & Route**: Route configuration
- **Link**: Navigation between pages
- **useLocation**: Get current route
- **Outlet**: Render child routes

### Context API
- **AppProvider**: Global state provider
- **useAppContext**: Custom hook to access app state
- State includes:
  - `isLoaded`: Loading screen state
  - `menuOpen`: Mobile menu state
  - `theme`: Theme preference
  - `closeMenu()`: Function to close mobile menu

### Custom Hooks
1. **useScrollReveal**: Scroll-based reveal animations
   - Uses IntersectionObserver API
   - Configurable threshold and rootMargin
   
2. **useTyped**: Typed.js text animation
   - Configurable typing speed
   - Multiple string support
   - Auto-cleanup on unmount

## 📄 Component Architecture

### Pages (Route Components)
- **HomePage**: Landing page with hero section
- **AboutPage**: Skills and about information
- **BackgroundPage**: Education and experience
- **ProjectsPage**: Featured projects showcase
- **ContactPage**: Social links and coding profiles

### Layout Components
- **Layout**: Wrapper component with Navbar and Outlet
- **Navbar**: Desktop navigation with React Router Links
- **MobileMenu**: Mobile navigation menu

### Common Components
- **LoadingScreen**: Initial loading animation
- **RevealOnScroll**: Scroll reveal wrapper component

## 🔄 State Management

### AppContext Features
```javascript
const {
  isLoaded,      // Boolean: Loading state
  setIsLoaded,   // Function: Set loading state
  menuOpen,      // Boolean: Mobile menu state
  setMenuOpen,   // Function: Set menu state
  closeMenu,     // Function: Close mobile menu
  theme,         // String: Current theme
  setTheme       // Function: Set theme
} = useAppContext();
```

## 🎨 Routing Structure

```javascript
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="background" element={<BackgroundPage />} />
    <Route path="projects" element={<ProjectsPage />} />
    <Route path="contact" element={<ContactPage />} />
  </Route>
</Routes>
```

### Route Paths
- `/` - Home page
- `/about` - About page
- `/background` - Background page
- `/projects` - Projects page
- `/contact` - Contact page

## 📦 Data Management

All data is centralized in `src/constants/data.js`:

- **projects**: Array of project objects
- **skills**: Array of skill categories
- **codingProfiles**: Coding platform links
- **socialLinks**: Social media links
- **personalInfo**: Personal information
- **education**: Education details
- **experience**: Work experience details
- **navLinks**: Navigation links

## 🎯 Best Practices Implemented

### ✅ React Best Practices
- Functional components with hooks
- Custom hooks for reusable logic
- Context API for state management
- Component composition
- Proper file organization
- Barrel exports for cleaner imports

### ✅ React Router Best Practices
- Nested routes with Layout
- Link components for navigation
- useLocation for active states
- Programmatic navigation
- Route-based code splitting ready

### ✅ Code Organization
- Separation of concerns
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Modular components
- Centralized data management

### ✅ Performance Optimizations
- Lazy loading ready structure
- Optimized re-renders
- Proper cleanup in useEffect
- Event handler memoization ready

## 🔧 How to Add New Features

### Add a New Page
1. Create page component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/constants/data.js` (navLinks)
4. Export from `src/pages/index.js`

### Add Custom Hook
1. Create hook in `src/hooks/useCustomHook.js`
2. Export from `src/hooks/index.js`
3. Import and use in components

### Add New Data
1. Add data to `src/constants/data.js`
2. Export the data
3. Import where needed

### Add Utility Function
1. Create function in `src/utils/`
2. Export the function
3. Import where needed

## 📱 Navigation Flow

1. **Initial Load**: LoadingScreen → HomePage
2. **Navigation**: Click Link → Route change → Page transition
3. **Mobile**: Hamburger → MobileMenu → Link click → Close menu → Navigate
4. **Desktop**: Navbar → Link click → Navigate

## 🎨 Styling Approach

- **Tailwind CSS**: Utility-first styling
- **Custom CSS**: Global styles in `index.css`
- **Glassmorphism**: Modern UI effects
- **Responsive**: Mobile-first approach
- **Animations**: CSS animations with utility classes

## 🔐 Type Safety (Future Enhancement)
The project structure is ready for TypeScript migration:
- Rename `.jsx` to `.tsx`
- Add type definitions
- Use interfaces for data structures

## 📊 Future Enhancements
- [ ] Add Redux Toolkit for complex state
- [ ] Implement lazy loading for routes
- [ ] Add error boundary components
- [ ] Implement SEO optimization
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] TypeScript migration
- [ ] PWA features

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Environment Variables (Optional)
Create `.env` file for environment-specific configs:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=Portfolio
```

## 🤝 Contributing Guidelines
1. Follow the established folder structure
2. Use functional components with hooks
3. Create reusable custom hooks
4. Keep data in constants
5. Use Context API for global state
6. Follow naming conventions
7. Write clean, documented code

## 📚 Resources
- [React Router Documentation](https://reactrouter.com/)
- [React Context API](https://react.dev/reference/react/useContext)
- [React Hooks](https://react.dev/reference/react)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Author**: Ranvijay Kumar  
**Last Updated**: 2025  
**Version**: 2.0.0

