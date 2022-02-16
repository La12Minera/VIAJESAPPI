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
    const posts = await Post.find().sort({createdAt: -1}).exec();  // sort: Ordenar por.... (-1 descendente, 1 ascendente)
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Lista a uno
async function show(req, res) {
  const {id} = req.params  // Va a buscar los params
  try {
    const post = await Post.findById(id).exec();
    if(post) {
    res.status(200).json(post);
    } else {
    res.status(404).json({message: 'Not Found my pez'});
    }

  } catch (error) {
    res.status(500).send(error);
  }
}

// Crea
async function create(req, res) {
  const {title, content, tags} = req.body
  try {
    const post = new Post({title, content, tags});
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Elimina
async function destroy(req, res) {
  const {id} = req.params
  try {
    const post = await Post.findByIdAndDelete(id).exec();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// Actualizar
async function update(req, res) {
  const {id} = req.params
  const postToUpdate = req.body

  try {
    const post = await Post.findByIdAndUpdate({ _id: id }, postToUpdate, {
      new: true
    }).exec();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};
