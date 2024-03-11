const mongoose = require('mongoose');

const definitionSchema = new mongoose.Schema({
    source: {
        type: [mongoose.Schema.Types.Mixed]
    }
});

const personalDictionarySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    definitions: [definitionSchema]
});

const PersonalDictionary = mongoose.model('PersonalDictionary', personalDictionarySchema);

module.exports = PersonalDictionary;
