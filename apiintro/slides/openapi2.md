## OpenAPI

- json or yaml
- current: 3.1 -> compatible to JSON schema

```yaml
get:
  parameters:
    - name: id
      description: ID of pet to fetch
      schema:
        format: int64
        type: integer
      in: path
      required: true
```

---

```yaml
responses:
  '200':
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Pet'
    description: pet response
security:
  - jwt: []
operationId: findPetById
description: 'Returns a pet based on a single ID, when the user has access'
x-eov-operation-id: 'pets#pet'
x-eov-operation-handler: routes/pets
```

---

## OpenAPI components

- OperationId
- Path & Parameter
- Constrains
- Documentation
- `x-`tensions

---
