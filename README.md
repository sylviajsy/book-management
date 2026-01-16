# Book-management
A back-end web application for managing a personal library inventory. This project demonstrates CRUD operations using **Node.js/Express** backend connected to a **PostgreSQL** database.

## 🛠️ How to Test
1. Install dependencies `npm install`
2. Set up PostgreSQL:
- Start the Postgres service:`brew services start postgresql`
- Create the database: `createdb bookManagement`
- Log into DB:`psql bookManagement`
- Create tables: `psql bookManagement < db.sql`
