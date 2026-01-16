# Book-management
A back-end web application for managing a personal library inventory. This project demonstrates CRUD operations using **Node.js/Express** backend connected to a **PostgreSQL** database.

## 🛠️ How to Test
1. Install dependencies `npm install`
2. Set up PostgreSQL:
- Start the Postgres service:`brew services start postgresql`
- Create the database: `createdb bookManagement`
- Log into DB:`psql bookManagement`
- Create tables: `psql bookManagement < db.sql`
3. Create a `.env` file in the root directory
  `DB_USER=your_user_name
  DB_HOST=127.0.0.1
  DB_DBNAME=bookManagement
  DB_PASSWORD=
  DB_PORT=5432
  PORT=8080`
4. Importing JSON data to DB: `node dataSeed.js`
5. Start the server: `npm run server`
