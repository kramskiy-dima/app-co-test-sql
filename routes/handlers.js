const db = require("../database/db_config");

const getAllUsers = (req, res, next) => {
  console.log(req.params.offset);
  const sql = `
    SELECT 
    users.id, 
    users.first_name, 
    users.last_name, 
    users.email, 
    users.gender, 
    users.ip_address, 
    SUM(users_statistic.page_views) AS [page_views], 
    SUM(users_statistic.clicks) AS [clicks]
    FROM users INNER JOIN users_statistic
    ON users.id=users_statistic.user_id
    GROUP BY users.id
  `;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({ data: rows });
  });
};

const getUserById = async (req, res, next) => {
  const sql = `
    SELECT 
    users.id, 
    users.first_name, 
    users.last_name, 
    users_statistic.date, 
    users_statistic.page_views, 
    users_statistic.clicks
    FROM users INNER JOIN users_statistic
    ON users.id=users_statistic.user_id
    where users.id = ?
`;
  const id = [req.params.id];
  db.all(sql, id, (err, rows) => {
    console.log(rows);
    if (err) return res.status(400).json({ error: err.message });
    res.json({ data: rows });
  });
};

module.exports = {
  getUserById,
  getAllUsers,
};
