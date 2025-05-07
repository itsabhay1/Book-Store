import { Router } from "express";
import { getBook } from "../controllers/book.controller.js";

const router = Router();

router.route("/").get(getBook)

export default router;