-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO
    "item" ("description", "image_url", "user_id")
VALUES
    (
        'coffee can of marbles',
        'https://images.squarespace-cdn.com/content/v1/5d998e025f94b14095e01ede/1588501023067-DCVMAY2GHQG8XNOJ2XUT/2020-05-MarbleJar.jpg',
        1
    );

SELECT
    *
FROM
    "item";