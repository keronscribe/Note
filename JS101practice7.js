let total = 0

function findSmallCount(Array,num){
  let i = 0
  while ( i < Array.length ){
  	if(Array[i] < num){
  		total += 1
  	} i += 1
  }

}

findSmallCount([1,2,3,4,5],2)
console.log(total)