const mongoose = require('mongoose');

const definitionSchema = new mongoose.Schema({
    source: {
        type: [mongoose.Schema.Types.Mixed]
    }
});

const personalDictionarySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: Array,
        required: true
    },
});

const PersonalDictionary = mongoose.model('personaldictionaries', personalDictionarySchema);

module.exports = PersonalDictionary;
