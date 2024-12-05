import {Request, Response} from "express";

const express = require('express');
const app = express();

app.get('/', function (request: Request, response: Response) {

   response.send('Yay it Works!');

});

app.listen(3000);