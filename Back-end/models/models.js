const db = {
    host: "surveyzone.cqqcyxlpgd6h.ap-northeast-2.rds.amazonaws.com",
    user: "corgi",
    password: "corgi123!",
    database: "surveyzone",
    connectionLimit: 10,
};

const dbPool = require("mysql").createPool(db);
const sql = require('../config/sql.js');

module.exports = {
    sendQuery: (query, param = '', where = '') => {
        return new Promise((resolve, reject) => dbPool.query(sql[query].cmd, (error, results, fields) => {
            if (error) {
                resolve({
                    error
                })
            } else resolve(results)
        }));
    }
}