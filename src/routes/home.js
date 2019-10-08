"use strict";
import express from "express";

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home", {
    "alerts": [],
  });
});

router.get('/logout', function(req, res) {

});


export default router;