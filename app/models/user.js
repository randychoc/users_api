const mongoose = require("mongoose");

//definimos el Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// definimos el Modelo
module.exports = mongoose.model("user", UserSchema);
