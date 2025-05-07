import express from "express";
import dotenv from "dotenv";
import connetDB from "./db/index.js";
import bookRouter from "./Routes/book.route.js";

dotenv.config({
    path: "./.env"
})

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

connetDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!",err);
})


app.get('/', (req,res) => {
    res.send(`Server is live`)
})

app.use("/api/v1/book", bookRouter);
