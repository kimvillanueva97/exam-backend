import express from "express";
import { books } from "../../../model/book.model.js";

export const route = express.Router();

//API Endpoint

route.post("/update/:id", async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req; // get the id that is being passed in the link

    const book = books.find((b) => b.id == id); // find a book via Id that is being passed in the params

    if (!book) {
      return res.status(400).json({ message: "No book found!" }); // throw a message to the client. if no book was found with the Id passed in
    }
    if (!req.body) {
      return res.status(400).json({ message: "No update was made!" }); // throw a message to the client. if there is no data found, to update the book
    }

    //update the book with the data from the client
    const keys = Object.keys(book).filter((key) => key !== "id"); // get all the keys in the Object and filter out Id

    const data = req.body;

    keys.map((key) => {
      if (data[key]) book[key] = data[key]; // dynamically udpate the book's properties
    });

    // if (data.name) book.name = data.name;
    // if (data.author) book.author = data.author;
    // if (data.copy) book.copy = data.copy;

    return res.status(200).json({ message: "Book successfully updated!" });
  } catch (e) {
    return next(e);
  }
});

export default route;
