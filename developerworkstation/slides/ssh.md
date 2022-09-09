# ssh & pgp

Access GIT and sign your work

---

## Moving parts

- ssh & pgp install
- key generation
- `~/.ssh/config`
- git config
- ssh agent

```bash
ssh-keygen -t rsa -b 4096 -C " key for john@doe.xyz" -f ~/.ssh/id_johndoe
gpg --default-new-key-algo rsa4096 --gen-key
```

---

## Understanding keys

- [Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
- [macOS](https://rderik.com/blog/understanding-ssh-keys-and-using-keychain-to-manage-passphrase-on-macos/)
- [ssh Agent](https://www.ssh.com/academy/ssh/agent)
- [Code signing](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)

```bash
git commit -S -m "your commit message"
```

---

### ~/.ssh/config

```bash
Host *
    UseKeychain yes
    AddKeysToAgent yes

Host fancy.io dragon
    Hostname 135.29.255.110
    User root
    IdentitiesOnly yes
    IdentityFile ~/.ssh/dragon_rsa
```
