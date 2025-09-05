# Auto-complete Component Notes

## Safe Property Access

Use optional chaining to safely access properties on possibly null/undefined objects:

```js
const recipes = json?.recipes;
```
If `json` is null or undefined, `json?.recipes` returns `undefined` instead of throwing an error.

---

## Implementation Steps

1. Added input box.
2. Called the API.
3. Fetched results using `useEffect`.
4. Displayed the results.

---

## Conditional Rendering

Show the results box only if there are results:

```js
{results.length > 0 && (
  // Render results box
)}
```

---

## Feature Enhancements

### Show/Hide Results on Focus/Blur

```js
const [showResults, setShowResults] = useState(false);

<input
  onFocus={() => setShowResults(true)}
  onBlur={() => setShowResults(false)}
  // ...other props
/>
```

---

## Performance Improvements

### Debouncing API Calls

Instead of calling the API on every keystroke, debounce the call:

```js
useEffect(() => {
  const timer = setTimeout(fetchData, 300);

  return () => {
    clearTimeout(timer);
  };
}, [input]);
```
- The API is called 300ms after the user stops typing.
- If the input changes within 300ms, the previous timer is cleared.

---

## Further Optimization: Caching Results

Cache API results to avoid unnecessary calls for the same input:

```js
const [cache, setCache] = useState({});

const fetchData = async () => {
  if (cache[input]) {
    setResults(cache[input]);
    return;
  }
  // Fetch from API
  const json = await fetchApi(input);
  setResults(json?.recipes);
  setCache(prev => ({ ...prev, [input]: json?.recipes }));
};
```

- Store cache as an object: `{ [input]: results }`
- If the result for the current input exists in cache, use it instead of calling the API.

---

## Summary

- Use optional chaining for safe property access.
- Debounce API calls for better performance.
- Cache results to minimize redundant API requests.
- Use focus/blur events to control result visibility.
