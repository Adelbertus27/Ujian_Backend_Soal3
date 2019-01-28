var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
router.use(bodyParser.json())

// Connect to localhost
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sekolahku'
})
db.connect(()=>{
    console.log('Database terhubung!')
})

// POST/signup
router.post('/signup', (req,res)=>{
    var dbstat = 'Silakan Signup'
    var data = {
        username: req.body.usernama,
        email: req.body.mail,
        password: req.body.pass
    } 
    db.query(dbstat, data, (error, output)=>{
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send({
                username: req.body.usernama,
                email: req.body.mail,
                password: req.body.pass,
                status: 'Data terkirim'  
            })
        }
    })
})

// POST/login
router.post('/login', (req, res)=>{
    var dbstat = 'Silakan Login'
    var data = {
        user_email: req.body.usernama,
        password_: req.body.pass
    }
    db.query(dbstat, data, ()=>{
        if(user_email == username || email, password == password_){
            res.send({
                login: 'ok',
                status: 'login sukses'
            })
        } else if(user_email == username || email, password !== password_){
            res.send({
                login: 'failed',
                status: 'Password salah'
            })
        } else{
            res.send({
                login: 'login failed',
                status: 'Akun tidak terdaftar'
            })
        }
    })
})

module.exports = router