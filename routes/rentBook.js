const express = require("express");
const { createRent } = require("../controllers/rentController");

const router = express();

// create a rent book
router.post("/", createRent);

module.exports = router;
