import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;

// Middleware
app.use(express.json())
app.use(Cors())

//DB Config
const connection_url =
  "mongodb+srv://pivatiba:Samira12633@cluster0.r78qzmz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post("/dating/cards", (req, res) => {

    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/dating/cards", (req, res) => {

    Cards.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
