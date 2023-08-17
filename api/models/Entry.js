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
    const response = await db.query("SELECT * FROM entries ORDER BY created;");
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

  static async create(data) {
    const { title, content, category } = data;
    const response = await db.query(
      "INSERT INTO entries (title, content, category) VALUES ($1, $2, $3) RETURNING *;",
      [title, content, category]
    );
    return new Entry(response.rows[0]);
  }

  async update(data) {
    const response = await db.query(
      "UPDATE entries SET content = $1 WHERE id = $2 RETURNING id, title, content;",
      [data.content, this.id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to update content.");
    }
    return new Entry(response.rows[0]);
  }

}

module.exports = Entry;