export = class Typescript {
	// private name: string = "Typescript"
	
	constructor(
		private name: string = "Typescript"
	) {
		console.log( this.name )
	}
	publicMethod() {
		const $elem = $(`<div>${this.name}</div>`)
		$(()=>{
			$("body").append( $elem )
		})
	}
}
