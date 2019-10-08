"use strict";
import mysql from "mysql";
// import config from "../../example.models.config";
// import bcrypt from "bcryptjs";

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err)
          return reject(err);
        resolve();
      });
    });
  }

  static execute(config, callback) {
    const database = new Database( config );
    return callback( database ).then(
      result => database.close().then( () => result ),
      err => database.close().then( () => { throw err; } )
    );
  }
}

export {Database}
