
//server
const express=require('express')
const server=express()

const {
    pageLanding
}= require('./pages')

//configurar nunjucks
const nunjucks=require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})

server
//receber os dados do rec.body
.use(express.urlencoded({extended:true}))
//conficurar arquivos estaticos css,scripts,img
.use(express.static('public'))
//rotas da aplicaçao
.get('/',pageLanding)
//start do server
.listen(5500)