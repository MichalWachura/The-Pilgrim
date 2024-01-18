//====================== SMOOTH SCROLL ======================\

const header = document.querySelector('header');
const arrowUp = document.querySelector('.arrow-top')



arrowUp.addEventListener('click',function(){
    console.log('janeja')
    header.scrollIntoView({behavior: 'smooth'})
})
