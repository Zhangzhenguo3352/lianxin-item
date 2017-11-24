var express = require('express');
var fs = require('fs')
var bodyParser = require('body-parser');

var app = express();
var compression = require('compression')

app.listen(2000,() => {
	console.log('服务启动成功 2000')
})

app.get('/',(req, res) => {
    res.send(fs.readFileSync('./page/index.html', 'utf8'))
})
app.get('/reg',(req, res) => {
    res.send(fs.readFileSync('./page/reg.html', 'utf8'))
})

app.get('/login', (req, res) => {
    res.send(fs.readFileSync('./page/login.html', 'utf8'))
})

app.get('*', (req, res) => {
    res.send(fs.readFileSync('./404.html', 'utf8'))
})

app.use(compression())









