CREATE DATABASE cashpath_db;
SHOW DATABASES;
USE cashpath_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  expense_name VARCHAR(150) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  expense_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE income (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  source VARCHAR(150) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  income_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password)
VALUES
('alex', '123456'),
('maya', '123456');

INSERT INTO expenses (user_id, expense_name, amount, category, expense_date)
VALUES
(1, 'Bus to school', 5.00, 'Transport', '2026-01-10'),
(1, 'Lunch rice', 12.50, 'Food', '2026-01-10'),
(2, 'Books', 40.00, 'School', '2026-01-08');

INSERT INTO income (user_id, source, amount, income_date)
VALUES
(1, 'Allowance', 100.00, '2026-01-01'),
(1, 'Part-time work', 250.00, '2026-01-05'),
(2, 'Gift', 300.00, '2026-01-02');

SHOW TABLES;

SELECT * FROM expenses;

SELECT CONCAT(amount, ' XAF') AS amount_xaf, category, expense_date
FROM expenses
WHERE user_id = 1;

SELECT * FROM users;


SELECT CONCAT(amount, ' XAF') AS amount_xaf, source, income_date
FROM income
WHERE user_id = 1;
