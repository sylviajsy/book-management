DROP TABLE IF EXISTS books;

CREATE TABLE books (

  isbn VARCHAR(255) PRIMARY KEY,

  title VARCHAR(255) NOT NULL,

  author VARCHAR(255) NOT NULL,

  format VARCHAR(255)

);

-- Define schema
-- Insert is handled in db/dataSeed.js