const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');


app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', __dirname);

// routes
app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
  res.render('./views/room', { roomId: req.params.room })
})

// servidor na porta 3333
server.listen(3333);