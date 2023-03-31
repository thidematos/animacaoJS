const box = document.querySelector('.box')
const main = document.querySelector('#main');

document.querySelector('#btn').addEventListener('click', function(){
    box.classList.add('drop');
    main.style.filter = 'brightness(30%)'
})

document.querySelector('.x').addEventListener('click', function(){
    box.classList.remove('drop');
    main.style.filter = 'none'
})