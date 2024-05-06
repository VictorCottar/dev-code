const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pergunta = db.define('perguntas', {
    pergunta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resposta_correta: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    resposta_errada_1: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    resposta_errada_2: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    resposta_errada_3: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Pergunta;