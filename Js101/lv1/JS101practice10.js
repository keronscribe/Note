
function findAllSmall(Array) {
	let sum = 0
	let i = 0
	while ( i < Array.length ) {
  		sum += Array[i];
  		i += 1
  } return sum
}

console.log(findAllSmall ([1,2,3,9,5]))