function table(num){
let str = ''
  for (i = 1; i <= 9; i += 1 ){
  let ans = num * i
  str += num + '*' + i + '=' + ans + '\n'
  }
console.log(str)
}


table(3)