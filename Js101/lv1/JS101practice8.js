function findSmallerTotal(Array,num) {
	let smallerSum = 0
	let i = 0
	while ( i < Array.length ) {
  	if (Array[i] < num){
  		smallerSum += Array[i];
  	} i += 1
  }
  return smallerSum
}



console.log(findSmallerTotal ([1,2,3,4,5],4))