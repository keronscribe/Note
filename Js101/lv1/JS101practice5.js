function isUpperCase(str){
	let code = str.charCodeAt(0)
	if(code >= 65 && code <=90){
		return true
	}else{
		return false
	}

}
console.log(isUpperCase("Pello"));


