const { application } = require('express');
const express = require('express');

const app = express();
//abaixo estou criando um server. com "node index.js" no terminal eu faço com que ele se inicie
app.listen('3000');

// req (requisiçao) é oq vem na rota
// res (resposta) é oq eu vou responder
app.route('/').get( (req,res) => res.send("hello") )
app.route('/sobre').get( (req,res) => res.send("hello sobre") )