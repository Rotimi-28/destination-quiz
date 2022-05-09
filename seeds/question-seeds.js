const { Question } = require('../models');

const questionsData = [
    {
        name: 'this is a test question',
        question_id: 1
    }]

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;