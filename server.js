const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
// expres
// db from config
// routes from routes
// port
// app
// app.use for url encoded
// app.use for express json
// ap.use for routes
// set up app to listen once db is open 