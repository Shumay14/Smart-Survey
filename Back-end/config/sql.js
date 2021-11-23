module.exports = {
  getSurveyList: {
    cmd: `SELECT * FROM T_SURVEY`,
  },
  getUserInterest: {
    cmd: `SELECT interests FROM T_USER`,
  },
  getUserVclist: {
    cmd: `SELECT vclist FROM T_USER`,
  },
  addSurveyItem: {
    cmd: `INSERT INTO T_SURVEY VALUES
            (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    //idx, category, img, title, desc, sdate, edate, reward, vp, url
  },
  addUserItem: {
    cmd: `INSERT INTO T_USER (NULL, ?, ?, ?, NULL)`,
    //idx, account, kakao, interests, vclist
  },
  registerVC: {
    cmd: `INSERT INTO T_USER(vclist) VALUES(?, ?, ?, ?)`,
    //name, gender, age, income
  }
};
