# It should be easy

![It should be easy](slides/SimpleTransferSolo.png)

---

## Obstacles

- Protocols
- Ports
- Permissions

---

## Protocols (1/2)

| Port(s)     | Name       | Remark                                        |
| ----------- | ---------- | --------------------------------------------- |
| 445 (139)   | smb (cifs) | prevalent Windows, mostly blocked             |
| 21          | ftp        | You use it, a kitten will die                 |
| 22          | ssh (sftp) | Workhorse of file transfer, use with ssh keys |
| 6881 - 6889 | BitTorrent | mostly blocked                                |

---

## Protocols (122)

| Port(s) | Name       | Remark                      |
| ------- | ---------- | --------------------------- |
| 80      | http       | a unicorn will die          |
| 443     | https      | a custom web sever could do |
|         | WebDAV     | http for grownups           |
|         | s3         | Amazon object store         |
|         | sharepoint | (for fileuploads)           |
|         | dropbox    | also 7600, 17603, 17500     |
|         | google     | cloud storage               |

---

## Permissions

- Do you have credentials (`.ssh` config)
- Can you start and/or access the server?
- What permission do you have in your target directory?
- Are the ports open?
  - traceroute
  - ping
  - telnet
