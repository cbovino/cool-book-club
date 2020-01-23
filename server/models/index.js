const { Pool } = require('pg');

// Connection to database
const pool = new Pool({
  connectionString: 'postgres://pomtfaqf:F7zlvM0Aj0QDF4uoLkVklSkVZL6dcdBu@rajje.db.elephantsql.com:5432/pomtfaqf',
});

// Module.export becomes this object with a query towards the pool
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
