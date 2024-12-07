"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const express = require('express');
const app = express();
const ROOT_DIR = path.dirname(__dirname);
app.use(express.static('static'));
app.get('/', function (request, response) {
    response.sendFile(ROOT_DIR + '/static/test.html');
});
app.listen(3000);
