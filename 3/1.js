var m = {
	a:2,
	b:{
		c:4,
		d:{
			g:5,
			n:8,
			h:{}
		}
	}
}
res = {}
function poh (a) {
			for (var key in a){
				var element = a[key];
				if (typeof(element)==="object") {
					if (Object.keys(element) == '') {
						res[key]=undefined
					}
					else {
						poh(element)
					}
				}
				else {
					res[key]=element
				}
			}
			return res	
			}
poh(m);