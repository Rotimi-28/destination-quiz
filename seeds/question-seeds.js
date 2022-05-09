const { Question } = require('../models');

const questionsData = [
    {
        name: 'this is a test question'
    }]

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;