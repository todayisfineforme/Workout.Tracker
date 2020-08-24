const path = require('path');

exports.route = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/html/index.html'));
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/exercise.html'));
    });

    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/html/stats.html'));
      });
}