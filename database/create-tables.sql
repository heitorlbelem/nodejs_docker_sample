CREATE DATABASE IF NOT EXISTS node_database;
USE node_database;

CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO people(name) VALUES("FullCycle Rocks!");
