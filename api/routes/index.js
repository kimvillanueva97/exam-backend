import express from "express";
import book from "../routes/book.js";

const router = express.Router();

//All api routes will be passed into this index file and will then be exported into the server

router.use("/book", book);

export default router;
