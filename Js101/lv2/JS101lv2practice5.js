function table9to9(){
  let str = '';
  for (i = 1; i <= 9; i += 1 ){
    for (j = 1; j <= 9; j += 1){
      str += i + '*' + j + '=' + i*j ;
      if(!(i == 9 && j == 9)) {
        str += '\n';
      }
    }
  }
console.log(str)
}

table9to9()