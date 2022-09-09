# git

all code is local

---

## git components

- git command line
- a [git client](https://www.sourcetreeapp.com) (optional)
- [git lense](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (VSCode, optional)

---

## git keys

- **SSH**: Access github public / private securely
- **PGP**: Sign your commits

[Manage keys on GitHub](https://github.com/settings/keys)

---

## Hooks

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
# Activate Java 18
export JAVA_HOME=`/usr/libexec/java_home -v 18`
/opt/homebrew/bin/mvn spotless:apply -Dspotless.check.skip=false -DspotlessFiles=$list

```
