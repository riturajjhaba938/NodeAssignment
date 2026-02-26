# E-Commerce Product API

Build a REST API using **Express.js** that manages product data for an e-commerce platform using an in-memory JSON array.

## Setup Instructions

1. Clone or download the repository.
2. Navigate into the `ecommerce-product-api` folder.
3. Install dependencies by running:
   ```bash
   npm install
   ```
4. Start the server by running:
   ```bash
   npm start
   ```
5. The API will be available at `http://localhost:3000`.

## Available Routes

### GET Routes

#### 1. GET `/products`
Returns all products in the in-memory array.

- **URL:** `/products`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** An array of product objects.

#### 2. GET `/products/:id`
Returns a single product by its ID.

- **URL:** `/products/:id`
- **Method:** `GET`
- **URL Params:**
  - `id=[integer]`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** The product object.
- **Error Response:**
  - **Code:** `404 Not Found`
  - **Content:** `{ "message": "Product not found" }`

#### 3. GET `/products/category/:categoryName`
Returns products filtered by the given category name (case-insensitive).

- **URL:** `/products/category/:categoryName`
- **Method:** `GET`
- **URL Params:**
  - `categoryName=[string]`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** An array of matching product objects (empty if none match).

### POST Route

#### 4. POST `/products`
Adds a new product to the list. An auto-generated `id` will be assigned to the product.

- **URL:** `/products`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 2999,
    "stock": 20,
    "rating": 4.6
  }
  ```
- **Success Response:**
  - **Code:** `201 Created`
  - **Content:** The newly created product object.

### PUT Routes

#### 5. PUT `/products/:id`
Replaces the entire product object (except the ID).

- **URL:** `/products/:id`
- **Method:** `PUT`
- **URL Params:**
  - `id=[integer]`
- **Body:** All fields (`name`, `category`, `price`, `stock`, `rating`) to replace the existing values.
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** The updated product object.
- **Error Response:**
  - **Code:** `404 Not Found`
  - **Content:** `{ "message": "Product not found" }`

#### 6. PUT `/products/:id/stock`
Updates only the stock value of a specific product.

- **URL:** `/products/:id/stock`
- **Method:** `PUT`
- **URL Params:**
  - `id=[integer]`
- **Body:**
  ```json
  {
    "stock": 60
  }
  ```
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** The updated product object.
- **Error Response:**
  - **Code:** `400 Bad Request`
  - **Content:** `{ "message": "Stock value is required" }`   OR
  - **Code:** `404 Not Found`
  - **Content:** `{ "message": "Product not found" }`

#### 7. PUT `/products/:id/price`
Updates only the price field of a specific product.

- **URL:** `/products/:id/price`
- **Method:** `PUT`
- **URL Params:**
  - `id=[integer]`
- **Body:**
  ```json
  {
    "price": 1299
  }
  ```
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** The updated product object.
- **Error Response:**
  - **Code:** `400 Bad Request`
  - **Content:** `{ "message": "Price value is required" }`  OR
  - **Code:** `404 Not Found`
  - **Content:** `{ "message": "Product not found" }`
