const express = required("express");
const cors = required("cors");
const mongoose = required("mongoose");
const path = required("path");

const todoRoutes = require("./routes/todos");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose.connect("mongodb://localhost/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
