const express = require('express');
const app = express();
const Pergunta = require('./models/Pergunta');
const Sequelize = require('sequelize');
const { engine } = require('express-handlebars');
const path = require('path');
const fs = require('fs');


const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta: ${PORT}`);
});   

// HANDLEBARS
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');


// ROTAS
app.get('/', (req, res) => { 
    res.render('home');
});


app.get('/perguntas', (req, res) => {
  Pergunta.findOne({
    order: Sequelize.literal('random()')
  })
  .then(pergunta => {
    
    res.render('questions', { pergunta: pergunta });
  })
  .catch(err => console.log('Não foi possível buscar pergunta', err)); 
});


app.get('/endgame', (req, res) => {
  res.render('endgame', { score: req.query.score });
});

app.get('/public/styles.css', function(req, res) {
    fs.readFile(__dirname + '/public/styles.css', 'utf8', function(err, data) {
    if (err) {
        console.error('Erro ao ler o arquivo CSS:', err);
        return res.status(500).send('Erro interno do servidor');
    }
  
    res.setHeader('Content-Type', 'text/css');
  
    res.send(data);

});
});