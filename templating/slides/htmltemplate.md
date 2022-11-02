# HTML Templates

![Template Result](slides/templateResult.png)

---

## without template

```js
/* Load one application */
const loadApp = (app, insertPoint) => {
  try {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const title = document.createElement('img');

    link.href = app.start_url;
    title.innerHTML = app.name;
    description.innerHTML = app.description;
    image.src = app.icon;
    image.width = '96px';

    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(description);
    article.appendChild(link);
    insertPoint.appendChild(article);
  } catch (e) {
    console.error(e);
  }
};
```

---

## JS to loop through tiles

... in case you wondered

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

## The template

```html
<template id="pwaitem">
  <article class="start">
    <a href="#">
      <img width="96px" src="#" alt="" />
      <h2 class="title"></h2>
      <p class="description"></p>
    </a>
  </article>
</template>
```

---

## JS to fill details (actual)

```js
/* Load one application */
const loadApp = (app, template, insertPoint) => {
  try {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('.start');
    clone.querySelector('a').href = app.start_url;
    article.querySelector('.title').innerHTML = app.name;
    article.querySelector('.description').innerHTML = app.description;
    article.querySelector('img').src = app.icon;
    insertPoint.appendChild(clone);
  } catch (e) {
    console.error(e);
  }
};
```
