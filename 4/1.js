var a = [2,8,9,6,3,7,1,5,82,8,6,4,9,3,6,8];


function main (a) {
	var l;
	var r;
	var x;

	first(a);
	function first (a) {
		var c = Math.floor(a.length/4);
		var d = a.length - c;
		var f = Math.round(Math.random()*d);
		l = 0+f;
		r = c+f;
		items =a.slice(l,r);
		return mergeSort(items);
	}

	function merge(left, right) {
	  var result = [];

	  while (left.length > 0 && right.length > 0){
	    if (left[0] < right[0]) {
	      result.push(left.shift());
	    }
	    else {
	      result.push(right.shift());
	    }
	  }
	  x = result.concat(left).concat(right);
	  return x;
	}

	function mergeSort(items) {
	  if (items.length == 1) {
	    return items;
	  }
	  var middle = Math.floor(items.length / 2),
	  left = items.slice(0, middle),
	  right = items.slice(middle);

	  return merge(mergeSort(left), mergeSort(right));
	}
	for (var i = l, j = 0; i < r; i++) {
			a[i]=x[j++];
	};
	return a;
}
main(a);