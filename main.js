window.pNode = document.querySelector('#circle-bw')


document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  var divNode = document.querySelector('.answer-box')
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector('#compoundInvestment')
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var colorNode = document.querySelector('#circle-bw')
  if (colorNode.style.backgroundColor != 'black') {
  	return colorNode.style.backgroundColor = 'black'
  	}
  	else {
  		return colorNode.style.backgroundColor = 'white'
  	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})