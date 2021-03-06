const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  paints: [{ type: mongoose.Types.ObjectId, required: true, ref: "Paint" }],
  sendpaints: [{ type: mongoose.Types.ObjectId, required: true, ref: "Sendpaint" }],
  receivepaints: [{ type: mongoose.Types.ObjectId, required: true, ref: "Receivepaint" }]

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
