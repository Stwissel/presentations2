## pluginManagement vs plugins

- pulled from parent
- local overwrite possible
- keep versions consistent

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<build>
		<pluginManagement>
			<!-- Settings and versioning for all modules -->
			<plugins>
            ...
            </plugins>
        </pluginManagement>
        <defaultGoal>package</defaultGoal>
		<!-- These plugins are used in ALL modules Configuration and version is
			defined in plugin management -->
		<plugins>
        ...
        </plugins>
    </build>
</project>
```
