// main.js is es5
$(function() {
	
	// img src = "data:image/png;base64 ~~~~~~~"
	var dena_logo = require("./DeNA_logo.png")
	$("body").append( $(`<img src="${dena_logo}" height="40">`) )
	
	require("./normal.css")
	$("body").append($('<div class="normal-css">normal css</div>'))
	
	require("./postcss.css")
	$("body").append($('<div class="postcss cssnext">postcss / cssnext</div>'))
	$("body").append($('<div class="postcss precss">postcss / precss</div>'))
	$("body").append($('<div class="postcss autoprefixer">postcss / autoprefixer</div>'))
	
	require("./sass.scss")
	$("body").append($('<div class="sass-scss">sass</div>'))
	
	require("./less.less")
	$("body").append($('<div class="less-less">less</div>'))

	var jade = require("./JadeTemplate.jade")()
	console.log( "JadeTemplate", jade );
	$("body").append( $(jade) )

	var Es6Class = require("./Es6Class.es6")
	var es6 = new Es6Class()
	es6.publicMethod()

	var TypescriptClass = require("./TypescriptClass.ts")
	var ts = new TypescriptClass()
	ts.publicMethod()
	
	var Coffee = require("./Coffee.coffee")
	Coffee.publicFunction()
	
	$("body").append( $('<div id="react-sample"></div>') )
	var React = require("./React.jsx")
	
})
