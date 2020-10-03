const express = require ('express');

const app = express ();
const path = require ('path')

app.get('/', function (req, res){

let file= path.resolve ('vistas/index.html')

res.sendFile(file);


})