const mediaQuery800 = window.matchMedia('(max-width: 800px)')
const blockOne = document.querySelector('.blockOne')
const blockTwo = document.querySelector('.blockTwo')
const services = document.querySelectorAll('.elGrid')
const down = document.querySelector('#down')
const blockThree = document.querySelector('.blockThree')
const blockFour = document.querySelector('.blockFour')
const closeInfo = document.querySelector('.closeInfo')
const submit = document.querySelector('.submit')
const fill = document.querySelector('.fill')
const thx = document.querySelector('.thx')
let blockTwoHeight = blockTwo.scrollHeight


down.addEventListener('click', () => {
    blockTwo.style.display = `block`
    blockOne.classList.add('up')
})

closeInfo.addEventListener('click', () => {
    blockThree.style.top = `100vh`
    setTimeout(() => {
        blockThree.style.display = `none`
        blockThree.style.position = `relative`
    }, 1000);
})
fill.addEventListener('click', () => blockFour.style.top = `0`)

submit.addEventListener('click', () => {
    thx.style.display = `block`
    setTimeout(() => {
        thx.style.opacity = `1`
    }, 1);

})

services.forEach(service => {
    service.addEventListener('mouseover', () => service.style.backgroundSize = `120% 120%`)
    service.addEventListener('mouseout', () => service.style.backgroundSize = `100% 100%`)
    service.addEventListener('click', () => {
        blockThree.style.display = `block`
        blockThree.style.position = `fixed`
        setTimeout(() => {
            blockThree.style.top = `0`
        }, 1);

    })
});











function TwoBlockUp() {
    if (mediaQuery800.matches) {
        blockTwo.style.marginTop = `-${blockTwoHeight}px`
        blockTwoHeight = blockTwo.scrollHeight
    } else {
        blockTwo.setAttribute('style', '')
    }
}
console.log(blockTwoHeight)
console.log(mediaQuery800)