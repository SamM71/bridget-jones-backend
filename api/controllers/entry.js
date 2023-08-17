const Entry = require("../models/Entry")

async function index (req, res) {
  try {
    const entries = await Entry.getAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = {
  index
}