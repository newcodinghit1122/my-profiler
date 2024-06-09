const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    min: Number,
    max: Number,
    avg: Number,
    standardDeviation: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', DataSchema);
