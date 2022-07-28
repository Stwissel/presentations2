# Deploy Spotless

```xml
                <plugin>
                    <groupId>com.diffplug.spotless</groupId>
                    <artifactId>spotless-maven-plugin</artifactId>
                    <version>2.22.8</version>
                    <executions>
                        <execution>
                            <goals>
                                <goal>apply</goal>
                            </goals>
                        </execution>
                    </executions>
                    <configuration>
                        <!-- See next slide -->
                    </configuration>
                </plugin>
```

---

### 2/3

```xml
                    <configuration>
                        <formats>
                            <format>
                                <!-- Markdown, JSON and gitignore -->
                                <includes>
                                    <include>*.md</include>
                                    <include>*.json</include>
                                    <include>.gitignore</include>
                                </includes>
                                <trimTrailingWhitespace />
                                <endWithNewline />
                                <indent>
                                    <spaces>true</spaces>
                                    <spacesPerTab>2</spacesPerTab>
                                </indent>
                            </format>
                        </formats>
                    </configuration>
```

---

### 3/3

```xml
                    <configuration>
                        <!-- ECLIPSE Java format -->
                        <java>
                            <toggleOffOn />
                            <importOrder>
                                <file>${maven.multiModuleProjectDirectory}/spotless.importorder</file>
                            </importOrder>
                            <removeUnusedImports />
                            <eclipse>
                                <file>${maven.multiModuleProjectDirectory}/eclipse-java-keep-style.xml</file>
                            </eclipse>
                        </java>
                    </configuration>
```

---

### importOrder

```bash
#Organize Import Order
#Fri Mar 18 19:47:36 SGT 2022
0=java
1=javax
2=com
3=org
```

https://www.wissel.net/blog/2021/12/spotless-code-with-a-git-hook.html
