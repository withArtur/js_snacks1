// run with: node ./shortest_word/js_snack_shortest_word.js

function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

console.info(findShort("bitcoin take over the world maybe who knows perhaps")); // 3