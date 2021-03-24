// Sets user input value of age to default.
let age = 0

// Connects button to JavaScript.
document.getElementById('submit').addEventListener('click', ages)

// Gives button a function when clicked.
function ages () {
  age = document.getElementById('age').value
  age = parseInt(age)
  date = document.getElementById('date').value
  if (age > 12 && age < 21 || (date = 'Tuesday' || 'Thursday')) {
    document.getElementById('answer').innerHTML = 'You have received 50% off due to student pricing, congratulations.'
  }
  else {
    document.getElementById('answer').innerHTML = 'You are not eligible for student pricing, sorry!'
  }
}
