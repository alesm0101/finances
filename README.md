# Info

A simple RESTful API working with mongo and express

## Dependencies:
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

You can use restlet client for Chrome to test using http://localhost:3200/api/myfinances/ as url:

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

It will be create a database called 'finances' and a collection 'users'

To check if is working you can call again using the method GET.