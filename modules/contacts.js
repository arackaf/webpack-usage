class contacts{
	load(id){ 
		$.ajax('loadContact', { id: id }, function(resp) {
			this.data = resp.data;
			
			let data = [...resp.data ];
			let a = 12, b = 13;
			
			let { a: c, b: d } = { a, b }; 
		});
	}
	render(){
	}
}

export default contacts;