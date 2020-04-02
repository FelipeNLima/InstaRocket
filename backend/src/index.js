const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// Conexão com o Banco 
mongoose.connect('mongodb+srv://felipe:felipe@cluster0-fbaon.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;

    next();
});

// todas as URL podem acessar esse backend
app.use(cors());

// rotas para acessar os arquivos de uploads
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);
