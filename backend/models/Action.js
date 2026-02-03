const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
  title: String,
  priority: String,
  completed: { type: Boolean, default: false },
  scheduledAt: Date,         
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Action", actionSchema);
