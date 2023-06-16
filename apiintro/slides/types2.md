## Explaining the result

### (if it isn't 200/201)

[RFC7807](https://datatracker.ietf.org/doc/html/rfc7807)

```json
{
  "type": "https://myapp.com/problem/RFC3986",
  "title": "You screwed up",
  "status": 400
}
```

also: detail, instance, extensions

---

## In practise

- servers often replace 201 / 204 with 200
- RFC7807 not found in the wild
- "Pure" REST manipulates objects only, not trigger actions

---

## Security - Who's calling

- REST is (supposed to be) stateless
- Basic auth is frauwned upon
- Bearer token are all the rage

```bash
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Im15a2V5In0.
eyJpc3MiOiJDTj1mcmFzY2F0aS5wcm9qZWN0a2VlcC5pby9PPVByb2pl
Y3RLZWVwL0Y9RnJhc2NhdGlEZW1vIiwic3ViIjoiQ049RG9jdG9yIE5v
dGVzL089UHJvamVjdEtlZXAiLCJpYXQiOjE2ODY4MjE3OTIsImV4cCI6
MTY4NjgyODk5MiwiYXVkIjoiRG9taW5vIiwiQ04iOiJDTj1Eb2N0b3Ig
Tm90ZXMvTz1Qcm9qZWN0S2VlcCIsInNjb3BlIjoiTUFJTCAkREFUQSAk
REVDUllQVCAkU0VUVVAiLCJlbWFpbCI6ImRvY3Rvci5ub3Rlc0Bwcm9qZWN0a2VlcC5pbyJ9.ZtKcidTD_VMHGLD_zEdMTrJugioESCUD0mkUJB3WChWCjUqN_C1LqKslgDa1wHjeQMQnyl4jf
CRdxnlXne8JpS3rzpNHk9ByyFe1mT0FWR4i59MqZbyOtoMchft3O_afOBvpVsSvWkDcIIPBkb
WtA_HVG1ZfUSqvapr9fBRjVmy2IlTcBUUHjKxYa7Dbw5L-f-6LA9USAw9knNUl8CvwGLiDYfs
24hkhCmUV-VdNB8zO4Br0DNneMIqS2-LPDrO6sos-pAq3GMQ2y3wU14MenNPdtqOclLyPbG3C
iyAXzPevRqw-UMidl4CNFj50Xf7OVuJHuwKFWq4SUkWtevBxt
```

---

## Bearer Token

- created by Identity Provider (IdP)
- opaque or JWT
- Access Token & Refresh token
- OAuth & OpenId Connect (OICD)

---

## Bearer Token are issued by IdP

- Keycloak
- (Azure) Active Directory
- Okta
- Auth0
- Domino REST API
