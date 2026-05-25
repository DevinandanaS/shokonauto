# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### Issue: "Component not showing up"

**Solution:**
1. Check if it's imported in App.js:
   ```javascript
   const YourComponent = lazy(() => import('./components/YourComponent'));
   ```

2. Check if it's wrapped in Suspense:
   ```javascript
   <Suspense fallback={<LoadingFallback />}>
     <YourComponent />
   </Suspense>
   ```

3. Check browser console for errors (F12)

---

### Issue: "Styles not applying"

**Solution:**
1. Verify CSS file is imported:
   ```javascript
   import './YourComponent.css';
   ```

2. Check class names match:
   ```javascript
   // In JS
   <div className="my-component">
   
   // In CSS
   .my-component { }
   ```

3. Clear browser cache (Ctrl + Shift + R)

---

### Issue: "Site still feels slow"

**Solution:**
1. Check if images are optimized (use WebP, compress)
2. Verify lazy loading is working (check Network tab in DevTools)
3. Make sure components use React.memo:
   ```javascript
   const MyComponent = memo(() => { ... });
   ```

---

### Issue: "3D car not loading"

**Solution:**
1. Check internet connection (loads external libraries)
2. Wait a few seconds (3D takes time to initialize)
3. Check console for WebGL errors
4. Try different browser (Chrome/Edge recommended)

---

### Issue: "npm run create-component not working"

**Solution:**
1. Make sure you're in project root directory
2. Run: `npm install` first
3. Use PascalCase: `npm run create-component MyComponent` (not mycomponent)

---

### Issue: "Animations not smooth"

**Solution:**
Already fixed! But if still having issues:
1. Close other browser tabs
2. Check CPU usage (close heavy apps)
3. Update browser to latest version
4. Disable browser extensions temporarily

---

### Issue: "Build fails"

**Solution:**
1. Check for syntax errors in your components
2. Run: `npm install` to ensure dependencies are installed
3. Delete `node_modules` and `package-lock.json`, then run `npm install`
4. Check console for specific error messages

---

### Issue: "Component shows 'Loading...' forever"

**Solution:**
1. Check component file path is correct
2. Verify component has `export default`
3. Check browser console for import errors
4. Make sure component file name matches import

---

## Performance Checklist

If site feels slow, verify:

- [ ] All heavy components use lazy loading
- [ ] Components use React.memo
- [ ] Images are compressed/optimized
- [ ] No console errors (F12)
- [ ] Using latest browser version
- [ ] No infinite loops in useEffect

---

## Getting Help

### Check Browser Console
1. Press F12
2. Go to Console tab
3. Look for red errors
4. Share error message with me

### Check Network Performance
1. Press F12
2. Go to Network tab
3. Reload page
4. Check which files are slow to load

### Share With Me
Tell me:
- What you're trying to do
- What error you see (screenshot helps)
- What you've already tried

I'll help you fix it! 🚀

---

## Quick Fixes

### Clear Everything and Restart
```bash
# Stop the dev server (Ctrl + C)
# Then run:
npm install
npm start
```

### Reset Component
If a component is broken:
1. Delete the component files
2. Run: `npm run create-component ComponentName`
3. Start fresh with the template

### Check File Structure
Make sure your files are in the right place:
```
src/
├── components/
│   ├── YourComponent.js    ✅
│   └── YourComponent.css   ✅
└── App.js                  ✅
```

---

## Still Having Issues?

Just tell me:
1. What you're trying to do
2. What's happening instead
3. Any error messages

I'll help you fix it! 💪
