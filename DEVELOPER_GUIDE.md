# 👨‍💻 Developer Guide

## Quick Start

### Understanding the Project Structure

This React portfolio uses a **modern, scalable architecture** following React best practices. Here's what you need to know:

## 🔑 Key Concepts

### 1. Single Page Application (SPA)
- **React Router** handles all navigation
- No page reloads - instant transitions
- Routes are defined in `src/App.jsx`

### 2. Context API for State Management
```javascript
// Using AppContext in any component
import { useAppContext } from '../context/AppContext';

function MyComponent() {
  const { menuOpen, setMenuOpen, closeMenu } = useAppContext();
  // Use state here
}
```

### 3. Custom Hooks
```javascript
// Scroll reveal animation
import { useScrollReveal } from '../hooks/useScrollReveal';
const ref = useScrollReveal();
<div ref={ref} className="reveal">...</div>

// Typed text effect
import { useTyped } from '../hooks/useTyped';
const typedRef = useTyped(['Text 1', 'Text 2']);
<span ref={typedRef}></span>
```

## 📝 Common Tasks

### Adding a New Page

1. **Create the page component**
```javascript
// src/pages/NewPage.jsx
import { RevealOnScroll } from '../components/common/RevealOnScroll';

export const NewPage = () => {
  return (
    <section className="min-h-screen...">
      <RevealOnScroll>
        <h1>New Page</h1>
      </RevealOnScroll>
    </section>
  );
};
```

2. **Add route in App.jsx**
```javascript
import { NewPage } from './pages/NewPage';

// In Routes
<Route path="new-page" element={<NewPage />} />
```

3. **Add navigation link**
```javascript
// src/constants/data.js
export const navLinks = [
  // ... existing links
  { id: 6, name: "New Page", path: "/new-page" },
];
```

### Adding Data

All data lives in `src/constants/data.js`:

```javascript
// Add new data
export const myNewData = {
  title: "Something",
  items: [...]
};

// Import in component
import { myNewData } from '../constants/data';
```

### Creating a Custom Hook

```javascript
// src/hooks/useMyHook.js
import { useState, useEffect } from 'react';

export const useMyHook = (param) => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Logic here
  }, [param]);
  
  return state;
};

// Export in src/hooks/index.js
export { useMyHook } from './useMyHook';
```

### Creating a Reusable Component

```javascript
// src/components/common/MyComponent.jsx
export const MyComponent = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
```

## 🎨 Styling Guidelines

### Using Tailwind CSS
```javascript
// Responsive classes
className="text-sm sm:text-base md:text-lg lg:text-xl"

// Hover effects
className="hover:scale-105 transition-transform"

// Gradients
className="bg-gradient-to-r from-blue-500 to-cyan-500"

// Glassmorphism
className="backdrop-blur-xl bg-white/5 border border-white/10"
```

### Custom Animations
Available in `src/index.css`:
- `animate-fadeIn` - Fade in effect
- `animate-gradient` - Animated gradient
- `animate-pulse` - Pulsing effect
- `reveal` / `reveal.visible` - Scroll reveal

## 🔄 State Management Patterns

### App-Level State (Context)
Use for:
- Menu open/close state
- Loading state
- Theme preferences
- User preferences

```javascript
const { menuOpen, setMenuOpen } = useAppContext();
```

### Component-Level State (useState)
Use for:
- Form inputs
- Component-specific UI state
- Temporary data

```javascript
const [value, setValue] = useState('');
```

### Props for Component Communication
```javascript
<ChildComponent 
  data={myData}
  onAction={handleAction}
/>
```

## 🛠️ Best Practices

### 1. Component Organization
```
✅ DO: Small, focused components
❌ DON'T: Large components doing too much

✅ DO: Reusable components in /common or /ui
❌ DON'T: Duplicate code across components
```

### 2. Import Organization
```javascript
// React imports first
import { useState, useEffect } from 'react';

// Third-party imports
import { Link } from 'react-router-dom';
import { FaIcon } from 'react-icons/fa';

// Local imports
import { useAppContext } from '../context/AppContext';
import { MyComponent } from '../components/MyComponent';
import { data } from '../constants/data';
```

### 3. File Naming
```
Components: PascalCase (HomePage.jsx, MyComponent.jsx)
Hooks: camelCase with 'use' prefix (useScrollReveal.js)
Utils: camelCase (iconMapping.js)
Constants: camelCase (data.js)
```

### 4. Props Destructuring
```javascript
// ✅ DO
export const MyComponent = ({ title, description, items }) => {
  return <div>...</div>;
};

// ❌ DON'T
export const MyComponent = (props) => {
  return <div>{props.title}</div>;
};
```

## 🚀 Performance Tips

### 1. Lazy Loading Routes (Future)
```javascript
const HomePage = lazy(() => import('./pages/HomePage'));
```

### 2. Memoization (when needed)
```javascript
import { useMemo, useCallback } from 'react';

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
```

### 3. Avoid Inline Functions in JSX
```javascript
// ✅ DO
const handleClick = () => { /* ... */ };
<button onClick={handleClick}>Click</button>

// ❌ DON'T (creates new function on every render)
<button onClick={() => { /* ... */ }}>Click</button>
```

## 🐛 Debugging Tips

### React DevTools
1. Install React DevTools browser extension
2. Inspect component hierarchy
3. View props and state
4. Profile component renders

### Console Logging
```javascript
// Debug state changes
useEffect(() => {
  console.log('State changed:', myState);
}, [myState]);

// Debug renders
console.log('Component rendered');
```

### Router Debugging
```javascript
import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log('Current route:', location.pathname);
```

## 📦 Adding New Dependencies

```bash
# Install package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update package
npm update package-name
```

## 🔍 Code Quality

### ESLint
```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Before Committing
1. ✅ Run `npm run lint`
2. ✅ Test all routes work
3. ✅ Check responsive design
4. ✅ Verify no console errors
5. ✅ Test build: `npm run build`

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [React Hooks](https://react.dev/reference/react)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://react.dev/reference/react/useContext)

## 🤝 Getting Help

- Check `PROJECT_STRUCTURE.md` for architecture details
- Review existing components for patterns
- Read component comments and JSDoc
- Check console for error messages

## ✨ Pro Tips

1. **Use the React DevTools** - Invaluable for debugging
2. **Follow the existing patterns** - Consistency is key
3. **Keep components small** - Easier to understand and maintain
4. **Use custom hooks** - Share logic between components
5. **Leverage Context wisely** - Don't overuse for all state
6. **Write comments** - Help your future self
7. **Test in multiple browsers** - Ensure compatibility
8. **Mobile-first** - Design for mobile, enhance for desktop

---

Happy coding! 🚀

