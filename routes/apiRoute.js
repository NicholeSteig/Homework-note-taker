var notesData = require("../notes");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });
}