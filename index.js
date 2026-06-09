import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running successfully",
        version: "v1.0.0"
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});