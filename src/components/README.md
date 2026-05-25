# Component Management Guide

## How to Add New Components

### Quick Start
1. Create your component file in `src/components/YourComponent.js`
2. Create the corresponding CSS file `src/components/YourComponent.css`
3. Import and use in App.js or other components

### Component Template

Use this template for new components:

```javascript
import React, { memo } from 'react';
import './YourComponent.css';

const YourComponent = memo(({ prop1, prop2 }) => {
  return (
    <div className="your-component">
      <h2>{prop1}</h2>
      <p>{prop2}</p>
    </div>
  );
});

YourComponent.displayName = 'YourComponent';

export default YourComponent;
```

### CSS Template

```css
.your-component {
  padding: 4rem 0;
  background: var(--bg-primary);
}

.your-component h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.your-component p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### Performance Best Practices

1. **Always use React.memo** for components that receive props
2. **Use lazy loading** for heavy components (3D, charts, large images)
3. **Memoize expensive calculations** with useMemo
4. **Memoize callbacks** with useCallback
5. **Use will-change CSS property** sparingly for animations

### Example: Adding a New Section

1. Create `src/components/TestimonialsSection.js`:
```javascript
import React, { memo } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = memo(({ testimonials }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>{testimonial.text}</p>
              <span>{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
```

2. Create `src/components/TestimonialsSection.css`

3. Add to App.js:
```javascript
// At the top with other lazy imports
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));

// In the return statement
<Suspense fallback={<LoadingFallback />}>
  <div className="section-animate">
    <TestimonialsSection testimonials={testimonialsData} />
  </div>
</Suspense>
```

### Available CSS Variables

Use these in your components for consistent styling:

- `var(--bg-primary)` - Main background
- `var(--bg-secondary)` - Secondary background
- `var(--bg-deep)` - Deep/dark background
- `var(--bg-card)` - Card background
- `var(--text-primary)` - Primary text color
- `var(--text-secondary)` - Secondary text color
- `var(--accent)` - Accent color (orange)
- `var(--accent-hover)` - Accent hover state

### Component Categories

- **Layout Components**: Header, Footer, Container
- **Section Components**: Hero, WelcomeSection, ProductSection
- **UI Components**: ProductCard, ContactForm
- **3D Components**: CarShowcase (heavy, lazy-loaded)
- **Page Components**: IntroPage

### Tips for Smooth Performance

1. Keep components small and focused
2. Avoid inline styles when possible
3. Use CSS transforms instead of position changes
4. Debounce scroll and resize events
5. Optimize images before adding them
6. Test on slower devices
