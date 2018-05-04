"use strict";

const config = require("../../config/server");
const express = require("express");
const router = express.Router();

// Global Veriables
const port = process.env.PORT || config.port;

// Start up info
console.log("-- PROFILE --");
console.log(`  http://localhost:${port}/api/profile/ping`);

/**
 * @route   GET /api/auth/ping
 * @desc    Test posts route
 * @access  Public
 */
router.all("/ping", (req, res) => res.send("pong"));

module.exports = router;