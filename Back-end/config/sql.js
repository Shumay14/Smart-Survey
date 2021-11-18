module.exports = {
    getSurveyList: {
        cmd: `SELECT * FROM T_SURVEY`
    },
    addSurveyItem: {
        cmd: `INSERT INTO T_SURVEY VALUES
            (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        //idx, category, img, title, desc, sdate, edate, reward, vp
    },
}