const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Category', catSchema);

module.exports = Category;