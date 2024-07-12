const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true } // Add icon field
});

module.exports = mongoose.model('Category', categorySchema);
