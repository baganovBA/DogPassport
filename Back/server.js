const express = require('express')
const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

let pets = [
    // {   id:1,
    //     name:"sharik",
    //     breed:'malinua',
    //     weight:'2',
    //     birthday:'',
    //     vaccination:[
    //         // {  id:'1',
    //         //     disease:'Бешенство',
    //         //    date:"11/01/2020",
    //         //    newDate:'11/01/2021'
    //         // },
    //         // {  id:'2',
    //         //     disease:'Клещ',
    //         //    date:"11/01/2020",
    //         //    newDate:'11/01/2021'
    //         // }
    //     ]
    // },
    // {   id:2,
    //     name:"bobik",
    //     breed:'malinua',
    //     weight:'2',
    //     birthday:'',
    //     vaccination:[
    //         // {  id:'1',
    //         //     disease:'Клещ',
    //         //    date:"11/10/2020",
    //         //    newDate:'11/12/2020'
    //         // },
    //         // {  id:'2',
    //         //     disease:'Хвощ',
    //         //    date:"11/10/2020",
    //         //    newDate:'11/12/2020'
    //         // }
    //     ]
    // }
]

let petId = 3

app.get('/user',(req,res)=>{
    res.status(200).json(pets)
})

app.get('/pet/:id', (req,res)=>{
    let findPet = pets.filter((pet) => pet.id === parseInt(req.params.id))
    findPet = findPet[0]
    res.json(findPet)
})

app.put('/pet/:id', (req,res)=>{
    let petId = pets.findIndex((pet)=> pet.id === parseInt(req.params.id))
    const oldPet = pets[petId]
    pets[petId] = {...oldPet, ...req.body}
    res.json(pets[petId])

})

app.post('/pet', (req,res)=>{
    pets.push({id:petId, ...req.body, vaccination:[]})
    petId++
    res.status(200).send()

})

app.post('/vaccination/:id', (req,res)=>{
    let petId = pets.findIndex((pet)=> pet.id === parseInt(req.params.id))
    pets[petId].vaccination.push(req.body)
    console.log(pets[petId])
    res.json(pets[petId])

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