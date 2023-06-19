# Insights

## All the things that go wrong

---

### Know your standards

- [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (Content Security Policy)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## Postman

- Use environments
- Use tests
- Need to learn [Chai](https://www.chaijs.com/)

---

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Bearer is present', function () {
  pm.response.to.be.json;
  pm.expect(pm.response.json()).to.have.property('bearer');
});

pm.test('Capture Bearer', function () {
  pm.response.to.be.json;
  var jsonData = pm.response.json();
  pm.environment.set('AUTH_KEY', jsonData.bearer);
});
```

---

## Authentication

```js
/* (C) 2020 HCL All rights reserved */
const express = require('express');
const app = express();
const port = 3000;
const template = require('./template.json');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('private.key');

const signOptions = {
  algorithm: 'RS256',
  expiresIn: `${template.expSeconds}s`,
  mutatePayload: true
};

const renderInstruction = (req, res) => {
  res.send('You need to post a user name, claim details are local here');
};
```

---

```js
const renderJwt = (req, res) => {
  const claim = { sub: req.body.toString(), ...template };
  const bearer = jwt.sign(claim, privateKey, signOptions);
  res.json({ bearer: bearer, ...claim });
};

app.use(express.raw({ type: 'text/plain' }));
app.get('/', renderInstruction);
app.post('/', renderJwt);

app.listen(port, () => console.log(`Ready when you are on port ${port}!`));
```

---

## lots of data

**Typical:**

```js
document.fetch('https://myapiserver')
   .then(result => result.json())
   .then(json => {...})
   .catch(e => console.error(e))
```

... imagine you load 100k entries

---

### The solution in 6 acts

```js
'use strict';

class ViewDataSource {
  constructor(sourceURL, bearer, logToConsole) {
    this.sourceURL = sourceURL;
    this.bearer = bearer;
    this.consoleLog = logToConsole ? true : false;
  }
```

---

```js
/* Chops arriving chunks along new lines,
     takes into account that a chunk might end middle of line */
splitStream = () => {
  const splitOn = '\n';
  let buffer = '';
  return new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const parts = buffer.split(splitOn);
      parts.slice(0, -1).forEach((part) => controller.enqueue(part));
      buffer = parts[parts.length - 1];
    },
    flush(controller) {
      if (buffer) controller.enqueue(buffer);
    }
  });
};
```

---

```js
/* Parses JSON if row looks like JSON (with eventual comma at end of line) */
parseJSON = () => {
  return new TransformStream({
    transform(chunk, controller) {
      if (chunk.endsWith(',')) {
        controller.enqueue(JSON.parse(chunk.slice(0, -1)));
      } else if (chunk.endsWith('}')) {
        controller.enqueue(JSON.parse(part));
      }
    }
  });
};
```

---

```js
/* Helper to passthru to console */
consoleJsonLogger = () => {
  return new TransformStream({
    transform(json, controller) {
      if (this.consoleLog) {
        try {
          console.log(JSON.stringify(json, null, 2));
        } catch (e) {
          console.error(e);
        }
      }
      controller.enqueue(json);
    }
  });
};
```

---

```js
  /* Pipe to pull JSON array and emit individual JSON objects */
  async pullData(targetStream /* WritableStream(json) */) {
    const httpResponse = await fetch(this.sourceURL, {
      headers: {
        Authorization: `Bearer ${this.bearer}`,
        Accept: 'application/json'
      }
    });
    return httpResponse.body
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(this.splitStream())
      .pipeThrough(this.parseJSON())
      .pipeThrough(this.consoleJsonLogger())
      .pipeTo(targetStream);
  }
}
```

---

```js
/* Helper function to just dump JSON to the console */
const consoleJsonTarget = () => {
  return new WritableStream({
    write(json) {
      console.log(JSON.stringify(json, null, 2));
    }
  });
};
```
