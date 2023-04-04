require("dotenv").config();
//console.log(process.env) 
const { PORT } = process.env;
const app= require('./app.js')


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
  