const { Options } = require('../models');

const optionsData = [
    {
        name: 'this is a test option'
    }]

const seedOptions = () => Options.bulkCreate(optionsData);

module.exports = seedOptions;