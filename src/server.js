require("express-async-error")
const database = require("./database/sqlite")
const AppError = require("./utils/AppError");
const cors = require("cors");

const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)

database();

app.use((  error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log("Server is listening on port " + PORT))