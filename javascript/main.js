/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	/**
		* @generatePassword
		* @description - generates a random password based on the characters contained the in the pattern
		* @return - returns randomly generated password
	**/
		
	function generatePassword(){
		var len = 16
		, pattern = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@+"
		, newPattern = '';

		for(var i = 0; i <= len; ++i ){
			var count = pattern.length;
			newPattern += pattern.charAt( Math.random() * count );	
		}

		return newPattern;
	}

	// var password = generatePassword();
	// console.log(password);
	
	/**
		* @description - click events that calls on generatePassword function
		* @return - displays generated password in the browser
	**/

	$('.js-button').on('click', function(e) {
		e.preventDefault();
		console.log('clicked');
		$('.js-results').html( generatePassword() );
		$('.js-results').val(''); 
	});

	/**
		*  jQuery plug-in 
		*  https://github.com/aarondo/Strength.js
	**/

	$("#myPassword").strength({
        strengthClass: 'strength',
        strengthMeterClass: 'strength_meter',
        strengthButtonClass: 'button_strength',
        strengthButtonText: 'Show password',
        strengthButtonTextToggle: 'Hide Password'
    });     

})();