function sort(arr){
  let newarray = []
  let min = arr[0]
  for(let j = 0; j < arr.length; j += 1){
  for(let i = 0; i < arr.length; i += 1){
  	if(arr[i] < min){
  		min = arr[i]
  	}
  }newarray.push(min)
}return newarray
}
console.log(sort([ 6, 8, 3, 2]))