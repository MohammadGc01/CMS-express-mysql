const Logger = require("../services/logger");
const db = require("./connection");

class database {
  constructor(tablename, feildsname, where, wherevalues, values) {
    this.tablename = tablename;
    if (feildsname) this.feildsname = feildsname;
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
      const log = new Logger(
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
      const log = new Logger(
        "انجام عملیات INSERT در دیتا بیس به مشکل خورد",
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

  async DELETE() {
    const sql = `DELETE FROM ${this.tablename} WHERE ${this.where} = ?`;
    console.log(sql);

    try {
      return await new Promise((resolve, reject) => {
        db.query(sql, this.wherevalues, (err, result) => {
          if (err) return reject(err);
          return resolve({
            success: true,
            result,
          });
        });
      });
    } catch (error) {
      const log = new Logger(
        "انجام عملیات DELETE در دیتا بیس به مشکل خورد",
        `پیام خطا : ${error}`,
        "error",
        "NONE SYSTEM"
      );
      await log.save();
      console.log(error);

      return {
        success: false,
        error,
      };
    }
  }
}

module.exports = database;
