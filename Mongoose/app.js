const mongoose = require("mongoose");

const server =
  process.env.MONGO_DB_SERVER ||
  "Rogerfederer1234:Rogerfeder1234@cursos.u3uyo.mongodb.net";
const database = process.env.MONGO_DB_DATABASE || "agenda";

// 1- Nos conectamos a una base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${server}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB has conected!!!");
  } catch (error) {
    console.log("Failed", error);
  }
};

(async () => {
  await connectDB();

  // 2- Creamos un esquema
  const PostSchema = mongoose.Schema({}, { timestamps: true });

  const Post = mongoose.model("Post", PostSchema);

  // 3- Jugamos con los esquemas

  const post = new Post({
    content: "Este es el content del Post",
    title: "Mi tercer Post",
    tags: ["javascript", "tutorial", "blog", "node"],
    user: "FedeAbeldaño",
  });

  await post.save();

  /*   const posts = await Post.findById("hif836749hjkhfwef98").exec();

  const postDeleted = await Post.findByIdAndDelete(
    "hif836749hjkhfwef98"
  ).exec();

  const post = await Post.findByIdAndUpdate(
    {_id: hif836749hjkhfwef98 },
    {title: 'My delete Post', content: 'Cualquier Dato', tags: ['demo']},
    {
      new: true
    }
  ) */

  console.log(post);
})();
