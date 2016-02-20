var config = require("./config/config")
var APP_ROOT = config.APP.ROOT.DIR.PATH

var express = require('express')
var app = express()
var path = require("path")

app.use(express.static( APP_ROOT +  '/public' ))

app.get('/angular2/*', function(req, res){
  var index_html = APP_ROOT + "/public/angular2/index.html"
  res.sendFile(index_html)
})

app.get('*', function(req, res){
  var index_html = APP_ROOT + "/public/index.html"
  res.sendFile(index_html)
})

app.listen(3001)
