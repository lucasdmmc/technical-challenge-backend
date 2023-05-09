const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CategoriesController {
  async create(request, response) {
    const { name } = request.body;
  
    try {
      // Verifica se a categoria já existe
      const categoryExists = await knex('categories').where({ name }).first();
  
      if (categoryExists) {
        // Dispara um erro caso a categoria já exista
        throw new AppError("Category already exists");
      }
  
      // Insere uma nova categoria no banco de dados
      const category = await knex('categories').insert({ name }).returning(['id', 'name']);
      
      // Retorna a categoria recém-criada
      return response.json({ category });
    } catch (err) {
      // Captura o erro e retorna uma mensagem de erro
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
  
      // Faz uma consulta no banco de dados para buscar o registro pelo id
      const category = await knex("categories").where({ id }).first();
  
      // Retorna o registro encontrado
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
}

module.exports = CategoriesController;