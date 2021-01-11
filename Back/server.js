const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

let pets = [
    {   id:1,
        name:"sharik",
        breed:'malinua',
        weight:'2',
        birthday:'',
        vaccination:[
            {  id:'1',
                disease:'Бешенство',
               date:"11/01/2020",
               newDate:'11/01/2021'
            }
        ]
    },
    {   id:2,
        name:"bobik",
        breed:'malinua',
        weight:'2',
        birthday:'',
        vaccination:[
            {  id:'',
                disease:'',
               date:"",
               newDate:''
            }
        ]
    }
]


app.get('/user',(req,res)=>{
    res.status(200).json(pets)
})

app.get('/vaccination/:id', (req,res)=>{
    let findPet = pets.filter((pet)=> pet.id === parseInt(req.params.id))
    let a = findPet[0]
    console.log(a)
    res.json(a.vaccination)
})




app.listen(5000, ()=>{
    console.log('App listened on 5000 port!')
})