import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Service Running");
});

app.listen(process.env.PORT || 3000);
