DROP DATABASE IF EXISTS constacts_db1;
CREATE DATABASE contacts_db1;

\c contacts_db1;

CREATE TABLE contacts (
    ID SERIAL PRIMARY KEY,
    first TEXT,
    last TEXT,
    age INTEGER,
    sex TEXT
);

INSERT INTO contacts (first, last, age, sex)
VALUES ('Jack', 'Frost', 100, 'male');