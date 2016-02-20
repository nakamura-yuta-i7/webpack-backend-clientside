var config = require("./config/config")

var express = require('express')
var app = express()

app.use(express.static( config.APP.ROOT.DIR.PATH +  '/public' ))
app.get('*', function(req, res){
  var path = require("path")
  var index_html = config.APP.ROOT.DIR.PATH + "/public/index.html"
  res.sendFile(index_html)
})

app.listen(3001)
