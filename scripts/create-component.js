#!/usr/bin/env node

/**
 * Component Generator Script
 * Usage: node scripts/create-component.js ComponentName
 * 
 * This will create:
 * - src/components/ComponentName.js
 * - src/components/ComponentName.css
 */

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Error: Please provide a component name');
  console.log('Usage: node scripts/create-component.js ComponentName');
  process.exit(1);
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Error: Component name must be in PascalCase (e.g., MyComponent)');
  process.exit(1);
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const componentFile = path.join(componentsDir, `${componentName}.js`);
const cssFile = path.join(componentsDir, `${componentName}.css`);

// Check if component already exists
if (fs.existsSync(componentFile)) {
  console.error(`❌ Error: Component ${componentName} already exists`);
  process.exit(1);
}

// Convert PascalCase to kebab-case for CSS class
const kebabCase = componentName
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .toLowerCase();

// Component template
const componentTemplate = `import React, { memo } from 'react';
import './${componentName}.css';

const ${componentName} = memo(({ title, description }) => {
  return (
    <section className="${kebabCase}">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
});

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

// CSS template
const cssTemplate = `.${kebabCase} {
  padding: 4rem 0;
  background: var(--bg-primary);
}

.${kebabCase} .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.${kebabCase} h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-align: center;
}

.${kebabCase} p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .${kebabCase} {
    padding: 3rem 0;
  }

  .${kebabCase} h2 {
    font-size: 2rem;
  }

  .${kebabCase} p {
    font-size: 1rem;
  }
}
`;

// Create files
try {
  fs.writeFileSync(componentFile, componentTemplate);
  fs.writeFileSync(cssFile, cssTemplate);
  
  console.log('✅ Component created successfully!');
  console.log(`\n📁 Files created:`);
  console.log(`   - src/components/${componentName}.js`);
  console.log(`   - src/components/${componentName}.css`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Customize your component in src/components/${componentName}.js`);
  console.log(`   2. Add styles in src/components/${componentName}.css`);
  console.log(`   3. Import in App.js:`);
  console.log(`      const ${componentName} = lazy(() => import('./components/${componentName}'));`);
  console.log(`   4. Use in your JSX:`);
  console.log(`      <${componentName} title="Your Title" description="Your description" />`);
} catch (error) {
  console.error('❌ Error creating component:', error.message);
  process.exit(1);
}
