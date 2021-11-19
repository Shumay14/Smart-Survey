module.exports = {
  getSurveyList: {
    cmd: `SELECT * FROM T_SURVEY`,
  },
  getUserInterest: {
    cmd: `SELECT interests FROM T_USER`,
  },
  addSurveyItem: {
    cmd: `INSERT INTO T_SURVEY VALUES
            (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    //idx, category, img, title, desc, sdate, edate, reward, vp
  },
};
