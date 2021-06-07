var express = require("express");
var router = express.Router();
//var validate = require("validate.js");
var executeForResult = require("../app/functions/executeForResult");
var executeForResponse = require("../app/functions/executeForResponse");

const todosController = require("../app/controllers").todos;
const todoItemsController = require("../app/controllers").todoItems;
const createtodoRequest = require("../app/requests/createtodo");
const createtodoitemRequest = require("../app/requests/createtodoitem");
const todoCollectionResponse = require("../app/responses/todoCollection");
const todoResourceResponse = require("../app/responses/todoResource");


router.get(
  "/todos",
  executeForResult(todosController.index,"todoList"),
  executeForResponse(todoCollectionResponse)
);

router.get(
  "/todos/:todoId",
  executeForResult(todosController.retrieve),
  executeForResponse(todoResourceResponse)
);

router.post(
  "/todos",
  createtodoRequest,
  executeForResult(todosController.create),
  executeForResponse(todoResourceResponse)
);
router.post(
  "/todos/:todoId/items",
  createtodoitemRequest,
  executeForResult(todoItemsController.create),
  executeForResponse(todoResourceResponse)
);

router.put("/todos/:todoId", executeForResponse(todosController.update));
router.put("/todos/:todoId/items/:todoItemId", executeForResponse(todoItemsController.update));

router.delete("/todos/:todoId", executeForResponse(todosController.destroy));
router.delete("/todos/:todoId/items/:todoItemId", executeForResponse(todoItemsController.destroy));



module.exports = router;
