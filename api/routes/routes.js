'use strict';

module.exports = function(app) {
    const controller = require('../controllers/controller');

    app.route('/about')
        .get();

    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.get_distance);
};