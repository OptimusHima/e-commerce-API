const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("new_database", "postgres", "1234", {
  // creating a new instance of the Sequelize class(constructor function)
  host: "localhost",
  dialect: "postgres",
});

// Test for Database connection

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully!"
    );
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
})();
module.exports = sequelize;
