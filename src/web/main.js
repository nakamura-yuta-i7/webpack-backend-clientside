// main.js is es5
$(function() {
	
	// img src = "data:image/png;base64 ~~~~~~~"
	var logo_base64 = require("./logo-ang2.png")
	$("body").append( 
		$("<div style='background:RGBA(11,116,213, 1);'></div>").append(
			$('<p style="color:#fff;">＜img src = data:image/png;base64 ~~~~~~~＞サンプル</p>')
		).append(
			$('<a href="/angular2/"><img src="'+ logo_base64 +'" height="40"></a>')
		)
	)
	
	require("./normal.css")
	$("body").append($('<div class="normal-css">normal css</div>'))
	
	require("./postcss.css")
	$("body").append($('<div class="postcss cssnext">postcss / cssnext</div>'))
	$("body").append($('<div class="postcss precss">postcss / precss</div>'))
	$("body").append($('<div class="postcss autoprefixer">postcss / autoprefixer</div>'))
	
	require("./sass.scss")
	$("body").append($('<div class="sass-scss">sass / autoprefixer</div>'))
	
	require("./less.less")
	$("body").append($('<div class="less-less">less / autoprefixer</div>'))

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
