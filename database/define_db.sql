CREATE TABLE products(
    id             INT PRIMARY KEY NOT NULL,
    title          TEXT NOT NULL,
    description    TEXT
);
CREATE TABLE exhibits(
    id             INT PRIMARY KEY NOT NULL,
    venue          TEXT NOT NULL,
    theme          TEXT,
    start_date     TEXT,
    end_date       TEXT
);
CREATE TABLE displays(
    id             INT PRIMARY KEY NOT NULL,
    product_id     INT NOT NULL,
    exhibit_id     INT NOT NULL,
    price          INT,
    date_sold      TEXT,
    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(exhibit_id) REFERENCES exhibits(id)
);
