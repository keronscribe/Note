  function position(str){
  	let i = 0;
  	let code = 0;
  	let capital = -1;
  for ( i = 0; i < str.length; i += 1) {
    code = str.charCodeAt(i)
    if(code >= 65 && code <= 96) {
    	let cha = String.fromCharCode(code)
    	capital = 1
    return (cha+" "+ i);
	} 
	}
	if(capital = -1) {
		return capital;
   }	
  }

console.log(position('abcd'));