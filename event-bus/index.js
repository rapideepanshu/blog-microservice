const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:8000/events", event);
  axios.post("http://localhost:8001/events", event);
  axios.post("http://localhost:8002/events", event);

  res.send({ status: "OK" });
});

app.listen(8005, () => {
  console.log("Listening on 8005");
});
