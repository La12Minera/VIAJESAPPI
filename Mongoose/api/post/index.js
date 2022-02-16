const Router = require("express").Router;

const controller = require("./post.controller");

const router = new Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);

module.exports = router;
