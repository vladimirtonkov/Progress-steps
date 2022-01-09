
const BtnProgressPrev = document.querySelector('.progress__btn-prev')
const BtnProgressNext = document.querySelector('.progress__btn-next')
const ProgressItems = document.querySelectorAll('.progress__item')
const progressLine = document.querySelector('.progress__line')

let index = 1
let progress = 100 / (ProgressItems.length - 1)
let step = 0

if (BtnProgressNext) {
  BtnProgressNext.addEventListener('click', () => {
    if (index < ProgressItems.length) {
      ProgressItems[index].classList.add('active-item')
      index++
  
      step += progress
      progressLine.style.width = step + "%"
      // console.log(progress);
      BtnProgressPrev.disabled = false
  
      if(index === ProgressItems.length) {
        BtnProgressNext.disabled = true
        // BtnProgressNext.setAttribute('disabled', 'disabled')
        progressLine.style.width = "100%"
        step = 100
      }
    } 
  })
}



if (BtnProgressPrev) {
  BtnProgressPrev.addEventListener('click', () => {

    if (index > 0) {
      index--
      ProgressItems[index].classList.remove('active-item')
      step -= progress
      progressLine.style.width = step + "%"
      console.log(step);
  
  
      BtnProgressNext.disabled = false
  
      if(index === 1) {
        BtnProgressPrev.disabled = true
        // BtnProgressPrev.setAttribute('disabled', 'disabled')
        progressLine.style.width = "0%"
        step = 0
      }
    } 
  })
}

