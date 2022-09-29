## In Context

---

### The shortest path between two points is the diversion

![A trois](slides/SimpleTransferAtrois.png)

---

## Diversions

- Nexus repository
- webDAV servers
- GitHub releases

---

## Maven 1/2

`~/.m2/settings.xml`

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
            https://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
        <server>
            <id>someid</id>
            <username>username</username>
            <password>super</password>
        </server>
    </servers>
</settings>
```

---

## Maven 2/2

`pom.xml`

```xml
<distributionManagement>
        <repository>
            <id>release</id>
            <url>https://nexus.qs.hcllabs.net/repository/maven-releases/</url>
        </repository>

        <snapshotRepository>
            <id>snapshots</id>
            <url>https://nexus.qs.hcllabs.net/repository/maven-snapshots/</url>
        </snapshotRepository>

        <site>
            <id>someid</id>
            <url>dav:http://sites.qs.hcllabs.net/maven-doc/project-keep/</url>
        </site>

    </distributionManagement>
```

`mvn deploy site:deploy`

Also via [ssh](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ssh-external.html)

---

## GitHub CLI

[https://cli.github.com/](https://cli.github.com/)

```bash
# Login with PAT from env
GITHUB_ENTERPRISE_TOKEN=$GIT_INCOMING_PSW
gh auth login --hostname github01.hclpnp.com \
              --with-token <<< "$GIT_INCOMING_PSW"
gh auth status --hostname github01.hclpnp.com
# Publish a release
    gh release create v1.1.3 ./release/*.* \
      -t "myApp release v1.1.3" \
      -n "Latest and greatest Version" \
      --target main
# Get the latest release
gh release download --pattern myApp --repo myOrg/myApp
```

---

### Github actions

[https://github.com/features/actions](https://github.com/features/actions)

`.github/workflows/off_we_go.yml`

```yaml
on:
  push:
    branches:
      -main
      -master
jobs:
  build-deploy:
    nanme: Build on deploy
    runs-on: ubuntu-latest
    steps:
      -name: build
       # Commands to build stuff go here
      -name: test
       # Test commands go here
```

---

```yaml
- name: deploy to Production
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.PRODUCTION_HOST }}
    username: ${{ secrets.PRODUCTION_USER }}
    key: ${{ secrets.PRODUCTION_KEY }}
    script: ~/bin/update-production
```

---

![GitHubSecrets](slides/githubactions.png)

---

### Jenkins

[https://plugins.jenkins.io/publish-over-ssh/](https://plugins.jenkins.io/publish-over-ssh/)

![Jenkins SSH](slides/jenkinsssh.png)

There are [alternatives](https://plugins.jenkins.io/ui/search?sort=relevance&categories=&labels=&view=Tiles&page=1&query=ssh)

Speak to your friendly ~neighbourhood spider~ Jenkins manager
