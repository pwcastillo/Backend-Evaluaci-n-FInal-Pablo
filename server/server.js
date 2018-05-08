
const http = require('http'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express'),
      routes = require('./routes');


const port = process.env.PORT ||  3000,
      app = express(),
      server = http.createServer(app);

routes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
// app.use('/search', routes);

server.listen(port, () => {
    console.log("Listening on port " + port);
});
