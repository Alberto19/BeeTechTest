"use strict"

let app = require('express')();
let userRouter = require('./userRouter');
let desejoRouter = require('./desejoRouter');
let Authentication = require('../util/authentication');

app.use('/user', userRouter);
app.use('/desejo',Authentication,desejoRouter);

module.exports = app;