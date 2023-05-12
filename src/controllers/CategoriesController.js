const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CategoriesController {
  async create(request, response) {
    try {
      const { name } = request.body;
      const categoryExists = await knex('categories').where({ name }).first();
  
      if (categoryExists) {
        throw new AppError("Category already exists");
      }

      const category = await knex('categories').insert({ name }).returning(['id', 'name']);
      
      return response.json({ category });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
  
  async index(request, response) {
    const categories = await knex.select("*").from("categories");

    return response.json(categories);
  }

  async show(request, response) {
    try {
      const { id } = request.params;
  
      const category = await knex("categories").where({ id }).first();
  
      return response.json({ category });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('categories').where({ id }).delete();

    return response.status(204).send();
  }

  async update(request, response) {
    try {
      const { name } = request.body;
      const { id } = request.params;
      
      const categoryExists = await knex('categories').where({ id }).first();
        
      if (!categoryExists) {
        return response.status(404).json({ error: "Category not found" });
      }
    
      await knex('categories').where({ id }).update({ name });
    
      return response.status(200).json({ message: "Category updated successfully" });
    
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }
}

module.exports = CategoriesController;