# Protection

---

## Security is all but in the head(ers)

- [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

---

- The headers do not provide **security** but a suggestion for the client/browser what is acceptable.
- It is up to the client/browser to heed the suggestion.
- IE (R.I.P) completely ignores CSP.
- curl doesn't bother about CORS or CSP nor do ([OOTB](<https://en.wikipedia.org/wiki/Out_of_the_box_(feature)>)) NodeJS or Java either.

---

## CORS - the ugly

CORS knows 3 answers:

- NONE
- **ONE** domain
- ALL

=> custom code required for<br /> multiple permitted domains

---

## Java (vert.x) example

```java
  private void handlerCheckCorsHeaders(final RoutingContext ctx) {
    final HttpServerResponse response = ctx.response();
    final String reqOrigin = ctx.request().getHeader(HttpListener.ORIGIN);
    if (reqOrigin != null && this.isAllowCors(reqOrigin)) {
      response.putHeader("Access-Control-Allow-Origin", reqOrigin);
      // Tell browser that response might change with origin
      response.putHeader("Vary", HttpListener.ORIGIN);
      HttpListener.logger.trace("CORS added for {}", reqOrigin);
    }
    ctx.next();
  }
```

---

## Content-Security-Policy

- [directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) determine the scope of the policy, with `default-src` as fallback if no specialized directive can be found, `>25` direcives available
- Start with `default-src 'self';`<br />
  (and see your website / app break)
  - no inline CSS
  - no inline JS (~`onClick=...`~)
  - no images with ~`data:`~

---

Forces you to abandon [Frankencode](https://deviq.com/antipatterns/frankencode)

- add CDN URLs if used
- in doubt: fix your code

---

## Sample CSP

(in one line)

```bash
Content-Security-Policy: default-src 'self';
                         script-src 'self' cdn.some.host;
                         script-src-elem cdn.some.host;
                         script-src-attr 'none';
                         img-src 'self' data:;
                         font-src cdn.fontawesome.com;
                         object-src 'none';
                         prefetch-src 'none';
                         frame-src 'self';
                         worker-src 'self';
                         frame-ancestors 'none';
                         form-action 'self'
```

---

## Adding back event listeners

```html
<script src="index.js" type="application/javascript"></script>
```

```js
if (document.readyState != 'loading') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

function bootstrap() {
  document.querySelector('#someid')
        .addEventListener('click', () => (/* insert action */));
  }
}
```

---

CSP Tooling

- [CSP Wizard](https://report-uri.com/home/generate)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com)
- [Monitor CSP](https://csper.io) ($$)
