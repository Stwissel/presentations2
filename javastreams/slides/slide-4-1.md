# Imperative

```java
List<String> getMarketingEmailForRegion(String region, List<String> custIds) {
    List<String> resultEmails = new ArrayList();
    for (String id : custIds) {
        // Filter out old ID that start with "OLD"
        if (!id.startsWith("OLD")) {
            Customer customer = getCustomer(id);
            if (customer != null) {
                if (customer.hasMarketingConsent()) {
                    if(region.equals(customer.region()) {
                        String eMail = customer.getEmail();
                        if (eMail != null) {
                            resultEmails.add(eMail);
                        }
                    }
                }
            }
        }
    }
    return resultEmails;
}
```
