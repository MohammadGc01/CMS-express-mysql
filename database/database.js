const logger = require("../services/logger");
const db = require("./connection");

class database {
  constructor(tablename, feildsname, where, wherevalues, values) {
    this.tablename = tablename;
    this.feildsname = feildsname;
    if (where) this.where = where;
    if (wherevalues) this.wherevalues = wherevalues;
    if (values) this.values = values;
  }

  async SELECT() {
    let sql = ``;
    if (this.where) {
      sql = `SELECT ${this.feildsname} FROM ${this.tablename} WHERE ${this.where} = ${this.wherevalues}`;
    } else {
      sql = `SELECT ${this.feildsname} FROM ${this.tablename}`;
    }

    try {
      return await new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
          if (err) return reject(err);
          return resolve({
            success: true,
            result,
          });
        });
      });
    } catch (error) {
      const log = new logger(
        "انجام عملیات SELECT در دیتا بیس به مشکل خورد",
        `پیام خطا : ${error}`,
        "error",
        "NONE SYSTEM"
      );
      await log.save();

      return {
        success: false,
        error,
      };
    }
  }

  async INSERT() {
    const placeholders = this.values.map(() => "?").join(",");
    const sql = `INSERT INTO ${this.tablename}(${this.feildsname}) VALUES(${placeholders})`;

    try {
      return await new Promise((resolve, reject) => {
        db.query(sql, this.values, (err, result) => {
          if (err) return reject(err);
          return resolve({
            success: true,
            result,
          });
        });
      });
    } catch (error) {
      const log = new logger(
        "انجام عملیات INSERT در دیتا بیس به مشکل خورد",
        `پیام خطا : ${error}`,
        "error",
        "NONE SYSTEM"
      );
      await log.save();
      return {
        success: true,
        message: error.message,
      };
    }
  }
}

module.exports = database;
