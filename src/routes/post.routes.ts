import { Router } from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { PostController } from "../controllers/post.controller.js"

const postRouter = Router()
const postController = new PostController()

//create
postRouter.post("/:id", postController.create)

//Update
postRouter.put("/:id",authMiddleware, postController.update)

// TODAS as rotas abaixo deate ponto ///
postRouter.use(authMiddleware)

//getAll
postRouter.get("/", postController.getByAuthor)
//getById
postRouter.get("/:id", postController.getById)
//delete
postRouter.delete("/:id", postController.delete)



export default postRouter