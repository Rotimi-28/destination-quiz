const router = require('express').Router();


const sequelize = require('../config/connection');

const { Question, User, Options } = require('../models');

/////////////////////////////////////////


// set up our root directory '/'

router.get('/', (req, res) => {

    // we will render our homepage template 
    // at the '/' endpoint
    res.render ('homepage');
})


/////////////////////////////

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // we dont need 2nd argument for render method
    // because we dont need any variables
    res.render('login');
});


/////////////////////////////

module.exports = router;