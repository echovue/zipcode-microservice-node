'use strict';

exports.get_distance = function(req, res) {
    Distance.find({}, function(err, distance) {
        if (err)
            res.send(err);
        res.json(distance);
    });
};