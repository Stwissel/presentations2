# What is Templating?

Goal: Develop a common understanding and vocabulary of templating. Know available options to be able to select the tool fit for purpose.

---

Hint: you already use templating every day, you just might not call it that

---

![Templating](slides/Templating.png)

---

- Template
  - String
  - File
  - DOM
- Selector
  - positional
  - object
  - query
- Data source
  - plenty

---

## Positional

```java
String.format("Hello %s your score is %s, % place",
               "John", 434, "3rd");
```

---

## Object

```js
const person = {
  name: 'John Doe',
  age: 42,
  languages: ['en', 'es']
};
const greeting = `Hello ${person.name}!`;
```

---

## Query

- CSS selectors

```js
document.querySelector('#pwaitem');
```

- XPath

```xml
//book[author='Frank Herbert']
```

---

## Templates in HTML

```html
<template id="pwaitem">
  <article>
    <a href="#">
      <img width="96px" src="#" alt="" />
      <h2></h2>
      <p></p>
    </a>
  </article>
</template>
```
