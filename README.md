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
    "id": "ef4df21c-895b-43f0-97cf-cbedc935ef5f",
    "title": "The Legend of Code",
    "platform": "PC",
    "genre": "Adventure",
    "publisher": "OpenAI Studios",
    "isPhysical": false,
    "isDigital": true,
    "release": 2024
  }
]
```

---

### 🔍 Get a single game

**GET** `/api/v1/games/:id`

#### Response – 200 OK
```json
{
  "id": "ef4df21c-895b-43f0-97cf-cbedc935ef5f",
  "title": "The Legend of Code",
  "platform": "PC",
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "isPhysical": false,
  "isDigital": true,
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
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "isPhysical": false,
  "isDigital": true,
  "release": 2024
}
```

#### Response – 201 Created
```json
{
  "id": "ef4df21c-895b-43f0-97cf-cbedc935ef5f",
  "title": "The Legend of Code",
  "platform": "PC",
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "isPhysical": false,
  "isDigital": true,
  "release": 2024
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
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "isPhysical": false,
  "isDigital": true,
  "release": 2025
}
```

#### Response – 200 OK
```json
{
  "id": "ef4df21c-895b-43f0-97cf-cbedc935ef5f",
  "title": "The Legend of Code Remastered",
  "platform": "PC",
  "genre": "Adventure",
  "publisher": "OpenAI Studios",
  "isPhysical": false,
  "isDigital": true,
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
