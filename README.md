# Marvel Characters REST API

A modern, production-ready REST API for managing Marvel characters, built with Node.js, Express, TypeScript, MongoDB, and Mongoose. Designed for scalability, maintainability, and rapid development. Perfect for portfolio and real-world applications.

## 🚀 Tech Stack

-   **Node.js**
-   **Express**
-   **TypeScript**
-   **MongoDB**
-   **Mongoose**

## 📦 Features

-   Retrieve all Marvel heroes
-   Retrieve a single hero by MongoDB ID
-   Clean, modular codebase with best practices
-   Ready for deployment on Vercel or any Node.js platform

## 🛣️ API Endpoints

### Get All Heroes

-   **Endpoint:** `GET https://marvel-characters-five-gamma.vercel.app/api/v1/heroes/`
-   **Description:** Returns a list of all Marvel heroes.
-   **Example Response:**

```json
{
    "status": "success",
    "results": 2,
    "data": {
        "heroes": [
            {
                "_id": "662f1c2e7e1b2a001e8e4a1a",
                "realName": "Peter Parker",
                "nickname": "Spider-Man",
                "description": "Bitten by a radioactive spider..."
            },
            {
                "_id": "662f1c2e7e1b2a001e8e4a1b",
                "realName": "Tony Stark",
                "nickname": "Iron Man",
                "description": "Genius billionaire inventor..."
            }
        ]
    }
}
```

### Get Hero by Nickname

-   **Endpoint:** `GET https://marvel-characters-five-gamma.vercel.app/api/v1/heroes/:nickname`
-   **Description:** Returns a single hero by their MongoDB ObjectId.
-   **Example:**
    -   `GET https://marvel-characters-five-gamma.vercel.app/api/v1/heroes/iron man`
-   **Example Response:**

```json
{
    "status": "success",
    "data": {
        "hero": {
            "_id": "662f1c2e7e1b2a001e8e4a1a",
            "realName": "Tony Stark",
            "nickname": "Iron Man",
            "description": "Bitten by a radioactive spider..."
        }
    }
}
```