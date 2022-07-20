# Run from command line

e.g. AppScan

```bash
mvn --no-transfer-progress --errors com.hcl.security:appscan-maven-plugin:analyze \
-Dhttps.protocols=TLSv1.2 \
-DskipTests \
-DappId=$APPSCAN_CLOUD_ID \
-DappscanKey=$APPSCAN_CLOUD_USR \
-DappscanSecret=$APPSCAN_CLOUD_PSW
```
