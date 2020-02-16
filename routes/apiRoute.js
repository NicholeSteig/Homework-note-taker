var db = require("../db");

var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(true);
    });
}