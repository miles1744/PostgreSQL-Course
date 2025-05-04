

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

async function main() {

    console.log("seeding...")

    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done")
}

main();