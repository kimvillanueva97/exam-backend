import express from "express";
import cors from "cors";
import routes from "./api/routes/index.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());

// to parse received data from api requests
app.use(bodyParser.raw());
// For stripe hook
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      if (req.originalUrl === "/hooks/stripe") req.rawBody = buf.toString();
    },
  })
);

app.use(routes); // all API endpoints will be stored here

import http from "http";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
