# Beyond the basics

## Tests & Variables

---

## Tests

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Content-Type is present', function () {
  pm.response.to.have.header('Content-Type');
});
```

---

### Tea anyone?

---

### [Chai](https://www.chaijs.com/) to be precise

![Chai assertions](slides/Assertions.png)

---

## Variables

- from global
- from the environment
- created in script (typically in environment)

---

## Result capture

```js
pm.test('Capture Bearer', function () {
  pm.response.to.be.json;
  var jsonData = pm.response.json();
  pm.environment.set('AUTH_KEY', jsonData.bearer);
});

pm.test('Capture Location', function () {
  var location = pm.response.headers.get('Location');
  pm.environment.set('AUTH_LOCATION', location);
});
```

---

## Recap

- Don't hard code, use varaibles
- Multiple environments to test against different backends / scenarios
- use tests to capture output for next test
