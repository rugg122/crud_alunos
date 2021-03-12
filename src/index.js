//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
let id = 2;
let alunos = [{
        id: 1,
        nome: "João",
        fone: "11223344",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        fone: "55221133",
        email: "maria@email.com"
    }

];
let alunos2 = []
//tratamento de requisições POST
app.post("/alunos", (req, res, next) => {
    const aluno = {
        id: id += 1,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno)
    res.status(201).json(aluno);
});
//tratamento de requisições GET
app.get("/alunos", (req, res, next) => {
    res.status(200).json(alunos);
})
//tratamento de requisições PUT
app.put("/alunos", (req, res, next) => {
    alunos.forEach((aluno) => {
        if (aluno.id === req.body.id) {
            aluno.fone = req.body.fone;
            aluno.nome = req.body.nome;
            aluno.email = req.body.email

        }
    })

    res.status(204).end();
});

//tratamento de requisições Delete
app.delete("/alunos", (req, res, next) => {
    alunos.forEach((aluno) => {
        if (aluno.id != req.body.id)
        const aluno2 =  {
            id: aluno.id,
            fone: aluno.fone,
            nome:  aluno.nome,
            email:  aluno.email

        }
        alunos.push(aluno2)
    })
    aluno = alunos2
    res.status(204).end();
});