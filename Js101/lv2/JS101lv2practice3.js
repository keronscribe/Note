function Star(n) {
  let stars =''
  let result = ''
  for (let i = 1; i <= n; i++){
   	stars = '*'.repeat(i)+ '\n'
   	result += stars
  }
  for (let i = n + 1; i < 2*n ; i++){
    stars = '*'.repeat(2*n - i)+ '\n'
   	result += stars
  }
  console.log(result)
  return result
}

Star(6)