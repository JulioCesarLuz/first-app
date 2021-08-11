const express = require("express");
const routes = require("./routes");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port = 3000;
const address = "localhost";

global.users =[
    {name:"Júlio C. L. G. Costa",address:"Rua do SMD, 1337",email:"juliocesarluz@alu.ufc.br",age:19,height:1.83,vote:true},
    {name:"Caio Vinicius Bezerra Abreu",address:"Rua da Beleza, 777",email:"caiao@virtual.ufc.br",age:19,height:1.75,vote:true},
    {name:"Jhonatan dos Santos Bastos",address:"Rua do A A Follow, 2331",email:"joaonathan@virtual.ufc.br",age:19,height:1.70,vote:true}];


app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use('/', routes);

const server = app.listen(port, address, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});