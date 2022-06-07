CREATE DATABASE dividendtrackerpern;

CREATE TABLE stock(
    id SERIAL PRIMARY KEY,
    summary TEXT NOT NULL UNIQUE
);

CREATE TABLE dividend(
    id SERIAL PRIMARY KEY,
    stock_id INTEGER REFERENCES stock (id) ON DELETE CASCADE,
    amount DECIMAL(12,2) NOT NULL,
    date DATE
);