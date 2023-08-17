const Entry = require("../models/Entry")

async function index(req, res) {
  try {
    const entries = await Entry.index();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const entry = await Entry.show(id);
    res.status(200).json(entry);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

async function getByCategory(req, res) {
  try {
    const category = req.params.category;
    const entries = await Entry.getByCategory(category);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function create(req, res) {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const entry = await Entry.show(id);
    const result = await entry.update(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

async function destroy(req, res) {
  try {
    console.log("object");
    const id = req.params.id;
    const entryToDelete = await Entry.show(id);
    console.log(entryToDelete);
    await entryToDelete.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

module.exports = {
  index,
  show,
  getByCategory,
  create,
  update,
  destroy
}