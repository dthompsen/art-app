INSERT INTO products (id, title, description) VALUES (1, "Portsmouth Light", "Sunrise over lighthouse in Portsmouth Harbor, NH.");
INSERT INTO products (id, title, description) VALUES (2, "Lone Dinghy", "Yellow dinghy at Mystic Seaport, CT.");
INSERT INTO products (id, title, description) VALUES (3, "Mayflower II", "Replica of historic Pilgrim ship in Plymouth, MA.");

INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (1, "SAA", "On the Water", "6/1/2021","6/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (2, "NHAA", "Colors of Summer", "7/1/2021","7/30/2021");
INSERT INTO exhibits (id, venue, theme, start_date, end_date) VALUES (3, "NHAA", "Parfitt", "8/1/2021","8/30/2021");

INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (1, 2, 1, 150, "");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (2, 1, 2, 200, "");
INSERT INTO displays (id, product_id, exhibit_id, price, date_sold) VALUES (3, 3, 3, 300, "8/15/2021");
