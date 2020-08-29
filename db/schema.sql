DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
  devoured BOOL NOT NULL
);

USE burger_db;

INSERT INTO burgers (name, devoured)
VALUES ('A Burger', false),
  ('B Burger', false),
  ('C Burger', true);