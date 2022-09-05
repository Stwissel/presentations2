# Return Codes

---

We all know/use 200, 404 and 500 ...

---

but there [are more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

| Range | Meaning                     |
| ----- | --------------------------- |
| 1xx   | It will take a while        |
| 2xx   | We are good                 |
| 3xx   | Go somewhere else           |
| 4xx   | User, you f\*\*\*\*d up     |
| 5xx   | Sorry, but we f\*\*\*\*d up |

---

## 200 meets 201

### (The ugly)

The standard suggests a `201` as response for a resource creation. However lots of client code checks

```js
returnCode === 200;
```

and quite some server send `200` as response to a successful `POST` creation

```js
returnCode >= 200 && returnCode < 300;
```

... and be aware of `204` and friends

---

## 3xx is just a fleeting moment

Most tools, including all browsers follow 3xx redirect immetiatly. Watch carefully or switch it off

---

## Beyond HTTP

- 207, 208, 422, 423, 424, 507, 508 ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
- 226 ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))

---

## Insert joke about [`425`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425)

---

## and one about [`418`](https://www.rfc-editor.org/rfc/rfc2324)
