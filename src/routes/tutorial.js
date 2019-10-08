"use strict";

// TODO: The status of whether user acknowledge its understanding of the tutorial should be store in DB. Sql_user that registered but not acknowledged in this page should be redirect to this page instead of home page.
import express from "express";

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("tutorial", {
    "formError": {},
    "alerts": [],
    "form": {}
  });
});

router.post("/", function (req, res, next) {

  // Redirect to home if user acknowledged its understanding
  res.redirect("/home")
});

export default router;