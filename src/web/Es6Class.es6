module.exports = class Es6Class {
	constructor() {
		console.log( this.constructor.name );
	}
	publicMethod() {
		const $elem = $(`<div>${this.constructor.name}</div>`)
		$(()=>{
			$("body").append( $elem )
		})
	}
}
