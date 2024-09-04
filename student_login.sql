-- Create database (optional, if you don't have one already)
CREATE DATABASE IF NOT EXISTS student_platform;

-- Use the created database
USE student_platform;

-- Create a table for storing student information
CREATE TABLE IF NOT EXISTS students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,  -- Store hashed passwords for security
    email VARCHAR(100) NOT NULL UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data (optional, you can insert your own data here)
INSERT INTO students (username, password_hash, email, first_name, last_name) VALUES
('john_doe', '$2y$10$Z9E.7jN.QTYPmQnPL9M5b.KCv7oXU8uJUkZwOTgmA7irzsh/MwFOC', 'john.doe@example.com', 'John', 'Doe'),
('jane_smith', '$2y$10$VbghS/PhUo1L/4E3c.7JmOJ2gZ4H5iJ6qjIK3E/bOjT0bLJQh7hF7', 'jane.smith@example.com', 'Jane', 'Smith');

-- Note: Passwords should be hashed using a secure hashing algorithm before inserting.
-- For example, use bcrypt to hash passwords.
