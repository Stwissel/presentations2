## 404.md

### front matter

```yaml
hide:
  - navigation
template: 404.html
```

---

### HTML 1/3

```md
# 404 - Not found

The HCL Domino REST API documentation site has been restructured following the [Diátaxis framework](https://diataxis.fr/).

<div id="error404Message"></div>

In case the page you are accessing isn't showing, refer to the table below for the new links!
```

---

### HTML 2/3

```html
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>previous</th>
      <th>now</th>
    </tr>
  </thead>
  <tbody id="linkBody"></tbody>
</table>
```

---

### HTML 3/3

```html
<script type="text/javascript">
  const locationPrefix = '{{ site_url }}';
  bootstrap(locationPrefix);
</script>
```
