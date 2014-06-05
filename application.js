$(document).ready(function(){

	$(".compute").click(function(){
		x = parseInt($("#x").val());
		y = parseInt($("#y").val());
		expression = $(this).val();

		// Check that value is number
		if (isNaN(x) || isNaN(y)){
			alert("Please enter a number!");
			return false;
		}

		// Compute total 
		switch(expression) {
			case '+':
				total = x + y;
				break;
			case '-':
				total = x - y;
				break;
			case 'x':
				total = x * y;
				break;
			case '/':
				total = x / y;
				break;
			default:
				console.log(expression);
		}

		$(".answer").empty();
		$(".answer").prepend(x + " " + expression + " " + y + " = " + total)
					.hide()
					.fadeIn('slow');
	});

});