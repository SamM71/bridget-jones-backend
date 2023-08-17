const db = require("../database/connect");

class Entry {

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.category = data.category;
    this.created = data.created;
  }

  static async index() {
    const response = await db.query("SELECT * FROM entries ORDER BY createD;");
    if (response.rows.length === 0) {
      throw new Error("No entries available.");
    }
    return response.rows.map(e => new Entry(e))
  }

  static async show(id) {
    const response = await db.query("SELECT * FROM entries WHERE id = $1;", [id]);
    
    if (response.rows.length != 1) {
      throw new Error("Unable to locate diary entry");
    }
    return new Entry(response.rows[0])
  }

}

module.exports = Entry;