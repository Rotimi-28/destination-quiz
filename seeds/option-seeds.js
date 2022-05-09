const { Options } = require('../models');

const optionsData = [
    {
        name: 'this is a test option',
        question_id: 1
    }]

const seedOptions = () => Options.bulkCreate(optionsData);

module.exports = seedOptions;