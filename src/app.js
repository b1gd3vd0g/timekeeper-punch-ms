const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    cors({
        credentials: 'include',
        origin: '*',
        allowedHeaders: '*'
    })
);

app.use(express.json());

app.use('/project', require('./routers/project_router'));
app.use('/punch', require('./routers/punch_router'));

module.exports = app;
