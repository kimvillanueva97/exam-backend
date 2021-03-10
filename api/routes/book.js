import express from "express";
import getBook from "../controller/book/get-book.js";
import addBook from "../controller/book/add-book.js";
import updateBook from "../controller/book/update-book.js";

// for segregation of API Enpoints to their corresponding use case
const router = express.Router();
// routes
router.use(getBook); // get all the books
router.use(addBook); // add a book
router.use(updateBook); // update a book via Id

export default router;
