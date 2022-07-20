# Optional

- Optional.of(42)
- Optional.empty()
- Optional.ofNullable(....)

---

## Got an Optional?

lets say... `Optional<String> o = ...;`

- o.isPresent(), o.get()
- o.ifPresent(System.out::println)
- String s = o.orElse("Somthing")
- String s = o.orElseGet(() -> makeACall(...))
- String s = o.orElseThrow(() -> new BadThingsHappened()
- .map(), .filter(), .stream()
