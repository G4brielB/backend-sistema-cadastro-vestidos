import express from 'express';
import mysql from "mysql2";


const port = 3000;
const app = express();
app.use(express.json())

const conexao = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"Vestidos"
})

conexao.connect((erro) => {
    if(erro) throw erro;
    console.log("conectado com sucesso!")
});


let vestidos = []

app.post('/vestidos' , (req, res) => {
    
    console.log(req)
    vestidos.push(req.body);
    res.status(201).json({message :"vestido enviado com sucesso"})
})

app.get('/vestidos', (req,res) => {
    res.json(vestidos);
})


app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000")
})