DROP DATABASE dorixona;
CREATE DATABASE dorixona;
USE dorixona;

CREATE TABLE region(
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE district(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    region_id INT
);

CREATE TABLE pharmacies(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    region_id INT,
    district_id INT
);

CREATE TABLE stock(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pharmacy_id INT,
    medicine_id INT,
    quantity INT
);

CREATE TABLE medicines(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    medicine_type_id INT,
    price FLOAT,
    expiry_date VARCHAR(255),
    info VARCHAR(255)
);

CREATE TABLE medicineType(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);