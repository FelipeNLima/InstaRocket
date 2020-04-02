const express = require('express');
const multer = require('multer');
const configUpload = require('./config/upload');

const PostController = require('./controllers/PostControllers');
const LikeControllers = require('./controllers/LikeControllers');

const routes = new express.Router();
const upload = multer(configUpload);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);


routes.post('/posts/:id/like', LikeControllers.store);

module.exports = routes;