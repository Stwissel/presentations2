## Filtering resources

- Powerfull
- Headache

```xml
	<build>
		<resources>
			<resource>
				<directory>src/main/resources</directory>
				<filtering>false</filtering>
			</resource>
			<resource>
				<directory>src/main/resources-filtered</directory>
				<filtering>true</filtering>
			</resource>
        </resources>
    </build>
```
