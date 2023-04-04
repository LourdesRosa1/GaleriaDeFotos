require('dotenv').config();
const mongoose= require('mongoose');

const{ DB_USER, DB_PASSWORD, DB_HOST,DB_NAME}= process.env;

const MONGODB_URI= `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
  }).then(() => {
    console.log('Connected to MongoDB')
  }).catch(error => {
    console.error('Error connection to MongoDB', error.message)
  })