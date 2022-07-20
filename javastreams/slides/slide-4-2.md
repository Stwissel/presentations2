# Declarative

```java
List<String> getMarketingEmailForRegion(String region, List<String> custIds) {
    return custIds.stream()
        .filter(this::validId)
        .map(this::getCustomer)
        .filter(Customer.class::isInstance)
        .filter(Customer::hasMarketingConsent)
        .filter(c -> region.equals(c.region()))
        .map(Customer::getEmail)
        .filter(String.class::isInstance)
        .collect(Collectors.toList());
}
```
