import express from "express";
import { books } from "../../../model/book.model.js";
import { v4 } from "uuid";

export const route = express.Router();

//API Endpoint
route.post("/add", async (req, res, next) => {
  try {
    if (req.body) {
      const nBook = req.body; // receive the data inside the body
      nBook.id = v4(); // MongoDb assigns id to new model saved into the database, this is for example purposes
      books.push(nBook); // push the new Book object into the database
    }
    return res.status(200).json({ message: "New book added!" });
  } catch (e) {
    return next(e);
  }
});

export default route;
