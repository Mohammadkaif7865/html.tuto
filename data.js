const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.set('view engine ','pug')
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/',function(req,res){
    res.sendFile('project2.html',{root: __dirname })
});
app.post('/submit',function(req,res){
    console.log(req.body);
    res.render('index',{title : 'Data saved',
          message: 'Data saved successfully',})
})
app.listen(port ,()=> console.log('Example app is listening on porst side'))