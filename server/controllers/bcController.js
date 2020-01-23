// Import some models Eventually
const db = require('../models/index.js');

module.exports = {
  addClub: (req, res, next) => {
    const { BookName: bn , Author: a } = req.body;
    db.query(`INSERT INTO BookClubs (BookName, Author)
    VALUES ('${bn}', '${a}')`);
    next();
  },
  getClubs: async (req, res, next) => {
    const result = await db.query(`SELECT clubid, bookname, author
    FROM   Bookclubs 
    WHERE  clubid NOT IN ( select bookclubid from clubinfo where userid = ${req.params.id})
    `);
    res.send(result.rows);
  },
  joinTheClub: (req, res, next) => {
    const { bookclubid: id1, userId: id2 } = req.body;
    db.query(`INSERT INTO Clubinfo (bookclubid, userid)
    VALUES (${id1}, ${id2})`);
    res.send('thanks for joining the club');
  },

  getMyClubs: async (req, res, next) => {
    const newResult = await db.query(`SELECT clubid, bookname, author
    FROM   Bookclubs 
    WHERE  clubid IN ( select bookclubid from clubinfo where userid = ${req.params.id})
    `);
    res.send(newResult.rows);
  },

  sendClubMessage: (req, res, next) => {
    const { Message: m, bookClubid: bcid, userId: ui } = req.body;
    db.query(`INSERT INTO Messages (message, bookClubid, userid)
    VALUES ('${m}', ${bcid}, ${ui})`);
    next();
  },

  getClubMessage: async (req, res, next) => {
    console.log(req.params.id);
    const newMessage = await db.query(`SELECT message, fullname FROM Messages LEFT JOIN UserTable
    ON Messages.userid = UserTable.readerid where bookclubid = ${req.params.id}`);
    res.send(newMessage.rows);
  },
};
