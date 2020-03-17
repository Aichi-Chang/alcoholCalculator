function main() {

  const alcoholPercentage =  document.getElementById('alcoholPercent')
  const alcoholVolume = document.getElementById('alcoholVolume')
  const outputTag = document.querySelector('.output')
  const outputTag2 = document.querySelector('.output2')
  const outputTag3 = document.querySelector('.output3')
  const totalTag = document.getElementById('total')
  const buttonTag = document.getElementById('button')
  const waterTag = document.getElementById('water')
  // const lowerThan75Tag = document.getElementById('lowerThan75')



  alcoholPercentage.addEventListener('change', (input) => {    
    if (input.target.valueAsNumber < 0) input.target.valueAsNumber = 0
    if (input.target.valueAsNumber > 100) input.target.valueAsNumber = 100 
    // console.log(input.target.valueAsNumber)
  })

  alcoholVolume.addEventListener('change', (input) => {    
    if (input.target.valueAsNumber < 0) input.target.valueAsNumber = 0
    // console.log(input.target.valueAsNumber)
  })
  
  
  
  buttonTag.addEventListener('click', () => {

    const x = (((alcoholPercentage.value / 100) * alcoholVolume.value) / 0.75) - alcoholVolume.value
    const y = x + parseFloat(alcoholVolume.value)

    if (alcoholPercentage.value == 75) {
      outputTag.innerHTML = 'The alcohol percentage is exactly 75%'
      
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'hidden'
      outputTag3.style.visibility = 'hidden'

    } else if (alcoholPercentage.value < 75) {

      outputTag.innerHTML = 'The alcohol percentage is lower than 75%'
      
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'hidden'
      outputTag3.style.visibility = 'hidden'

    } else if (x && y) {

      outputTag.innerHTML = 'You need to add '
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'visible'
      outputTag3.style.visibility = 'visible'

      var spanElemx = document.createElement('spanx')
      var spanElemy = document.createElement('spany')

      spanElemx.appendChild(document.createTextNode(Math.floor(x)))
      outputTag.appendChild(spanElemx)
      spanElemy.appendChild(document.createTextNode(Math.floor(y)))
      outputTag2.appendChild(spanElemy)
      // waterTag.innerHTML = Math.floor(x)
      // totalTag.innerHTML = Math.floor(y)

    } 


    // console.log(typeof(alcoholVolume.value))
  })











}


window.addEventListener('DOMContentLoaded', main)