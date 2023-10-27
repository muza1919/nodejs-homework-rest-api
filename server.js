const mongoose = require('mongoose');
const app = require('./app');

const {DB_HOST, PORT = 3000} = process.env;

const dbURI = 'mongodb://127.0.0.1:27017/contacts';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });