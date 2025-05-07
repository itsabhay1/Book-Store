import express from "express";
import dotenv from "dotenv";
import connetDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const app = express();

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
}
)
