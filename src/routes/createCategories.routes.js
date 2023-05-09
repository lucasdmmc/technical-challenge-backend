const { Router } = require('express');
const CategoriesController = require("../controllers/CategoriesController");

const categoriesController = new CategoriesController();
const createCategories = Router();

// Define a rota para acessar um registro específico de categoriesId
createCategories.post("/", categoriesController.create);

// Demais rotas...

module.exports = createCategories