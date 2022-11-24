'use strict'

const query = require('./db');
let output;

const initTable = async () => {
  output = await query(`CREATE TABLE IF NOT EXISTS tasks (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    completed BOOLEAN
    );`);
  return output;
}

module.exports = {

}