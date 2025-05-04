const express = require("express");
const app = express();
const usersRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
