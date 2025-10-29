const express = require('express');

const router = express.Router();

router.post("/off-day", (req, res) => {
    // Logic to handle marking a day as off
    res.send("Day marked as off successfully");
});

router.delete("/off-day/:date", (req, res) => {
    // Logic to handle unmarking a day as off
    res.send("Day unmarked as off successfully");
});

router.get("/", (req, res) => {
    // Logic to retrieve all off days
    res.send("List of all off days");
});

module.exports = router;