const TodoItem = require("../models").TodoItem;
const consumeError = require("../functions/consumeError");

module.exports = {
 
  async create(req, res) {
    try {
      let todoItem = await TodoItem.create({
        content: req.body.content,
        todoId: req.params.todoId,
      });
      return todoItem;
    } catch (error) {
      consumeError(error);
    }
  },

  async update(req, res) {
    try {
      let todoItem = await TodoItem.find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      });

      if (!todoItem) {
        consumeError({
          message: "TodoItem Not Found..",
          code: 404,
        });
      }

      todoItem = await todoItem.update(req.body, { 
        fields: Object.keys(req.body)
      });

      return todoItem;
    } catch (error) {
      consumeError(error);
    }
  },

  async destroy(req, res) {
    try {
      let todoItem = await TodoItem.findByPk({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      });

      console.log("delete", todoItem);

      if (!todoItem) {
        consumeError({
          message: "TodoItem Not Found..",
          code: 404,
        });
      }

      await todoItem.destroy();
      return {};
    } catch (error) {
      consumeError(error);
    }
  },
};
