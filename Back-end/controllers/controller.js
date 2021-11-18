const mariaDB = require('../models/mariadb');

module.exports = {
    getSurveyList: async (req, res) => {
        try {
            console.log('getSurveyList');
            const queryResult = await mariaDB.sendQuery("getSurveyList")
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
    getFilteredSurveyList: async (req, res) => {
        try {
            console.log('getFilteredSurveyList');
            const where = ` where idx = ${req.params.index}`
            const queryResult = await mariaDB.sendQuery("getSurveyList", '', where)
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
    addSurveyItem: async (req, res) => {
        try {
            var params = Object.values(req.body);

            console.log(await mariaDB.sendQuery('addSurveyItem', params));
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