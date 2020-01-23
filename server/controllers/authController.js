// Import some models Eventually
const db = require('../models/index.js');


module.exports = {

  signup: (req, res, next) => {
    const { Username: un , Password: pw, Fullname: fn , Email: e } = req.body; 
    db.query(`INSERT INTO UserTable (Username, Password, Fullname, Email)
    VALUES ('${un}', '${pw}', '${fn}', '${e}');`);
    next();
  },
  login: async (req, res, next) => {
    const { Username: un, Password: pw } = req.body;
    const result = await db.query(`select readerid
    from UserTable
    WHERE username = '${un}' AND password = '${pw}'`);
    console.log(result.rows[0]);
    if (result.rows[0] === undefined) {
      // user doesn't exist
      res.send('error');
    } else {
      const userId = JSON.stringify(result.rows[0].readerid);
      res.send(userId);
    }
  },
};
