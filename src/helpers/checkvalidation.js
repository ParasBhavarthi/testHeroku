"use strict";

// TODO: Refactor to auth.controller.js
import {invalidUsername} from "./invalidusernamelist";

function checkUsernameValid(username) {

  if (username.length < 3) {
    return {state: false, error: "Username length should be at least 3 characters"}
  }

  if (invalidUsername.indexOf(username) > -1) {
    return {state: false, error: "This Username is not allowed, Please try different"}
  }
  return {state: true, error: null}
}


function checkPasswordValid(password) {

  if (password.length < 4) {
    return {state: false, error: "password length should be at least 4 characters"}
  }

  return {state: true, error: null}
}

export {checkUsernameValid, checkPasswordValid}
