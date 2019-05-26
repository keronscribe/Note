function findMinindex(arr) {
let minindex
let min = arr[0]
for(let i = 1 ; i < arr.length; i += 1){
  if(arr[i] < min){
  minindex = i;
  }
  }
  return minindex;
}
function findMin(arr) {
let min = arr[0];
for(let i = 1 ; i < arr.length; i += 1){
  if(arr[i] < min){
  min = arr[i];
  }
  }
  return min;}


function findNthMin(arr,n) {
for(let i = 1 ; i < n; i += 1){
 arr = arr.splice((findMinindex(arr),1));
  }
return findMin(arr);
}

console.log(findNthMin([1, 1, 1, 1, 1], 2))