const { Options } = require('../models');

const optionsData = [
    {
        option: 'I like tacos',
        question_id: 1   
    },
    {
        option: 'I like sushi',
        question_id: 1   
    },
    {
        option: 'I like pasta',
        question_id: 1   
    },
    {
        option: 'I like burgers',
        question_id: 1   
    },
    {
        option: 'I like it hot!',
        question_id: 2   
    },
    {
        option: 'I like it cold!',
        question_id: 2   
    },
    {
        option: 'I like it tropical!',
        question_id: 2   
    },
    {
        option: 'I like it rainy!',
        question_id: 2   
    },
    {
        option: 'I like the city lights',
        question_id: 3   
    },
    {
        option: 'I like to see the mountains',
        question_id: 3   
    },
    {
        option: 'I like to see the ocean',
        question_id: 3   
    },
    {
        option: 'I like to see the rainforest',
        question_id: 3   
    },
    {
        option: 'I like the desert',
        question_id: 3   
    },
    {
        option: '5 star resort',
        question_id: 4   
    },
    {
        option: 'Hostels',
        question_id: 4   
    },
    {
        option: 'Backpacking',
        question_id: 4   
    },
    {
        option: 'Air BnB',
        question_id: 4   
    }]

const seedOptions = () => Options.bulkCreate(optionsData);

module.exports = seedOptions;