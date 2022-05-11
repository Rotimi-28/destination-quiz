const router = require('express').Router();


const sequelize = require('../config/connection');

const { Question, User, Options } = require('../models');

/////////////////////////////////////////


// set up our root directory '/'

router.get('/', (req, res) => {

    res.render('homepage');
    
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

    Question.findAll({

    }).then(dbQuestionData => {
        const questions = dbQuestionData.map(question => question.get({ plain:true}));
        res.render ('quiz', {questions});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    /*Options.findAll({

    }).then(dbQuestionData => {
        const options = dbOptionsData.map(options => options.get({ plain:true}));
        res.render ('quiz', {options});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });*/
    
});

/////////////////////////////

router.get('/results', (req, res) => {

    res.render('results');
    
})

/////////////////////////////////

module.exports = router;