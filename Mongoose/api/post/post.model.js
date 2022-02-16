const mongoose = require("mongoose");

// Modelo: Define la estructura o esquema que vamos a querer hacer
const PostSchema = mongoose.Schema(
  {
    title: {},
    content: String,
    tags: [
      {
        type: String,
        uppercase: true,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
