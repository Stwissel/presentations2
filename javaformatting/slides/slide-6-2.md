# Formatting tips

- Naming
- Functions
- Streams

---

## Naming

- proper English
- skip data type in name
- i might be OK
- prefer `final`

---

## Functions

- One page size limit
- Dependency injection
- Parameters `final`
- Package visible?
- KISS (a.k.a cyclomatic complexity)
- DRY

---

### Streams and fluent

- break at .
- outfactor methods
- keep it readable

```java
SomeCollection.stream()
   .filter(this::filterDown)
   .map(x -> somthing(x,y)
   .collect(Collectors::toList);
```
