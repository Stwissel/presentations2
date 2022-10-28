# HTML Templates

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

---

## JS to fill

```js
const loadApps = (data) => {
  const template = document.querySelector('#pwaitem');
  const insertPoint = document.querySelector('#appsection');
  for (const app of data) {
    loadApp(app, template, insertPoint);
  }
};
```

---

## JS to fill details

```js
/* Load one application */
const loadApp = (app, template, insertPoint) => {
  try {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('article');
    clone.querySelector('a').href = app.start_url;
    article.querySelector('h2').innerHTML = app.name;
    article.querySelector('p').innerHTML = app.description;
    article.querySelector('img').src = app.icon;
    insertPoint.appendChild(clone);
  } catch (e) {
    console.error(e);
  }
};
```
