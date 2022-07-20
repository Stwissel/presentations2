## dependencyManagement vs dependencies

- pulled from parent
- local overwrite possible
- keep versions consistent

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<dependencyManagement>
		<!-- Settings and versioning for all modules -->
		<depdendencies>
        ...
        </depdendencies>
    </dependencyManagement>

	<depdendencies>
    ...
    </depdendencies>
</project>
```
