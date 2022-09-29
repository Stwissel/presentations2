# ssh & sftp

Get this right, live will be good

(you heard that before)

---

## Moving parts

- ssh install
- key generation
- `~/.ssh/config`
- ssh agent

```bash
ssh-keygen -t rsa -b 4096 \
   -C " key for john@doe.xyz" \
   -f ~/.ssh/id_johndoe
```

---

## Understanding keys

- [Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
- [macOS](https://rderik.com/blog/understanding-ssh-keys-and-using-keychain-to-manage-passphrase-on-macos/)
- [ssh Agent](https://www.ssh.com/academy/ssh/agent)

---

### ~/.ssh/config

```bash
Host *
    UseKeychain yes
    AddKeysToAgent yes

Host fancy.io dragon
    Hostname 135.29.255.110
    User mortaluser
    IdentitiesOnly yes
    IdentityFile ~/.ssh/dragon_rsa
```

---

## On the server 1/2

- copy your public key onto the server
- add it to `authorized_keys`
- ensure correct permissions!

### Do **NOT** logout

until you have successfully tested login<br /> in **another** terminal window!

---

## On the server 2/2

```bash
cd ~/.ssh
cp authorized_keys authorized_keys.backup
cat ~/your_public_key.pub >> authorized_keys
chmod 600 *.*
chmod 700 ~/.ssh
```

## Command cheat sheet

```bash
# Simple copy of a file to my home directory
# using the alias from .ssh/config
scp mylocal.file mortaluser@dragon:uploaded.file

```

[https://man7.org/linux/man-pages/man1/scp.1.html](https://man7.org/linux/man-pages/man1/scp.1.html)

---

## rsync

scp for grownups and, [kinda](https://www.minitool.com/backup-tips/rsync-windows.html) for Windows too

<br /><br />
([who](https://github.com/laurent22/rsync-time-backup) needs [TimeMachine](https://samuelhewitt.com/blog/2018-06-05-time-machine-style-backups-with-rsync))

---

rsync works local and across networks,<br />use network aliases like scp

```bash
# a = recursive all
# v = verbose
# z = compress
rsync -avz dist/ user@remote:~/upload/dist
# same
rsync -avz dist user@remote:~/upload
```

### Use at your own risk

```bash
rsync -avz --delete-before dist/ user@remote:~/upload
```

---

## Filezilla

| ![filezilla](slides/filezilla.png) | ![Cyberduck](slides/cyberduck.png) |
| ---------------------------------- | ---------------------------------- |

[filezilla-project.org](https://filezilla-project.org)

---

## curl

![curl](slides/curl.png)
