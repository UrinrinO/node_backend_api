const express = require("express");
const router = express.Router();

// @routes GET api/profile/test
// @desc Tests Profile routes
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
