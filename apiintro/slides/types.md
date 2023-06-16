# API Types

- Command based
- Location based
- data returned

---

## Why would you care?

- No code is an island
- You will consume & provide (want to bet?)
- Be nice to your future self

---

## Command based

- one location
- payload includes action

---

- SOAP
- gRPC
- MQ(TT)
- CORBA
- GraphQL

---

## Location based

- URL points to object
- VERB determines Action
- status code indicates result

---

- REST
- file system

---

## Data returened

- CSV
- Fixed lenght
- XML
- JSON
- binary

---

## [Representational State Transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)

- Action: HTTP Verb (GET POST PATCH PUT DELETE .... )
- Target: URL / URI (http(s)://...)
- Result: HTTP status code (200, 201, 400, 404, 500 ...)
- stateless (?)
