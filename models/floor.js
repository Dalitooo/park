const mongoose = require('mongoose');
const Slot = require('./slot');

const floorSchema = new mongoose.Schema({
    floorNumber: {
        type: Number,
        required: true
    },
    slots: [{
        type: String,
        ref: 'slot'
    }]
});

const Floor = mongoose.model("floor", floorSchema);

module.exports = Floor;
