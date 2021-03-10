import express from "express";
import { books } from "../../../model/book.model.js";

export const route = express.Router();

//API Endpoint

route.get("/", async (req, res, next) => {
  try {
    return res.status(200).json({ book: books });
  } catch (e) {
    return next(e);
  }
});

export default route;
