var values = {
  one: 'These',
  two: ' are',
  three: ' the',
  four: ' property',
  five: ' values.'
} 

for(var key in values) {
  console.log(values[key])
}

/*
  In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
*/

for(var key in values) {
  console.log(key)
}