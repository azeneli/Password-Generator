/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope


	function generatePassword(){
		var len = 16
		,pattern = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@+"
		,newPattern = '';

		for(var i = 0; i <= len; ++i ){
			var count = pattern.length;
			newPattern += pattern.charAt( Math.random() * count );	
		}
		return newPattern;
	}

	// var password = generatePassword();
	// console.log(password);

	// function getNewPassword(){
	// 	$('.js-results').html( generatePassword() );
	// }

	$('.js-button').on('click', function() {
		$('.js-results').html( generatePassword() ); 
	});

	// $('.js-button').on('click', function(){
	
	// 	generatePassword();

	// });
	

})();