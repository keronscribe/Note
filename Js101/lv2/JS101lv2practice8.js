function swap(str) {
  let result = '';
  let strArray = [];

for (let i = 0; i <= str.length; i += 1 ){
  let code = str[i]
  if (code >= 'a' && code <= 'z') {
    strArray.push(str[i].toUpperCase());
  }
  if (code >= 'A' && code <= 'Z') {
    strArray.push(str[i].toLowerCase());
      console.log(strArray)
    }
 // if (code < 'a' ) {
  //strArray.push(str[i]);
  //console.log(strArray)
//    }
      console.log(strArray)

  }  
     result = strArray.join('');
     return result;
}

console.log(swap('Hello!')) 

console.log(('Z'.charCodeAt(0)))

//不知道要怎樣才能處理符號。