let stars = []

function Star(n) {
  for (let i = 0; i < n; i++){
  	stars.push('*')
  }
  stars = stars.join("")
return stars
}

console.log(Star(4))

