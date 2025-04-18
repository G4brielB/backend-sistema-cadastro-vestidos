import express from 'express';
import mysql from "mysql2";


const port = 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extends:false}))

const conexao = mysql.createConnection({
    host: "127.0.0.1",
    user:"root",
    password:"1234",
    database:"vestido"
})

conexao.connect((erro) => {
    if(erro) throw erro;
    console.log("conectado com sucesso!")
});


let vestidos = []

app.post('/vestidos' , (req, res) => {
    let codigoVestido = req.body.cod_vestido;
    let nomeVestido = req.body.nome;
    let imagem = req.file.imagem.name;
    
    let sql = `INSERT INTO vestidos (codigo_vestido, nome_vestido, imagem) VALUES ('${codigoVestido}', '${nomeVestido}','${imagem}')`;
    
    conexao.query(sql, (erro, callback) => {
        
        if(erro) throw erro;
        
        console.log(callback)
        
    })
    
    res.redirect('/');
    
}) 

app.get('/vestidos', (req,res) => {
    res.json(vestidos);
})


app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
