"use strict";
import express from "express";

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("publicChat", {
    "alerts": []
  });
});

export default router;