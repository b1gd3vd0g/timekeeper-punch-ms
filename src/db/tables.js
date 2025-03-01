const sql = require('./sql');

const createClientsTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS clients(
            client_id       SERIAL              PRIMARY KEY,
            email           TEXT                UNIQUE NOT NULL,
            f_name          TEXT,
            l_name          TEXT,
            verified        BOOLEAN             DEFAULT false
        );
    `;
};

const createProjectsTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS projects(
            project_id      SERIAL              PRIMARY KEY,
            name            TEXT                NOT NULL UNIQUE,
            owner           INTEGER             REFERENCES users(user_id) NOT NULL,
            client          INTEGER             REFERENCES clients(client_id),
            default_rate    REAL
        );
    `;
};

module.exports = { createClientsTable, createProjectsTable };
