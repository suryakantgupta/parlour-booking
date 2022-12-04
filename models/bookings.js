const mongoose = require("mongoose");

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    note: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = {
    Bookings: mongoose.models.bookings || mongoose.model("bookings", bookingSchema),
}

