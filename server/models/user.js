const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  paints: [{ type: mongoose.Types.ObjectId, required: true, ref: "Paint" }],
  foreignpaints: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Foreignpaint",
    },
  ],
  paintssent: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Paintsent",
    },
  ],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
