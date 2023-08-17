# Bridget Jones's Diary

## Installation and usage
- **Clone** this repository: `git clone <repo>`
### API
- Move (`cd`) into **api** folder
- Install dependencies: `npm install`
- Create a database instance (ElephantSQL is an option)
- Create a **.env** file in the **api** folder and update the values below
```sh
# .env
PORT=port_number
DB_URL=postgres://username:password@database_location/database_name
```
- Seed the database: `npm setup-db`
- Run the app: `npm run dev`
  - By default, the app runs on [3000](http://localhost:3000)
### Front-end
- Open index.html in web browser

## Available endpoints
| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a JSON object describing the API. |
| `/entries` | `GET` | Returns a JSON object containing all the diary entries, ordered by most recently created. |
| `/entries` | `POST` | Accepts a JSON object and uses it to create and store a new diary entry. |
| `/entries/:id` | `PATCH` | Updates a specific diary entry, changing the content. |
| `/entries/:id` | `DELETE` | Deletes a specific diary entry, selected by `:id`. |
| `/entries/date/:created` | `GET` | Returns a JSON object containing all the diary entries created on a certain date. |
| `/entries/category/:category` | `GET` | Returns a JSON object containing all the diary entries that share the specified category. |

## Bugs
- Front-end is a work in progress