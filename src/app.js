function main() {

  const alcoholPercentage =  document.getElementById('alcoholPercent')
  const alcoholVolume = document.getElementById('alcoholVolume')
  const outputTag = document.getElementById('output')
  const totalTag = document.getElementById('total')
  const buttonTag = document.getElementById('button')
  const waterTag = document.getElementById('water')
  const lowerThan75Tag = document.getElementById('lowerThan75')



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

    if (alcoholPercentage.value < 75) {
      outputTag.style.visibility = 'hidden'
      lowerThan75Tag.style.visibility = 'visible'
      lowerThan75Tag.innerHTML = 'The alcohol percentage is lower than 75%'
    } else if (x && y) {
      lowerThan75Tag.style.visibility = 'hidden'
      outputTag.style.visibility = 'visible'
      waterTag.innerHTML = Math.floor(x)
      totalTag.innerHTML = Math.floor(y)
    } 


    // console.log(typeof(alcoholVolume.value))
  })











}


window.addEventListener('DOMContentLoaded', main)