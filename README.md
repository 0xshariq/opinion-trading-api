# Options Trading API - Documentation

## Overview
This API provides endpoints for authentication, market data retrieval, and order management for options trading. It supports secure API key authentication and real-time WebSocket connections.

---

## Authentication

### **Register a User**
**Endpoint:** `POST /api/v1/users/register`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "apiKey": "your-generated-api-key"
  }
  ```

### **Login User**
**Endpoint:** `POST /api/v1/users/login`
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "apiKey": "your-api-key"
  }
  ```

---

## Market Data

### **Get Market Price for a Symbol**
**Endpoint:** `GET /api/v1/market/price/:symbol`
- **Example:** `/api/v1/market/price/AAPL`
- **Response:**
  ```json
  {
    "symbol": "AAPL",
    "price": 150.25
  }
  ```

---

## Orders

### **Place an Order**
**Endpoint:** `POST /api/v1/orders/place`
- **Request Headers:**
  ```json
  {
    "x-api-key": "your-api-key"
  }
  ```
- **Request Body:**
  ```json
  {
    "symbol": "AAPL",
    "quantity": 10,
    "orderType": "buy"
  }
  ```
- **Response:**
  ```json
  {
    "orderId": 100001,
    "symbol": "AAPL",
    "quantity": 10,
    "orderType": "buy",
    "status": "Success",
    "timestamp": "2025-03-05T12:00:00Z"
  }
  ```

### **Get Order List**
**Endpoint:** `GET /api/v1/orders/list`
- **Request Headers:**
  ```json
  {
    "x-api-key": "your-api-key"
  }
  ```
- **Response:**
  ```json
  {
    "orders": [
      {
        "orderId": 100001,
        "symbol": "AAPL",
        "quantity": 10,
        "orderType": "buy",
        "status": "Success",
        "timestamp": "2025-03-05T12:00:00Z"
      },
      {
        "orderId": 100002,
        "symbol": "GOOGL",
        "quantity": 5,
        "orderType": "sell",
        "status": "Pending",
        "timestamp": "2025-03-05T12:05:00Z"
      }
    ]
  }
  ```

---


## Authentication via API Key
API key can be passed via headers or query parameters:
- **Headers:** `x-api-key: your-api-key`
- **Query Parameter:** `?key=your-api-key`

---

## Rate Limiting
- Each user is limited to **100 requests per 15 minutes**.

---

## Error Handling
Standard error responses:
```json
{
  "error": "Invalid API Key"
}
```
```json
{
  "error": "Order placement failed"
}
```

---

## Contact
For support, contact `khanshariq92213@gmail.com`.

