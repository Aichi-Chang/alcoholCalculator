function main() {

  const alcoholPercentage =  document.getElementById('alcoholPercent')
  const alcoholVolume = document.getElementById('alcoholVolume')
  const outputTag = document.getElementById('output')
  const totalTag = document.getElementById('total')
  const buttonTag = document.getElementById('button')
  const waterTag = document.getElementById('water')



  alcoholPercentage.addEventListener('change', (input) => {    
    if (input.target.valueAsNumber < 0) input.target.valueAsNumber = 0
    if (input.target.valueAsNumber > 1) input.target.valueAsNumber = 1 
    // console.log(input.target.valueAsNumber)
  })

  
  
  buttonTag.addEventListener('click', () => {

    const x = ((alcoholPercentage.value * alcoholVolume.value) / 0.75) - alcoholVolume.value
    // console.log(x)
    const y = x + parseFloat(alcoholVolume.value)
    waterTag.innerHTML = Math.floor(x)
    totalTag.innerHTML = Math.floor(y)
    if (x && y) {
      outputTag.style.visibility = 'visible'
    }

   
    // console.log(typeof(alcoholVolume.value))
  })











}


window.addEventListener('DOMContentLoaded', main)