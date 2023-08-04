const express = require('express')
const bodyParser = require('body-parser')
const db = require('./Database/db')
const routes = require('./routes/routes')
// const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(routes);

// Root Route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the server!'); // You can send any response you want here.
});

// Synchronize the database and start the server
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error.message);
  });

//ANOTHER WAY :-

// // PostgreSQL database connection configuration
// const pool = new Pool({
//     user: 'postgres',
//     password: '1234',
//     host: 'localhost', // Replace with your database host
//     port: 5432, // Replace with your database port
//     database: 'new_database',
//   });
  
//   pool.connect()
//     .then(() => {
//       console.log('Connected to PostgreSQL database');
//     })
//     .catch((error) => {
//       console.error('Error connecting to PostgreSQL database:', error.message);
//     });
  
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });