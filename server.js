const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');

const bootcampRouter = require('./routes/bootcampsRouter');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/bootcamps', bootcampRouter);

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(
    `Server start in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold
  )
);

// global handler for promise error
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
