require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const basicAuth = require("_helpers/basic-auth");
const errorHandler = require("_helpers/error-handler");
const users = require("./users/users.controller");
const fs = require('fs');

let getData = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
//app.use('/users', require('./users/users.controller'));

app.get("/", users.getAll);
app.post("/authenticate", users.authenticate);
app.post("/getProfile", users.getProfile);
app.post("/getChat",users.getChat);
app.post("/getUsers",users.getUsers);
app.post("/getInbox",users.getInboxData);
app.post("/getDashboard",users.getDashboardData);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? 80 : 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
});
