# MySQL_NodeJs

**POST USER**

- **URL**

  <http://localhost:3000/add_user>

- **Method**

  POST

- **Data Params**

  - name

  - dob

  - address

  - description

- **Success Response**

  ```json
  {
    "id": 1,
    "name": "arfafa",
    "dob": "1999-08-02",
    "address": "Bali",
    "description": "Asal Kota"
  }
  ```

  **GET USER**

- **URL**

  <http://localhost:3000/>

- **Method**

  GET

- **Success Response**

  ```json
  [
    {
      "id": 1,
      "name": "arfafa",
      "dob": "1999-08-02",
      "address": "Bali",
      "description": "Asal Kota"
    }
  ]
  ```

  **PUT USER**

- **URL**

  <http://localhost:3000/update_user/:id>

- **Method**

  PUT

  **Params**

  - id

- **Data Params**

  - name

  - dob

  - address

  - description

- **Success Response**
  ```json
  {
    "id": 1,
    "name": "arfafa",
    "dob": "1999-08-02",
    "address": "Bali",
    "description": "Asal Kota"
  }
  ```

**DELETE USER**

- **URL**

  <http://localhost:3000/delete_user/:id>

- **Method**

  DELETE

  **Params**

  - id

- **Success Response**
  ```json
  {
    "msg": "User Deleted"
  }
  ```
