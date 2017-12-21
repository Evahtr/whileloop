// all numbers between -10 to 20
var num = -10

while(num <= 20){
	console.log(num)
	num++
}

// all even numbers
var even = 10

while(even <= 20){
	console.log(even)
	even += 2
}

// all odd numbers
var odd = 301

while(odd < 333){
	console.log(odd)
	odd += 2
}

// all numbers divisible by 5 or 3
var div = 5

while(div <= 50){
	if(div % 5 === 0 || div % 3 === 0){
		console.log(div)
	}
	div++
}