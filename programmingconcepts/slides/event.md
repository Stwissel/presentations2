# Event / Stream

Not a style like functional or OO, but an intersection.

- attach
- subscribe
- listen

---

## JavaScript examples

```js

  <button id="btn1" onClick="doSomething(this, 'red')">

  function doSomething(element, color) { ... }
```

### With CSP we add listeners

```js
let btn = document.getElementById('btn1');
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      ...
    });

```

---

## More event listners

```js
if (document.readyState != 'loading') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
element.addEventListener(someEvent,eventFunction);
let socket = new WebSocket(addr);
socket.onmessage = (event) => { ... }
socket.onopen = (event) => { ... }
socket.onclose = (event) => { ... }
socket.onerror = (event) => { ... }
```

---

## Isn't at the end everything reacting to events?

---

Welcome to [reactive](https://reactivex.io) programming.

a.k.a The Observer pattern done right

![SimpleObserver](img/simpleObserver.png)

---

### ReactiveX

![FullReactive](img/fullReactive.png)

The full story will warrant a full story - another time
