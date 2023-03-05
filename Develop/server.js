const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/notesRouter")

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true }));


//USE static file
app.use(express.static('public'));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

//Listening PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`));