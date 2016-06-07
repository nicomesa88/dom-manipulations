window.blwUp = document.querySelector('.circle-red')


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
  if (colorNode.style.background != 'black') {
	return colorNode.style.background = 'black'
	}
	else {
		return colorNode.style.background = 'white'
		}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blwUp = document.querySelector('.circle-red')
  var cicrleStyle = window.getComputedStyle(blwUp)
  var cirWidth = parseInt(cicrleStyle.width)
  var cirHeight = parseInt(cicrleStyle.height)
  if (cirHeight && cirWidth <= 320) {
  	blwUp.style.width = (cirWidth * 2) + 'px'
  	blwUp.style.height = (cirHeight * 2) + 'px'
  } else {
  	blwUp.style.width = '40px'
  	blwUp.style.height = '40px'
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var ulNode = document.querySelector('.answer-box > ul')
  var liNodes = document.querySelectorAll('li')
  	for (var i = 0; i < liNodes.length; i++) {
  		var liNode = liNodes[i]
  		if (liNode.classList.contains('inactive')) {
  			ulNode.removeChild(liNode)
			}
		}
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