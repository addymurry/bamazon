DROP DATABASE IF exists bamazon_db;

Create DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(20),
department_name VARCHAR(20),
price DECIMAL(10,2) ,
stock INTEGER(20),
PRIMARY KEY(id)
);
 
INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("laptop", "electronics",300.00,10);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("Mouse Pad","electronics",15.00,65);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("cellphone","electronics",800.00,5);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("dog food","pets",35.00,45);
 
INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("cat food", "pets", 30.00,60);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("dog house", "pets", 1000.00,2);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("hair spray", "beauty", 10.00,35);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("comb", "beauty", 1.00, 35);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("baseball","sports", 10.00, 150);
 
 INSERT INTO products (product_name, department_name,
 price, stock)
 VALUES("football", "sports", 20.00, 300);
 
 USE bamazon_db;
 
 SELECT * FROM products;
 
 