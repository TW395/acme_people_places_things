const express = require("express");
const server = express();

server.get("/", (req, res) => {
    try {
        // const records = await YourModel.findAll();
        res.json({ server: "working" });
    } catch (error) {
        console.log(error);
    }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;