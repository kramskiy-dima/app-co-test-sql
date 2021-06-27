const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const createUsersTable = (db) => {
  const usersData = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "./db_initials/users.json"),
      (err, data) => {
        if (err) throw err;
        return data;
      }
    )
  );
  db.run(
    `CREATE TABLE users (
          id INTEGER PRIMARY KEY,
          first_name text, 
          last_name text, 
          email text UNIQUE, 
          gender text,
          ip_address text,
          CONSTRAINT email_unique UNIQUE (email)
          )`,
    (err) => {
      if (err) {
        console.log("Table us already exists");
      } else {
        const insert =
          "INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)";
        usersData.map((user) => {
          db.run(insert, [
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.gender,
            user.ip_address,
          ]);
        });
      }
    }
  );
};

const createStatisticTable = (db) => {
  const statisticData = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "./db_initials/users_statistic.json"),
      (err, data) => {
        if (err) throw err;
        return data;
      }
    )
  );

  db.run(
    `CREATE TABLE users_statistic (
      user_id INTEGER,
      date text, 
      page_views INTEGER, 
      clicks INTEGER
          )`,
    (err) => {
      if (err) {
        console.log("Table st already exists");
      } else {
        const insert =
          "INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES (?,?,?,?)";
        statisticData.map((user) => {
          db.run(insert, [
            user.user_id,
            user.date,
            user.page_views,
            user.clicks,
          ]);
        });
      }
    }
  );
};

let db = new sqlite3.Database(
  path.resolve(__dirname, "./db.sqlite"),
  async (err) => {
    if (err) {
      console.error(err.message);
      return;
    }

    await createUsersTable(db);
    await createStatisticTable(db);
  }
);

module.exports = db;
