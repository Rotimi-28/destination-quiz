const { Question } = require('../models');

const questionsData = [
    {
        question: 'What kind of food do you want to eat on your vacation?'
    },
    {
        question: 'What kind of weather do you like?'
    },
    {
        question: 'What kind of scenery do you want to see?'
    },
    {
        question: 'How do you like your accomodations?'
    }]

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;