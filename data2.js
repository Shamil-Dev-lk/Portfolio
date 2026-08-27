const Database = require('better-sqlite3');
const db = new Database('dev.db');
const projects = db.prepare("SELECT * FROM Project").all();
console.log(projects);
