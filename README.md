## Book-management
A back-end web application for managing a personal library inventory. This project demonstrates CRUD operations using **Node.js/Express** backend connected to a **PostgreSQL** database.

## Database-based routes
- `GET /db/books`
<img width="862" height="602" alt="Screenshot 2026-01-15 at 8 06 27 PM" src="https://github.com/user-attachments/assets/2aa2d7b8-9cfc-492a-bd3e-b43fec778289" />

- `GET /db/books/:isbn`
<img width="880" height="514" alt="Screenshot 2026-01-15 at 8 07 32 PM" src="https://github.com/user-attachments/assets/24fe0276-ef90-4de0-ba8c-8f7888b8199b" />

- `POST /db/books`
<img width="854" height="542" alt="Screenshot 2026-01-15 at 8 09 44 PM" src="https://github.com/user-attachments/assets/b9f97e5b-fdc6-46d3-ac96-1cf9038a80b7" />

- `PUT /db/books/:isbn`
<img width="843" height="537" alt="Screenshot 2026-01-15 at 8 10 18 PM" src="https://github.com/user-attachments/assets/94a2e91e-f526-4c11-8cd0-c8b6a4d0c18a" />

- `DELETE /db/books/:isbn`
<img width="838" height="502" alt="Screenshot 2026-01-15 at 8 10 35 PM" src="https://github.com/user-attachments/assets/789c9598-b291-4a25-8210-bebd54c5cb69" />
<img width="852" height="435" alt="Screenshot 2026-01-15 at 8 10 50 PM" src="https://github.com/user-attachments/assets/dcab6d47-e13a-4946-ad5a-212ad3f2421d" />


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
