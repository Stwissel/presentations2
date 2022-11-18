# [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)

In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program

---

## Terminology

- Pure function
- Side effects
- First class citizen
- Higher order functions

---

### Pure functions

![Pure functions](img/purefunctions.png)

---

### Side effects - Global State

![Side effect](img/impurefunctions1.png)

---

### Side effects - Local State

![Side effect](img/impurefunctions.png)

---

### First class citizen

#### TypeScript

```js
const addMe = (a: number, b: number): number => a + b;
```

#### Java

```java
BiFunction<Integer, Integer, Integer> addMe = (a, b) -> a + b;
```

---

### When you don't like Lambdas

#### TypeScript (2)

```js
const addMe = function (a: number, b: number): number {
  return a + b;
};
```

#### Java (2)

```java
BiFunction<Integer, Integer, Integer> addMe =
    new BiFunction<Integer, Integer, Integer>() {

    @Override
    public Integer apply(Integer t1, Integer t2)
        throws Exception {
        return t1 + t2;
    }
};
```

---

### Higher order functions (1)

```js
const royals = (prince, princess) => {
  return new Promise((resolve, reject) => {
    const willProposalGetAccepted = Math.random() < 0.5;
    if (willProposalGetAccepted) {
      resolve('He said yes');
    } else {
      reject(new Error('The wedding is off'));
    }
  });
};
```

#### a.k.a Functions that return a function

```js
try {
     await wedding = royals(prince, princess);
     console.log(wedding);
} catch (e) {
    console.err(e);
}
```

---

### Higher order functions (2)

```js
const computeTax = (item, tax) => (item.price * tax) / 100;
const sgTax = (item) => computeTax(item, 7.0);
const salesPrice = (item, taxFunction)
                 => item.price + taxFunction(item);
const product = {
                    name: 'Chicken Rice',
                    price: 5.0,
                    origin: 'Singapore'
                };

console.log(
  `${product.name} costs $ ${salesPrice(product, sgTax)}
     in ${product.origin}`
);
```

#### a.k.a: Functions that accept functions as parameters

---

### Pro & Con

- Pure functions are idempotent -> same input, same result
- Side effect handling breaks pureness
- Pure functions must be stateless - statemanagement undefined
- Return value might need to be composite: new State and value
- easy to test
