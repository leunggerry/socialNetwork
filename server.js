import express from "express";
import cors from "cors";

const app = express();
//set the app to use cors
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello, social network clone!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
