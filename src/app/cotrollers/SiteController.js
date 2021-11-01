
const Course = require('../modules/Course');
const{mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    //[GET] /home
    index(req, res,next) {
        // res.render('home');   
        Course.find({})
        .then(courses => {
            res.render('home', {
                courses:mutipleMongooseToObject(courses)
            });
        })
        .catch(error => next(error))
    }


    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
