## Spotless

```xml
<plugin>
	<groupId>com.diffplug.spotless</groupId>
	<artifactId>spotless-maven-plugin</artifactId>
	<version>2.18.0</version>
</plugin>
```

```bash
#!/bin/bash
# Run formatting on pre-commit
files=`git status --porcelain | cut -c 4-`
fulllist=''
for f in $files; do
    fulllist+=(.*)$(basename $f)$'\n'
done;
list=`echo "${fulllist}" | paste -s -d, /dev/stdin`
echo Working on $list
# Activate Java 11
export JAVA_HOME=`/usr/libexec/java_home -v 11.0`
/usr/local/bin/mvn spotless:apply -Dspotless.check.skip=false -DspotlessFiles=$list
```

See: https://wissel.net/blog/2021/12/spotless-code-with-a-git-hook.html
