function main() {

  const alcoholPercentage =  document.getElementById('alcoholPercent')
  const alcoholVolume = document.getElementById('alcoholVolume')
  const outputTag = document.querySelector('.output')
  const outputTag2 = document.querySelector('.output2')
  const outputTag3 = document.querySelector('.output3')
  const buttonTag = document.getElementById('button')




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

    if (!y) { 

      outputTag.innerHTML = 'There is no input.' 
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'hidden'
      outputTag3.style.visibility = 'hidden'


    } else if (alcoholPercentage.value == 75) {

      outputTag.innerHTML = 'The alcohol percentage is exactly 75%'
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'hidden'
      outputTag3.style.visibility = 'hidden'


    } else if (alcoholPercentage.value < 75) {

      outputTag.innerHTML = 'The alcohol percentage is lower than 75%'
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'hidden'
      outputTag3.style.visibility = 'hidden'

    } else if (alcoholPercentage.value > 75) {

      outputTag.innerHTML = 'You need to add '
      outputTag2.innerHTML = ' water to make '
      outputTag.style.visibility = 'visible'
      outputTag2.style.visibility = 'visible'
      outputTag3.style.visibility = 'visible'

      outputTag.appendChild(document.createTextNode(Math.ceil(x)))
      outputTag.appendChild(document.createTextNode('ml'))
      outputTag.appendChild(document.createTextNode('\u00A0'))

      outputTag2.appendChild(document.createTextNode(Math.ceil(y)))
      outputTag2.appendChild(document.createTextNode('ml'))
      outputTag2.appendChild(document.createTextNode('\u00A0'))
    } 

    // console.log(typeof(alcoholVolume.value))
  })











}


window.addEventListener('DOMContentLoaded', main)