import express from 'express'

const app = express()

// app.use(express.json())

app.get('/',(req,res)=>{
return res.json({titulo:'iniciando com  json'})
})

app.listen(4343,()=>{
    console.log('conectado na porta 4343')
})