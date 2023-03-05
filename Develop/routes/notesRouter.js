const router = require("express").Router();
const fs = require('fs');
const path = require("path");


// C - create
// R - read
// U - update
// D - delete

router.get("/api/notes", (req, res) => {
    // get all notes

    //log our request to the terminal
    console.info(`${req.method} request received for notes`);

    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))

    res.status(200).json(notesData)
});

router.post("/api/notes", (req, res) => {
    // create a note

    //log our request to the terminal
    console.info(`${req.method} request received to add a note`);

    
});

router.delete("/notes/:id", (req, res) => {
    // delete a note

    //log our request to the terminal
    console.info(`${req.method} request received to delete a note`);
});

module.exports = router;
