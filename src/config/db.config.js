module.exports = {
  HOST: "ps8.mysql.database.azure.com",
  USER: "Aniket",
  PASSWORD: "Admin@ps8",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
