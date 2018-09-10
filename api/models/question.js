const mongoose = require('mongoose');

const quesSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    text: { type: String, required: true },
    choices: { choice: { type:Array }},
    answer: { type: String }

});

module.exports = mongoose.model('Question', quesSchema);