const Sequelize = require('sequelize');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco feita com sucesso.');
    })
    .catch((error) => {
        console.error("Ocorreu um erro ao conectar", error);
    });

sequelize
    .sync()
    .then(() => console.log('Tabela criada com sucesso.'))
    .catch(error => console.error('Não foi possível criar as tabelas:', error));

module.exports = sequelize;