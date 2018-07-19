const express = require('express');
const router = express.Router();
const Status = require('../model/Status');

// get a list of ninjas from the db
// router.get('/status', function (req, res, next) {
//     /* Ninja.find({}).then(function(ninjas){
//         res.send(ninjas);
//     }); */
//     Ninja.geoNear(
//         { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
//         { maxDistance: 100000, spherical: true }
//     ).then(function (status) {
//         res.send(status);
//     }).catch(next);s
// });

// add a new ninja to the db
router.post('/status', function (req, res, next) {
    console.log(11111111);
    res.send(1);
    // Status.create(req.body).then(function (ninja) {
    //     console.log(ninja);
    //     res.send(ninja);
    // }).catch(function() {
    //     console.log(222222222)
    //     return next();
    // });
});

module.exports = router;
