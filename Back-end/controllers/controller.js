const mariaDB = require('../models/mariadb');

module.exports = {

    getQuery: async (req, res) => {
        try {
            console.log(req.params.alias);
            const queryResult = await mariaDB.sendQuery(req.params.alias)
            res.send(JSON.stringify(queryResult))
        } catch (err) {
            res.status(500).send({
                error: err,
                queryName: req.params.alias,
                bodyParams: req.body.param,
                where: req.body.where
            });
        }
    },

    postQuery: async (req, res) => {
        try {
            await mariaDB.sendQuery(req.params.alias);
            if (req.body.param.length > 0) {
                for (let key in req.body.param[0]) req.session[key] = req.body.param[0][key];
                res.send(req.body.param[0]);
            } else {
                res.send({
                    error: "Please try again or contact system manager."
                });
            }
        } catch (err) {
            res.send({
                error: "DB access error"
            });
        }
    },
}