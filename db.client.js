const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://clyde_db_user:CR7NETzzVeK4KkN3yKX648JexmRix5p2@dpg-cv3cfalds78s73bc4hd0-a.frankfurt-postgres.render.com/clyde_db', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;