const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },

    bookingDate: {
      type: Date,
      default: Date.now,
    },

    travelDate: {
      type: Date,
      required: true,
    },

    numberOfPeople: {
      type: Number,
      default: 1,
      min: 1,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },

    specialRequests: {
      type: String,
      default: "",
    },

    contactPhone: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);