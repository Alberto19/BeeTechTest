"use strict"

let app = require('express')();
let userRouter = require('./userRouter');
let desejoRouter = require('./desejoRouter');

app.use('/user', userRouter);
app.use('/desejo',desejoRouter);

module.exports = app;