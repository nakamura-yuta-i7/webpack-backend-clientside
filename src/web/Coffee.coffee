module.exports =
  publicFunction: ->
    $ -> 
      console.log( "Coffee" )
      $("body").append( $('<div>Coffee.coffee</div>') )
