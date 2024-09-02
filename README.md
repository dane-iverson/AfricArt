# AfricArt App

## Introduction

>AfricArt is an application that showcases one-of-a-kind artworks available for sale. The app does not offer a traditional shopping cart feature. Instead, interested users can submit an order request expressing their interest in purchasing a specific artwork. The request will be reviewed by an administrator who will then contact the user via email with pricing and further information. Users can browse through the curated collection of unique artworks, view detailed descriptions, and learn about the artists and their creative processes.

Click [here](https://africartfrontend.onrender.com/) to view deployed application.

## How to Use the App

1. **Frontend:** Users can explore the collection of one-of-a-kind artworks, view artwork details, and submit order requests if interested.

2. **Backend:** Administrators can review submitted order requests, as well as add, edit, update and delete artworks.

## Local Installation and Setup

### Requirements
* Node.js 
* MongoDB 

### Clone the Repository
1. Clone the repository to your local machine:

```
git clone <repository_url>
```

2. Navigate to the cloned repository:

```
cd <repository_name>
```

### Backend Setup

1. Navigate to the backend directory:

```
cd backend
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the backend directory with the following environment variables:

```
PORT=<your_port>
mongoDBURL=<your_mongodb_uri>
SECRET_TOKEN=<your_jwt_secret_token>
ADMIN_KEY=<your_admin_key>
```

* Replace <your_port> with a port of your choice.
* Replace <your_mongodb_uri> with your MongoDB connection URI.
* Replace <your_jwt_secret_token> with a secret key for JWT token generation.
* Replace <your_admin_key> with a key for creating admin users.

4. Start the backend server:

```
npm run start
```

### Frontend Setup

1. Navigate to the client directory:

```
cd client
```

2. Install dependencies:

```
npm install
```

3. Start the frontend server:

```
npm run start
```

4. The frontend server will start at http://localhost:5173. Visit the URL in your browser to use the app.

## Running Tests

* Before running tests for the frontend and backend, remove "type": "module" from the package.json files. This is required to run the tests successfully.

### Backend Tests

1. Navigate to the backend directory:

```
cd backend
```

2. Run the tests:

```
npm run test
```

### Frontend Tests
1. Navigate to the client directory:

```
cd client
```

2. Run the tests:

```
npm run test
```

## Security Measures

* **API Key Handling:** API keys and sensitive information are stored in a .env file, which is not included in the repository for security reasons. Make sure to create your own .env file and keep it private.

* **Password Hashing:** User passwords are securely hashed using the bcrypt library before being stored in the database. This ensures that even if the database is compromised, user passwords remain secure.

* **JWT Authentication:** User authentication is managed using JSON Web Tokens (JWT), which are signed using a secret token. Tokens are stored in HTTP-only cookies for security.

## Third-Party APIs

* **Axios:** Used for making HTTP requests in the frontend.
* **Multer:** Used for handling file uploads in the backend.
* **Bcrypt:** Used for hashing and comparing user passwords in the backend.
* **JWT:** Used for generating and verifying JSON Web Tokens in the backend.
* **Express:** The main web application framework used in the backend.
* **MongoDB:** The database system used for data storage.
* **Cors:** Enables cross-origin resource sharing in the backend.

## Conclusion

Follow the above instructions to set up and use the AfricArt app on your local machine. This README provides a comprehensive guide for users and developers to install, test, and run the app. Enjoy using the AfricArt app!