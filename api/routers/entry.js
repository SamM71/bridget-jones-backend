const { Router } = require("express");

const entryController = require("../controllers/entry")

const entryRouter = Router();

entryRouter.get("/", entryController.index);

module.exports = entryRouter;