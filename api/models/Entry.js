const db = require("../database/connect");

class Entry {

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.category = data.category;
    this.created = data.created;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM entries ORDER BY createD;");
    if (response.rows.length === 0) {
      throw new Error("No entries available.");
    }
    return response.rows.map(e => new Entry(e))
  }

}

module.exports = Entry;