const { Router } = require('express');

const CategoriesController = require("../controllers/CategoriesController")
const categoriesController = new CategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", categoriesController.index)

module.exports = categoriesRoutes;