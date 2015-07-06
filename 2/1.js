var c = [1, 1, 2, 2, 2, 2,1,1,1];
function find_integer (a) {
	var Qty = 0;
	var number = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] % 1 === 0 && number!==a[i]) {
			var highScore = 1;
			for (var j = i+1; j < a.length; j++) {
				if(a[i]===a[j]){
					highScore++;
					if(highScore >= Qty){
						Qty = highScore;
						if (a[i] > number) {
							number = a[i];
						};
					}
				}
			}
		}
	};
	return "Qty: "+ Qty + ", " + "number: " + number;
}
find_integer(b);