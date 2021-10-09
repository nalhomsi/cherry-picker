const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
    year: {
        type: String,
        required: true,
        trim: true
    },
    make: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;