DELETE FROM displays;
DELETE FROM products;
DELETE FROM exhibits;

INSERT INTO products (id, title, img, description) VALUES (1, "The Joseph Conrad", "P101.jpg", "Tall ship in Mystic, CT.");
INSERT INTO products (id, title, img, description) VALUES (2, "Lone Dinghy", "P102.jpg", "Yellow dinghy at Mystic Seaport, CT.");
INSERT INTO products (id, title, img, description) VALUES (3, "Mayflower II", "P103.jpg", "Replica of historic Pilgrim ship in Plymouth, MA.");
INSERT INTO products (id, title, img, description) VALUES (4, "Abundance", "P104.jpg", "Prescott Park garden fountain.");
INSERT INTO products (id, title, img, description) VALUES (5, "Swift Waters", "P105.jpg", "Swift River in the NH White Mountains.");
INSERT INTO products (id, title, img, description) VALUES (6, "Victorian Secrets", "P106.jpg", "Victorian Secret Garden at the Denver Botanic Gardens.");
INSERT INTO products (id, title, img, description) VALUES (7, "Radiant Tunnel", "P107.jpg", "Archway at the Denver Center for the Performing Arts.");
INSERT INTO products (id, title, img, description) VALUES (8, "Just Left the Station", "P108.jpg", "Denver's Union Station.");
INSERT INTO products (id, title, img, description) VALUES (9, "Ting for Pausing", "P109.jpg", "Gazebo in Chinese Garden of Denver Botanic Gardens.");
INSERT INTO products (id, title, img, description) VALUES (10, "Mountain Ballet", "P110.jpg", "Statue and mountains at the Denver Center for the Performing Arts.");

INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (1, "SAA", "On the Water", "6/1/2021","6/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (2, "NHAA", "Historic Ships", "7/1/2021","7/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (3, "NHAA", "Parfitt", "8/1/2021","8/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (4, "NHAA", "Dunfey/Portals", "11/1/2021","11/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (5, "NHAA", "Circle of Life", "9/1/2021","9/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (6, "NHAA", "Harvest Moon", "9/1/2021","9/30/2021");

INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (1, 1, 1, 150, "6/15/2021");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (2, 2, 1, 175, "");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (3, 3, 1, 150, "");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (4, 1, 2, 200, "");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (5, 3, 3, 300, "8/15/2021");
