import { Router } from "express"
import { UserController } from "../controllers/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const userRouter = Router()
const userController = new UserController()

//create
userRouter.post("/", userController.create)

//Update
userRouter.put("/:id",authMiddleware, userController.update)

// TODAS as rotas abaixo deate ponto ///
userRouter.use(authMiddleware)

//getAll
userRouter.get("/", userController.getAll)
//getById
userRouter.get("/:id", userController.getById)
//delete
userRouter.delete("/:id", userController.delete)



export default userRouter