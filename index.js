import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Server is running healthy.")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});