CREATE TABLE people (
                         id   UUID,
                         name VARCHAR(255) NOT NULL,
                         email VARCHAR(255) NOT NULL UNIQUE,
                         number VARCHAR(255) NOT NULL UNIQUE,
                         PRIMARY KEY (id)
);