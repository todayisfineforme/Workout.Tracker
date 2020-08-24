const workout = require('../models/workout');

exports.route = (app) => {
    app.get('/api/workouts', (req,res) =>{
        workout.find()
        .then(workouts => {
            res.json(workouts)
        }).catch(err => {
            res.json(err)
        });
    });

    app.get("/api/workouts/range", (req,res) => {
        workout.find({})
        .then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req,res) => {
        let urlData = req.params;
        let data = req.body;
            workout.updateOne( {_id: urlData.id }, {$push: {exercises:  [
                {
                    "type" : data.type,
                    "name" : data.name,
                    "duration" : data.duration,
                    "distance" : data.distance,
                    "weight" : data.weight,
                    "reps" : data.reps,
                    "sets" : data.sets
                }
            ] 
        }}).then(dbUpdate => {
            res.json(dbUpdate);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post('/api/workouts', (req,res) => {
        let data = req.body;
        workout.create({
            day: new Date().setDate(new Date().getDate())
        }).then(dbUpdate => {
            res.json(dbUpdate)
        }).catch(err => {
            res.json(err)
        });
    });
};