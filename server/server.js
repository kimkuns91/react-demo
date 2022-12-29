const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "https://dblockfilter.com/",
    methods: ["GET", "POST"],
    credentials: true,
}));
app.listen(8080, () => {
    console.log('Server is running on port 8080.');
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
/* All Files - React */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  