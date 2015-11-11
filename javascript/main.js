/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope


	function generatePassword(){
		var len = 16
		,pattern = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@+"
		,newPattern = '';

		for(var i = 0; i <= len; ++i ){
			var count = pattern.length;
			var results = newPattern += pattern.charAt( Math.random() * count );	
		}

		return newPattern;
	}

	var password = generatePassword();
	console.log(password);

	// $('.js-button').on('click', function(){
	
	// 	generatePassword();

	// });
	

})();