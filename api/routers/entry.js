const { Router } = require("express");

const entryController = require("../controllers/entry")

const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get("/:id", entryController.show)

module.exports = entryRouter;