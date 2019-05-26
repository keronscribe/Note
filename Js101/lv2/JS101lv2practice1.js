
function Star(n) {
  let stars =''
  let result = ''
  for (let i = 1; i <= n; i++){
   	stars = '*'.repeat(i)+ '\n'
   	result += stars
  }
  console.log(result)
  return result
}
console.log(Star(6))