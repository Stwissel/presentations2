# Configure Google Style

Download slightly modified style here:<br />
https://github01.hclpnp.com/HCL-Janus/domino-keep-plus/blob/develop/eclipse-java-keep-style.xml

---

### Eclipse

![Java style in Eclipse](slides/img/EclipseStyle.png)

---

### VS Code

```json
{
  "java.autobuild.enabled": true,
  "java.checkstyle.configuration": "ile:///Users/stw/VSCodeJava/eclipse-java-keep-style.xml",
  "java.format.settings.url": "file:///Users/stw/VSCodeJava/eclipse-java-keep-style.xml",
  "java.format.settings.profile": "KeepStyle",
  "java.codeGeneration.generateComments": true,
  "java.codeGeneration.hashCodeEquals.useJava7Objects": true,
  "java.codeGeneration.toString.codeStyle": "STRING_BUILDER",
  "java.codeGeneration.toString.skipNullValues": true,
  "java.codeGeneration.useBlocks": true,
  "java.completion.enabled": true,
  "java.completion.guessMethodArguments": true,
  "java.import.generatesMetadataFilesAtProjectRoot": true,
  "java.configuration.maven.globalSettings": "",
  "java.configuration.maven.userSettings": "/Users/stw/.m2/settings.xml",
  "java.configuration.updateBuildConfiguration": "interactive",
  "java.eclipse.downloadSources": true,
  "java.implementationsCodeLens.enabled": true,
  "java.maven.downloadSources": true,
  "java.maven.updateSnapshots": true,
  "java.maxConcurrentBuilds": 2,
  "java.referencesCodeLens.enabled": true,
  "java.saveActions.organizeImports": true,
  "java.server.launchMode": "Standard",
  "java.showBuildStatusOnStart.enabled": true
}
```
