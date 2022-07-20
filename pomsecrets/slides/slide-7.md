# Building containers

- Google JIB plugin
- Docker daemon or container registry
- Java optimized

```xml
<plugin>
<!-- Create a Docker image using Google JIB -->
<groupId>com.google.cloud.tools</groupId>
<artifactId>jib-maven-plugin</artifactId>
<configuration>
	<from>
		<image>${docker.r12.image}</image>
	</from>
	<to>
		<image>${docker.repository}/hclcom/projectkeep-r12</image>
		<tags>
			<tag>${project.version}</tag>
			<tag>latest</tag>
		</tags>
	</to>
	<container>
     ....
    </container>
</configuration>
</plugin>
```
