# Implementations

- build into language
- template engines

---

## Template engines

- What language(s)?
- What input data format(s)?
- How much logic?
  - conditions
  - loops

---

## Chef selection

| Engine                                                                                                                                                   | Languages                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Mustache](https://mustache.github.io)                                                                                                                   | > 30                                                       |
| [Jinja](<https://en.wikipedia.org/wiki/Jinja_(template_engine)>)                                                                                         | Python <br/>(used in MKDocs)                               |
| [MVEL](http://mvel.documentnode.com), [Jade](https://jade-lang.com), <br/>[Handlebars](https://handlebarsjs.com), [Thymeleaf](https://www.thymeleaf.org) | [vert.x](https://vertx.io/docs/vertx-web/java/#_templates) |
| [XSLT](https://www.w3.org/Style/XSL/)                                                                                                                    | Java, C/C++/C#, JS/TS                                      |

and [many, many more](https://en.wikipedia.org/wiki/Comparison_of_web_template_engines)

---

## [Mustache](https://mustache.github.io)

```bash
npm install -g mustache
```

- logic less
- JS friendly
- format neutral

---

### Mustache Samples

```bash
mustache person.json template.vcf
mustache person.json bio.draft.html
```

```js
function renderHello(target) {
  fetch('template.mustache')
    .then((response) => response.text())
    .then((template) => {
      var r = Mustache.render(template, { name: 'John' });
      document.getElementById(target).innerHTML = r;
    });
}
```

---

### Mustache in Java

```java
import com.github.mustachejava.DefaultMustacheFactory;
import com.github.mustachejava.Mustache;
import com.github.mustachejava.MustacheFactory;
```

```java
private Optional<String> generate(
      final Map<String, Object> source,
         final Reader reader) {
    try (Writer w = new StringWriter()) {
      final MustacheFactory mf = new DefaultMustacheFactory();
      final Mustache m = mf.compile(reader, "template");
      m.execute(w, source);
      w.flush();
      return Optional.of(w.toString());
    } catch (final Exception e) {
      logger.error(e.getMessage());
    }
    return Optional.empty();
  }
```

---

## Mustache example

```js
BEGIN:VCARD
VERSION:3.0
FN:{{name}}
EMAIL;type=INTERNET;type=WORK;type=pref:{{email}}
TEL;type=WORK;type=pref:{{phone}}
END:VCARD

```

```json
{
  "name": "John Doe",
  "phone": "123445667",
  "email": "john@doe.org",
  "languages": ["en", "es"],
  "vip": false
}
```
