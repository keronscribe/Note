//for n >=2, fib(n) = fib(n-1) + fib(n-2)

function fin(n){
 let  num = 0;
  if (n == 0) {
  num  = 0;
  }
  if (n == 1){
    num = 1;
  }
  if (n >= 2){
	  num = fin(n-1) + fin (n-2);
  }
  return num;
}


console.log(fin(0))
   