const { save_to_database } = require("../controller/log_controller");

class Logger {
  constructor(title, message, level, ip) {
    this.title = title;
    this.message = message;
    this.level = level;
    this.ip = ip;
  }

  async save() {
    await save_to_database(this.title, this.message, this.level, this.ip);
  }
}

module.exports = Logger;
