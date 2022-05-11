const { Question } = require('../models');

const questionsData = [
    {
        question: 'What kind of food do you want to eat on your vacation?'
    },
    {
        question: 'What kind of weather do you like?'
    },
    {
        question: 'How do you like to travel?'
    },
    {
        question: 'How do you like your accommodations?'
    }]

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;