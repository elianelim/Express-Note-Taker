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
// app.use('/api', api);

//USE static file
app.use(express.static('public'));

//GET Route to index/home page
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Wildcard route to direct users to index/home page
app.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//GET Route for notes page 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//write and add notes into db.json   


//if all the required properties are present
// if (title && text) {
//     const newNotes = {
//         title,
//         text, 
//         notes_id: uuid(),
//     };

//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const parsedNotes = JSON.parse(data);

//             Add new note
//             parsedNotes.push(newNotes);

//         Write updated reviews back to the file
//     fs.writeFile(
//         './db/db.json',
//         JSON.stringify(parsedNotes, null, 3),
//         (writeErr) =>
//         writeErr
//         ? console.error(writeErr)
//         : console.info('Successfully updated notes!')
//          );
// }
// });
// };


//Delete Route to delete note throug query parameter containing ID
//To delete note, need to read all notes from db.json file
//remove the note with given ID property
//rewrite the notes to the db.json file
// app.delete('/api/notes/:id' (req, res) => {
//     res.send('${uuid} has been deleted')
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);