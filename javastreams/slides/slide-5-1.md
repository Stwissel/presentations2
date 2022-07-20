# :: ?

A shorthand to call methods

| Long                       | Short                      |
| -------------------------- | -------------------------- |
| id -> this.getCustomer(id) | this::getCustomer          |
| c -> c instanceof Customer | Customer.class::isInstance |
| c -> c.getEmail            | Customer::getEmail         |
| x -> System.out.println(x) | System.out::println        |
