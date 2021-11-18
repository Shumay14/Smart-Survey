module.exports = {
    getSurveyList: {
        query: `update t_user set artist=1
                where email=? provider=?;`
    },
    addSurveyList: {
        query: `update t_user set artist=1
                where email=? provider=?;`
    },

    getUserInterest: {
        query: `update t_user set artist=1
                where email=? provider=?;`
    },
    setUserInterest: {
        query: `update t_user set artist=1
                where email=? provider=?;`
    }
}