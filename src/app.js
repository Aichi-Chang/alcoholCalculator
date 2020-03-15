function main() {

  const alcoholPercentage =  document.getElementById('alcoholPercent')
  const percentageTag = document.getElementById('percentage')
  const alcoholVolume = document.getElementById('alcoholVolume')
  const outputTag = document.getElementById('output')
  const totalTag = document.getElementById('total')
  const buttonTag = document.getElementById('button')



  // percentageTag.addEventListener('change', (input) => {    
  //   if (input < 0) input = 0
  //   if (input > 100) input = 100
  // })
  

  buttonTag.addEventListener('click', () => {

    const x = ((alcoholPercentage.value * alcoholVolume.value) / 0.75) - alcoholVolume.value
    console.log(x)
    const y = x + parseFloat(alcoholVolume.value)
    outputTag.innerHTML = x
    totalTag.innerHTML = y
    // console.log(typeof(alcoholVolume.value))
  })











}


window.addEventListener('DOMContentLoaded', main)