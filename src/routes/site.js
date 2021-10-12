const express = require('express');
const router = express.Router();

const siteController = require('../app/cotrollers/SiteController');

//newsController.index

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
