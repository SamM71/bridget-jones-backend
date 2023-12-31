const { Router } = require("express");

const entryController = require("../controllers/entry")

const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get("/:id", entryController.show);
entryRouter.get("/date/:created", entryController.getByDate);
entryRouter.get("/category/:category", entryController.getByCategory);
entryRouter.post("/", entryController.create);
entryRouter.patch("/:id", entryController.update);
entryRouter.delete("/:id", entryController.destroy);

module.exports = entryRouter;