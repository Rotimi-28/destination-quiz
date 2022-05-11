const router = require('express').Router();


const sequelize = require('../config/connection');

const { Question, User, Options } = require('../models');

/////////////////////////////////////////


// set up our root directory '/'

router.get('/', (req, res) => {

    Question.findAll({
        
    }).then(dbQuestionData => {
        const questions = dbQuestionData.map(question => question.get({ plain:true}));
        res.render ('homepage', {questions});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // we will render our homepage template 
    // at the '/' endpoint
    
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


////////////////////////////

router.get('/quiz', (req, res) => {


    res.render('quiz');
});

/////////////////////////////

module.exports = router;