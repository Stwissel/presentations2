# [Object Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

---

A common feature of objects is that procedures (or methods) are attached to them and can access and modify the object's data fields. In this brand of OOP, there is usually a special name such as `this` or `self` used to refer to the current object. In OOP, computer programs are designed by making them out of objects that interact with one another

---

## History

- Sketchpad (1963)
- Algol AED-0 (1966)
- Smalltalk / Lisp (1970ties)
- Modula2 (1978)
- Objective-C (1980ties)
- Java (1995)

---

## Terminology

- Interface
- Class
- Instance
- Inheritance
- Composition
- Encapsulation

---

![Instance](img/interface-instance.png)

```java
public interface Animal { ... }
public interface Predator extends Animal { ... }
public class Dog implements Predator { ... }
public class ShihTzu extends Dog implements Domesticated { ...}
public ShihTzu dogNotToBuy = new ShihTzu();
```

---

| Inheritance                          | Composition                         |
| ------------------------------------ | ----------------------------------- |
| ![Inhertitance](img/inheritance.png) | ![Composition](img/composition.png) |

---

## Encapsulation

By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java. This concept is also often used to hide the internal representation, or state of an object from the outside. This is called information hiding (from [Stackify](https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/)).

![Encapsulation](img/encapsulation.png)

(Not covered yet: Reactive)
