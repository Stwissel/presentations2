## [curl](https://curl.se/)

Know your parameters

- `-v --verbose` Spit out details, good for trouble shooting
- `-X --request [HTTP VERB]` trigger -> POST PUT PATCH DELETE
- `-k --insecure` ignore TLS error (for local development)
- `--retry` try again (use with [--retry-delay](https://curl.se/docs/manpage.html#--retry-delay)

... and all the hundreds of their friends

---

### TLS tips

- Public: always use LetsEncrypt
- Internal: **NEVER** use a self signed cert
- Build your own CA: https://www.wissel.net/blog/2019/10/create-your-own-ca.html
- Edit your `hosts` file
