const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const fs = require('fs');

const PORT = 3001

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/api', api);

//Wildcard route to direct users to index/home page
app.get ('*', (req, res) =>
    res.sendFile(__dirname, 'public/assets/index.html'));

//GET Route for notes page 
app.get('/notes', (req, res) =>
    res.sendFile(__dirname, 'public/assets/notes.html'));

const { title, text } = req.body;

//if all the required properties are present
if (title && text) {
    const newNotes = {
        title,
        text, 
        notes_id: uuid(),
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);

            //Add new note
            parsedNotes.push(newNotes);

        //Write updated reviews back to the file
    fs.writeFile(
        './db/db.json',
        JSON.stringify(parsedNotes, null, 3),
        (writeErr) =>
        writeErr
        ? console.error(writeErr)
        : console.info('Successfully updated notes!')
         );
}
});
};





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);