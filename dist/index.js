"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.get('/', function (request, response) {
    response.send('Yay it Works!');
});
app.listen(3000);
