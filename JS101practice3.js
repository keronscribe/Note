let stars = []

function Star(n) {
  for (let i = 0; i < n; i++){
  	stars.push('*')
  }
  stars = stars.join("")
console.log(stars)
}

Star(5)

