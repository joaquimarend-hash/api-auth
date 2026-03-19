# Documento para mostrar os *End Points* do http




## End Point **GET**:

### Request:
`GET /user`

```json
[
  {
    "id": 1,
    "name": "Thiago Sliva",
    "email": "tiago2@gmail.com",
    "createdAt": "2026-03-12T17:43:22.194Z"
  },
  {
    "id": 2,
    "name": "Joao Sliva",
    "email": "Joao@gmail.com",
    "createdAt": "2026-03-12T17:43:38.545Z"
  },
  {
    "id": 3,
    "name": "Giovana Sliva",
    "email": "giovana@gmail.com",
    "createdAt": "2026-03-12T18:47:06.030Z"
  }
]
```

### Request:
`GET /user/2`

```json
[
  {
    "id": 2,
    "name": "Joao Sliva",
    "email": "Joao@gmail.com",
    "createdAt": "2026-03-12T17:43:38.545Z"
  }
]
```
---

## End Point **POST**:

### Request:
`POST /user`

```json
[
  {
    "id": 4,
    "name": "Josias Sliva",
    "email": "Joisasos@gmail.com",
    "createdAt": "2026-03-12T17:43:22.194Z"
  }
]
```

---
## End Point **PUT**:

### Request:
`PUT /user/4`

```json
[
  {
    "id": 4,
    "name": "Josias Rocha",
    "email": "JosiasR@gmail.com",
    "createdAt": "2026-03-12T17:43:22.194Z"
  }
]
```

---
## End Point **DELETE**:

### Request:
`DELETE /user4`

```json
[
  "User Deletado"
]
```

