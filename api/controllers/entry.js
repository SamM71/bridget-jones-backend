const Entry = require("../models/Entry")

async function index (req, res) {
  try {
    const entries = await Entry.index();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function show (req, res) {
  try {
    const id = parseInt(req.params.id);
    const entry = await Entry.show(id);
    res.status(200).json(entry);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

module.exports = {
  index,
  show
}