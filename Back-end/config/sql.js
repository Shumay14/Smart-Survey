module.exports = {
    getSurveyList: {
        cmd: `SELECT * FROM T_SURVEY;`
    },
    addSurveyList: {
        cmd: `update t_user set artist=1
                where email=? provider=?;`
    },

    getUserInterest: {
        cmd: `update t_user set artist=1
                where email=? provider=?;`
    },
    setUserInterest: {
        cmd: `update t_user set artist=1
                where email=? provider=?;`
    }
}