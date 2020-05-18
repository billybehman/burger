CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int(11) AUTO_INCREMENT NOT NULL,
    burger_name varchar(70) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);



