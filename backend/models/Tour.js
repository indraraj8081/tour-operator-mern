const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Honeymoon", "Corporate", "Couple", "Friends"],
      required: true,
    },

    itinerary: {
      type: String,
      default: "",
    },

    inclusions: {
      type: String,
      default: "",
    },

    exclusions: {
      type: String,
      default: "",
    },

    images: [
      {
        url: String,
        filename: String,
      },
    ],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// indexes for efficient searching
tourSchema.index({ state: 1 });
tourSchema.index({ city: 1 });
tourSchema.index({ category: 1 });

module.exports = mongoose.model("Tour", tourSchema);