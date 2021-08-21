const express = require("express");
const router = express.Router();



//let db = require("/.db");
// db.criarDB("minhaBaseDados");

router.use(express.static('public'));

router.get('/', (req,res)=>{
    res.render('pages/home');
});



router.get('/cadastro',(req,res)=>{

    res.render('pages/cadastro', {users:users});
});

router.get('/cadastro/insert', (req,res)=>{
    
    res.render('pages/about', {usuarios});
});

router.post('/cadastro/remove',(req,res)=>{
    let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(400).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Removed element: ${name}`
                });
            }
        }
    }
});

router.post('/cadastro/update',(req,res)=>{

    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    console.log("Dados recebidos: ",req.body);

    res.sendStatus(200);
});


router.get('/cadastro/list',(req,res)=>{

});

router.post('/cadastro/addUser',(req,res)=>{

});

router.get('/about',(req,res)=>{
    res.render('pages/about')
});

module.exports = router;