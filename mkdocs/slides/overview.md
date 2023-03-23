- MkDocs material
- light CSS customization
- shared docker image<br />docker.qs.hcllabs.net/hclcom/mkdocs

```bash
#!/bin/bash
# Run MKDocs in current directory
if [ -f "mkdocs.yml" ] && [ -d "docs" ]; then
   echo Found MKDocs settings
else
   echo initializing MKDocs
   docker run --rm -it -v ${PWD}:/docs docker.qs.hcllabs.net/hclcom/mkdocs:m1 -q new .
fi
# actual run
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs docker.qs.hcllabs.net/hclcom/mkdocs:m1 $1 $2 $3
```

---

## Extensions

```yaml
# Markdown Extensions
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - attr_list
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.emoji:
      emoji_index: !!python/name:materialx.emoji.twemoji
      emoji_generator: !!python/name:materialx.emoji.to_svg
  - pymdownx.snippets:
      base_path:
        - 'docs/.snippets'
  - footnotes
```

---

## Plugins

```yaml
plugins:
  - search
  - awesome-pages
  - section-index
  - tags
  - markdownextradata
```
