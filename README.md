# expressjs-gaming-api

This API provides CRUD endpoints for managing **Game** resources.  
It is built with **Express**, **Prisma**, and **TypeScript**.

## Endpoints

### 📄 Get all games

**GET** `/api/v1/games`

#### Description
Returns a list of all stored games.

#### Response – 200 OK
```json
[
  {
    "id": "1",
    "title": "The Legend of Code",
    "platform": "PC",
    "isPhysical": false,
    "isDigital": true,
    "genre": "Adventure",
    "publisher": "OpenAI Studios",
    "release": 2024,
    "href": "/api/v1/games/1"
  }
]
```

---

### 🔍 Get a single game

**GET** `/api/v1/games/:id`

#### Response – 200 OK
```json
{
  "id": "1",
  "title": "The Legend of Code",
  "platform": "PC",
  "isPhysical": false,
  "isDigital": true,
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "release": 2024
}
```

#### Response – 404 Not Found
```json
"GAME_NOT_FOUND"
```

---

### ➕ Create a game

**POST** `/api/v1/games`

#### Middleware
- `validateGameBody`

#### Request Body
```json
{
  "title": "The Legend of Code",
  "platform": "PC",
  "isPhysical": false,
  "isDigital": true,
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "release": 2024
}
```

#### Response – 201 Created
- The **Location** header contains the URL of the newly created resource.

```json
{
  "id": "1",
  "title": "The Legend of Code",
  "platform": "PC",
  "isPhysical": false,
  "isDigital": true,
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "release": 2024,
  "href": "/api/v1/games/1"
}
```

---

### ✏️ Update a game

**PUT** `/api/v1/games/:id`

#### Middleware
- `validateGameBody`

#### Request Body
```json
{
  "title": "The Legend of Code Remastered",
  "platform": "PC",
  "isPhysical": false,
  "isDigital": true,
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "release": 2025
}
```

#### Response – 200 OK
```json
{
  "id": "1",
  "title": "The Legend of Code Remastered",
  "platform": "PC",
  "isPhysical": false,
  "isDigital": true,
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "release": 2025
}
```

#### Response – 404 Not Found
```json
"GAME_NOT_FOUND"
```

---

### 🗑️ Delete a game

**DELETE** `/api/v1/games/:id`

#### Response – 204 No Content
_No response body_

---

## Error Handling

- Non-existing routes return **404 Not Found**
- Validation errors are handled by `validateGameBody`

---

## Server Startup

```bash
npm run dev
```
