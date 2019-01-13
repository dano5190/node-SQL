DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INTEGER,
stock_quantity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bike", "Sporting", 150, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Comic Book", "Books", 5, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Home", 10, 55);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Flashlight", "Tools", 7, 45);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Health", 4, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dice set", "Entertainment", 10, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Desktop PC", "Electronics", 1000, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Health", 15, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Game Console", "Electronics", 400, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hammer", "Tools", 15, 100);