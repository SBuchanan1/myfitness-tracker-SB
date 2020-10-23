const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker" {
    useNewUrlParser: true,
    useFindAndModify: false,

});

// // routes
app.use(require(".routes/html-routes"));
app.use(require(".routes/html-routes"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

app.use(workoutController);
require("./controllers/htmlRoutes")(app);
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT);
});