const path = require('path');

module.exports = (app) => {
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/exercise.html'));
    });
}