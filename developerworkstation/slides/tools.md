# Tools & Scripts

You own you own experience

(and love the command line)

---

## Tools

- [GIT](https://git-scm.com/) (and a [GUI](https://www.sourcetreeapp.com))
- [CURL](https://curl.se)
- [jq](https://stedolan.github.io/jq/)
- [Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- [mc](https://midnight-commander.org)
- [Postman](https://www.postman.com)
- [Fiddler](https://www.telerik.com/fiddler) or [Charles Proxy](https://www.charlesproxy.com) ($!)

---

## Container

- [Rancher Desktop](https://rancherdesktop.io)
- ~Docker Desktop~

There are more Kubernetes Options: k3s, microKS, multipass....

---

## Scripts

- Have a script directory on your path (`~/bin`)
- Automate repetitive Tasks

---

### Sample: Pull all repos

```bash
#!/bin/bash
# Pull all repos below the current working directory

do_the_sync() {
  for f in *; do
      if [ -d $f -a ! -h $f ]; then
         cd -- "$f";
         if [ -d ".git" ]; then
            curBranch=$(git branch --show-current)
            mainBranch=nn
            echo "Working on $f";
            if [ "`git branch --list main`" ]; then
              mainBranch=main
            else
              mainBranch=master
            fi
            remoteBranch=$(git rev-parse --abbrev-ref ${mainBranch}@{upstream})
            IFS='/' read -r remoteSrv string <<< "$remoteBranch"
            echo "working on $mainBranch tracking $remoteSrv"
            git fetch --all
            git pull $remoteSrv
            git checkout $curBranch
         fi
         cd ..
      fi;
  done;
};

do_the_sync
echo "DONE!"
```
