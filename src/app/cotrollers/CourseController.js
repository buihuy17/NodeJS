
const Course = require('../modules/Course');
const{mongooseToObject} = require('../../util/mongoose');

class SiteController {
    
    //[GET] /courses/:slug
    show(req, res, next) {
       Course.findOne({ slug: req.params.slug})
            .then((course) =>
                res.render('courses/show',{
                    course:mongooseToObject(course),
            }),
        )
        .catch(next);
        
    }


    //[GET] /courses/create
    create(req, res,next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res) {
        // res.json(req.body);
        var formData = req.body;
        formData.img =`https://tm.diablo2-vn.com/app/uploads/2021/03/V9PCS7V32UI/photo_2021-03-02_23-08-17.jpg`;
        // formData.img = null;
        const course = new Course(formData);
        course.save()
             .then(()    =>  res.redirect(`/`))
            .catch(error =>{

            });
    }
}

module.exports = new SiteController();
