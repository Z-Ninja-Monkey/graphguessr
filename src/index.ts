import {Request, Response} from "express";
const path = require('path');

const express = require('express');
const app = express();

const ROOT_DIR = path.dirname(__dirname);

app.use(express.static('static'));

app.get('/', function (request: Request, response: Response) {

   response.sendFile(ROOT_DIR + '/static/test.html');

});

app.listen(3000);