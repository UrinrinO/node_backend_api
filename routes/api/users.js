const express = require("express");
const router = express.Router();

// @routes GET api/users/test
// @desc Tests Users routes
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
