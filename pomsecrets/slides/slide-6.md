## Parent vs. Reactor

- Parent does inheritance
- Reactor does composition

### PARENT

```xml
	<parent>
		<groupId>com.hcl.domino.keep</groupId>
		<artifactId>keep-parent</artifactId>
		<version>1.3.4-SNAPSHOT</version>
		<relativePath>../keep-parent/pom.xml</relativePath>
	</parent>
```

---

### Reactor

```xml
<modules>
		<module>keep-admin-ui</module>
		<module>keep-i18n</module>
		<module>keep-core</module>
		<module>keep-pim</module>
		<module>keep-notesclient</module>
		<module>os-keep-installer</module>
</modules>
```
