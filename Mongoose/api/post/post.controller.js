// Controllers: Se encargan de definir lo que se va a hacer (c/u con una responsabilidad)

/* GET                /api/posts                            => index
POST              /api/posts                           => create
GET               /api/posts/:id                      => show
PUT               /api/posts/:id                      => update
DELETE       /api/posts/:id                      => destroy */

const Post = require("./post.model");

// Lista a todos
async function index(_, res) {
  try {
    const posts = await Post.find().exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Lista a uno
async function show(id) {
  try {
    const post = await Post.findById(id).exec();
    return post;
  } catch (error) {}
}

// Crea
async function create(post) {
  try {
    const post = new Post(post);
    await post.save();
    return post;
  } catch (error) {}
}

// Elimina
async function destroy(id) {
  try {
    const post = await Post.findByIdAndDelete(id).exec();
    return post;
  } catch (error) {}
}

// Actualizar
async function update(post) {
  try {
    const post = await Post.findByIdAndUpdate({ _id: id }, post, {
      new: true,
    }).exec();
    return post;
  } catch (error) {}
}

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};
