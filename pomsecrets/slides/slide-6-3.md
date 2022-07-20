# profiles

- cater to specific needs
- default is off, use command line
- either command line or defaults

```xml
<profile>
	<id>notes-win</id>
	<activation>
		<os>
			<family>windows</family>
		</os>
	</activation>
    ...
 </profile>
```

### Families

```xml
<family>windows</family>
<family>mac</family>
<family>unix</family>
```
