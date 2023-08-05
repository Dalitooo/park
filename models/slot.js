const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    floorNumber: {
        type: Number,
        required: true
    },
    slotNumber: {
        type: Number,
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle'
    }
});

const Slot = mongoose.model("slot", slotSchema);

module.exports = Slot;
