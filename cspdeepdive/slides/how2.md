# Lock them up

```bash
default-src 'none';
form-action 'none';
frame-ancestors 'none';
```

Note: statements belong into one line

---

## Report them

### [additional](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) HEADER(s) is/are required

```bash
Reporting-Endpoints: "csp-reports="/cspreports"
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }

Content-Security-Policy: …; report-to csp-reports

```

```bash
Reporting-Endpoints: csp-reports="/cspreports"
Content-Security-Policy: …; report-to csp-reports
```

```bash
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
Content-Security-Policy: …; report-to endpoint-1

```
