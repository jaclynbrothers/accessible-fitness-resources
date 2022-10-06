const btnToggleVision = document.querySelector('.btn-toggle-vision')

btnToggleVision.addEventListener('click', () => {
    const visionBtnList = document.querySelector('.vision-nav')

    if (visionBtnList.style.display === 'none'){
        visionBtnList.style.display = 'block'
    }else{
        visionBtnList.style.display = 'none'
    }
    console.log(visionBtnList.style.display)
})