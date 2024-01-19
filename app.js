const express = require("express");
const connectdb = require("./db");
const todoRouter = require("./route/todo"); // Adjust the path based on your actual file structure
const cors = require("cors");

const app = express();

connectdb();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests

// Mount the todo router on the /todo path
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
    res.send("hello");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
