# XSLT

- XML Sources
- XML Templates
- XPATH query language

Let's look at a [book list](https://raw.githubusercontent.com/databricks/spark-xml/master/src/test/resources/books.xml)

---

## XPATH

Looks easy, similar to CSS selector, can get really complex

| Path            | what it does                              |
| --------------- | ----------------------------------------- |
| `/`             | root of the XML document                  |
| `/catalog/book` | **ALL** books in catalog                  |
| `//genre`       | All genre entries regardless of hierarchy |

---

## XPATH (2)

- `/catalog/book[genre='Romance']`<br />
  romance books
- `//book[@id='bk104']`<br />
  Oberon's Legacy
- `distinct-values(/catalog/book/genre)`<br />
  List of all genre
- `/catalog/book[genre=/catalog/book`<br />`[@id='bk101']/genre]`<br />
  All books with the same genre as bk101

---

## XPATH Reference

![Book cover](slides/XSLT1.png)

---

![Book size](slides/XSLT2.png)

---

## Simple template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">

    <xsl:output method="xhtml" encoding="UTF-8" />

    <xsl:template match="/">
        // HTML Page wrapper here
        <xsl:apply-templates />
    </xsl:template>

</xsl:stylesheet>
```

---

## Matching is king

```xml
    <xsl:template match="book">
        <article>
            <xsl:apply-templates select="title" />
            <xsl:apply-templates select="genre" />
            <ul>
                <li>Author: <xsl:value-of select="author"/></li>
                <li>Price: <xsl:value-of select="price"/></li>
                <li>Published: <xsl:value-of select="publish_date"/></li>
            </ul>
            <xsl:apply-templates select="description" />
        </article>
    </xsl:template>
```

---

## More matching

```xml
    <xsl:template match="genre[text()='Romance']">
        <p class="romance"><xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="description[../genre='Computer']">
        <p class="highlight"><xsl:value-of select="."/></p>
    </xsl:template>
```
