"use strict";

// TODO: refactor to auth.controller.js, all method function should be in the format of `router.<method>(<url>, <controller>.<function>)`
import express from "express";
import {checkPasswordValid, checkUsernameValid} from "../helpers/checkvalidation";
import User from "../models/user";
import {generateToken} from "../helpers/authentification.helper";
import {UserAlreadyExistError} from "../errors";

var router = express.Router();

router.get("/", function (req, res, next) {
  const form = {};
  console.log(res.formContent);
  if (req.query.username)
    form.username = req.query.username;
  res.render("register", {
    "formError": {},
    "alerts": [],
    "form": form
  });
});

router.post("/", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  let renderContext = {
    "formError": {},
    "alerts": [],
    "form": req.body
  };

  /* ------- Check username and password validness ------- */
  const validUsername = checkUsernameValid(username);
  const validPassword = checkPasswordValid(password);

  if (!validUsername.state) {
    renderContext.formError.username = validUsername.error;
    res.render("register", renderContext);
    return;
  } else if (!validPassword.state) {
    renderContext.formError.password = validPassword.error;
    res.render("register", renderContext);
    return;
  }

  User.init().then(() => {
    return User.findOne({username})
  }).then(user => {
    if (user) {
      throw new UserAlreadyExistError();
    }
  }).then(() => {
    return User.create({password, username})
  }).then(() => {
    const token = generateToken(username);
    res.cookie("token", token);
    res.redirect("/tutorial");
  }).catch(err => {
    console.log(err);
    if (err instanceof UserAlreadyExistError) {
      renderContext.formError.username = err.message;
    }
    res.render("register", renderContext);
  });
});

export default router;