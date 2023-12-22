// Server Create
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiRouter = require("./routes/api.js");

const PORT = process.env.PORT || 3001;
const DATABASE = "mongodb+srv://Admin:4wi85OaW0ikqAJwH@cluster0.jad30fk.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

mongoose.connect(DATABASE)
.then(() => {
    console.log("DB is connected");
})
.catch((err) => {
    console.log(err);
});


app.use(express.json());

app.use("/api" , apiRouter); 