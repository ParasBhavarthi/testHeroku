"use strict";
import express from "express";
import url from "url";
import {InvalidPasswordError, UserNotExistError} from "../errors";
import {generateToken} from "../helpers/authentification.helper";

import User from "../models/user";

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login", {
    "formError": {},
    "alerts": [],
    "form": {}
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

  User.getUserByUsername(username).then(user => {
    return user.isValidPassword(password);
  }).then(valid => {
    if (!valid) {
      throw new InvalidPasswordError();
    }
  }).then(() => {
    const token = generateToken(username);
    res.cookie("token", token);
    res.redirect("/home");
  }).catch(err => {
    console.log(err);
    if (err instanceof InvalidPasswordError) {
      renderContext.formError.password = err.message;
      res.render("login", renderContext);
    } else if (err instanceof UserNotExistError) {
      renderContext.formError.password = err.message;
      res.redirect(url.format({
        pathname: "/register",
        query: {
          "username": username
        }
      }));
    }
  })

});


export default router;