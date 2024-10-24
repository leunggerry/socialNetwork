const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5001;
//current path

//set the app to use cors
app.use(cors());

// middleware to parse JSON Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//direct all requests to the routes path
app.use(require("./routes"));

// connect to the MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetwork", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set("debug", true);

app.listen(PORT, () => {
    console.log(`Cors-enabled server is running on port ${PORT}`);
});
