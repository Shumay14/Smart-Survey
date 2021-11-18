module.exports = {
    getSurveyList: {
        cmd: `SELECT * FROM T_SURVEY;`
    },
    addSurveyItem: {
        cmd: `INSERT INTO T_SURVEY VALUES
            (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        //idx, category, img, title, desc, sdate, edate, reward, vp
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