import express from "express"
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.routes.js";


const app = express()
app.use(express.json())

const port = process.env.port || 3000

app.get("/health", (req, res) => {
    res.json({ mensagem: "ok" })
})

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/post", postRouter)


app.listen(port, () => {
    console.log("API rodando em http://localhost:" + port)
})