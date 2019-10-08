"use strict";

// TODO: Move to auth.controller.js
import jwt from "jsonwebtoken";
import secrets from "../../example.secrets";
import {generateToken} from "../helpers/authentification.helper"

const validateTokenMiddleWare = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.cookies.token;
  if (token) {
    jwt.verify(token, secrets.TOKEN_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        req.username = decoded.username;
        res.cookie("token", generateToken(req.username));
        next();
      }
    })
  } else {
    res.redirect("/");
  }
};

export {validateTokenMiddleWare};