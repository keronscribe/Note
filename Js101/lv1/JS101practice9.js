function findAllSmall(Array,num) {
	let allSmall = []
	let i = 0
	while ( i < Array.length ) {
  	if (Array[i] < num){
  		allSmall.push(Array[i]);
  	} i += 1
  }
  return allSmall;
}

console.log(findAllSmall ([1,22,3,29,5],20))