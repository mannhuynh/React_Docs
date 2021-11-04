# Sculpture is a basic React app using `useState`

## Notes

Handle events when the state is out of bound of an array.

_Reference_: `./src/Sculpture.js`

Initialize the index variable:

```javascript
const [index, setIndex] = useState(0);
```

Handle index out of bound:

```javascript
const handleNext = () => {
	setIndex(() => {
		if (index === sculptureList.length - 1) {
			return 0;
		}
		return index + 1;
	});
};
```

```javascript
const handlePrev = () => {
	setIndex(() => {
		if (index === 0) {
			return sculptureList.length - 1;
		}
		return index - 1;
	});
};
```
