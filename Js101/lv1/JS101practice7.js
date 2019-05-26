function findSmallCount(Array,num){
  let total = 0
  let i = 0
  while ( i < Array.length ){
  	if(Array[i] < num){
  		total += 1
  	} i += 1
  }
return total 
}

console.log(findSmallCount([1,2,3,4,5],5))