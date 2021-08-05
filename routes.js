const express = require("express");
const router = express.Router();
const faker = require("faker");

let db = require("/.db");

router.use(express.static('public'));

router.get('/', (req,res)=>{
    res.render('pages/home');
});

router.get('/about', (req,res)=>{
    
    let usuarios = [];
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:fakerStatic.name.findName(), email:fakerStatic.internet.email(), avatar:faker
        .image.image()});
    }
    console.log(usuarios);
    res.render('pages/about', {usuarios});
});

router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});

router.get('/cadastro/insert',(req,res)=>{

});

router.get('/cadastro/list',(req,res)=>{

});

module.exports = router;