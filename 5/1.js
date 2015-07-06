var a = new Array(20);
var b =[2,3,8];
function offon (a,b) {
	var m = 0;
	for (var i = 0; i < a.length; i++) {
		a[i] = false;
	};
	for (var g = 0; g < b.length; g++) {
		for (var j = 0; j < a.length; j++) {
			if ((j+1)%b[g]===0) {
				a[j] = !a[j];
			};
		};
	};
	for (var n = 0; n < a.length; n++) {
		if(a[n]===false){
			m++
		};
	};
	return m
};
console.log(offon(a,b));