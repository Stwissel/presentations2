# Verbs

You need tools or code for anything other than `GET` and `POST`

- [curl](https://curl.se)
- [postman](https://www.postman.com)
- [Thunder client](https://www.thunderclient.com)

... [many](https://geekflare.com/http-client-tools/) [more](https://alternativeto.net/software/postman/)

---

## There is live beyond<br /> `GET` & `POST`

- [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
- [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
- [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
- [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
- [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)
- [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
- [TRACE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE)

---

# Idempotency

Methods can be called [more than once](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent) without changing **server state**

- GET, HEAD, PUT, DELETE, OPTIONS, TRACE

## TRAP: code that changes state on those methods

```bash
curl http://someurl?action=blowup
```

---

## POST, PATCH & PUT

### (The ugly)

- `POST` creates **NEW** data, often abused espcially in HTML forms for updates
- `PUT` replaces an entire resource, often abused to do partial updates
- `PATCH` partial update of a resource, often utilized for update instructions

---

## Beyond HTTP

- [WebDAV](https://en.wikipedia.org/wiki/WebDAV): COPY, LOCK, MKCOL, MOVE, PROPFIND, PROPPATCH, UNLOCK
- [CalDAV](https://en.wikipedia.org/wiki/CalDAV): MKCALENDAR, REPORT
- [CardDAV](https://en.wikipedia.org/wiki/CardDAV): REPORT

---

## MS-OFFICE and HTTP

### (The fun part)

```bash
msword.exe https://......some.doc(x)
```

- `OPTIONS` -> server returns webDAV extensions
- `LOCK`
- `GET`
- sneaky `GET` to an SharePain specifi URL
- periodic `RELOCK`
- `PUT` (on save of document)
- sneaky ... you get the idea
- `UNLOCK` (on close of document)
