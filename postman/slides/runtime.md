# Runtime tests

- In Postman UI
- Command line / script
- CI

---

## CI

- Needs postman API key
- I'd rather use newman

---

## Postman UI

![Run Postman](slides/RunPostmanRun.png)

---

![Run Postman](slides/RunPostmanRun2.png)

---

## Data loader

![Run Postman](slides/MockData.png)

---

## [Newman](https://www.npmjs.com/package/newman)

```bash
npm install -g newman
npm install -g newman-reporter-html
newman run myCollection.json
```

---

### Not so fast

- Needs NodeJS installed
- Must export Collection
- Must export Environment
- Pick the right reporter

```bash
newman run myCollection.json \
       --environment myEnvironment.json \
       --iteration-data dataToLoad.json \
       --reporters cli,junit,html
```

---

### Newman [reporters](https://www.npmjs.com/search?q=newman-reporter)

- cli
- json
- junit (XML)
- html
- and [more](https://www.npmjs.com/search?q=newman-reporter)

---

## More stuff

- OpenAPI import
- Mock servers
- Monitors
- Flows

## References

- [Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)
- [Writing Tests in Postman](https://blog.postman.com/writing-tests-in-postman/)
- [Postman on automated testing](https://www.postman.com/automated-testing/)
- [Software Testing Help Tutorial](https://www.softwaretestinghelp.com/api-testing-using-postman/)
- [Chai Assertion library](https://www.chaijs.com/)
- [Mockaroo Sample Data](https://mockaroo.com/)
