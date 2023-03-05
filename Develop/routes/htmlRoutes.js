const path = require("path");
const router = require("express").Router();

//GET Route for notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//GET Route to index/home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//Wildcard route to direct users to index/home page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
