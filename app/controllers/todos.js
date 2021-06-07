const Todo = require("../models").Todo;
const TodoItem = require("../models").TodoItem;
const consumeError = require("../functions/consumeError");

module.exports = {
  async index(req, res) {
    try {
      let todos = await Todo.findAll();
      return todos;
    } catch (error) {
      consumeError(error);
    }
  },

  async retrieve(req, res) {
    try {
      let todo = await Todo.findByPk(req.params.todoId, {
        include: [
          {
            model: TodoItem,
            as: "todoItems",
          },
        ],
      });
      if (!todo) {
        consumeError({
          message: "Todo Not Found",
          code: 404,
        });
      }
      return todo;
    } catch (error) {
      consumeError(error);
    }
  },

  async create(req, res) {
    try {
      let todo = await Todo.create({
        title: req.body.title,
      });
      return todo;
    } catch (error) {
      consumeError(error);
    }
  },

  async update(req, res) {
    try {
      let todo = await Todo.findByPk(req.params.todoId);

      if (!todo) {
        consumeError({
          message: "Todo Not Found..",
          code: 404,
        });
      }

      todo = await todo.update(req.body, { 
        fields: Object.keys(req.body)
      });

      return todo;
    } catch (error) {
      consumeError(error);
    }
  },

  async destroy(req, res) {
    try {
      let todo = await Todo.findByPk(req.params.todoId);

      console.log("delete", todo);

      if (!todo) {
        consumeError({
          message: "Todo Not Found..",
          code: 404,
        });
      }

      await todo.destroy();
      return {};
    } catch (error) {
      consumeError(error);
    }
  },
};
