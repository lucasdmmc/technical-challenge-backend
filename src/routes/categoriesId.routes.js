const express = require("express");
const CategoriesController = require("../controllers/CategoriesController");

const categoriesController = new CategoriesController();
const categoriesId = express.Router();

// Define a rota para acessar um registro específico de categoriesId
categoriesId.get("/", categoriesController.show);

// Demais rotas...

module.exports = categoriesId;