# RESTful API with MongoDB

A simple **RESTful API** working with **MongoDB, Node and Express**

## Dependencies:
**MONGODB** -> No SQL server.

**NODE** ->  JavaScript run-time environment for executing JavaScript code server-side.

  **Mongoose** -> MongoDB validation, casting and business logic from backend.

  **Express** -> web application framework.

  **Middlewares:**
  * body-parser
  * method-override

## Quick Start

Please make sure that you have node and **mongodb** installed.

> To create the package.json:

```shell
npm init
```
```shell
npm install mongoose --save-dev
npm install express --save-dev
npm install body-parser --save-dev
npm install method-override --save-dev
```

> To install with package.json:

```shell
npm install
```
> Running Application

Firt start the mongo service

```shell
mongod
```

or

```shell
mongod --port 27017
```

Then run the application

```shell
node app.js
```

## Testing

You can use **Restlet Client** for Chrome to test using http://localhost:3200/api/myfinances/ as url:

> Example POST:

```shell
{
    "username": "admin",
    "fullName": "Administrator",
    "password": "123",
    "email": "test@gmail.com",
    "privileges": 1,
    "defaultCurrency": "usd"
}
```

It will be create a database called 'finances' and a collection 'users'.
To check if it is working you can call again using the method GET.

The API has suppport to PUT to update and DELETE to remove a specific document by id.

> Example url:

```shell
http://localhost:3200/api/myfinances/5a61e4615931560ab674fda1
```

## Credits

Diggo.cc