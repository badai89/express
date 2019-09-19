//  routes index.js
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res, next) => {
            res.send({
                title: "express",
                
            });
});

module.exports = router