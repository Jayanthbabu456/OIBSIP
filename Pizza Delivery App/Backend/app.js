import express from "express";
const app = express();
app.use("/", (req, res) => {
  res.status(200).send("<h1>JAYANTH</h1>");
});
export default app;
