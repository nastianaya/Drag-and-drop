const box = document.querySelector('.box');

window.addEventListener('load', ()=> {
    box.style.top = window.innerHeight / 2 - 50 + 'px';
    box.style.left = window.innerWidth / 2 - 50 + 'px';
})


let isMove = false;
box.addEventListener ('mousedown', ()=>{
    isMove = true;
})

box.addEventListener('mouseup', ()=>{
    isMove = false;
})

box.addEventListener('mousemove', (event)=> {
    if(isMove){
    let coordX = event.clientX;
    let coordY = event.clientY;
    box.style.left = coordX - 50 + 'px'
    box.style.top = coordY - 50 + 'px'}
})

box.addEventListener('mouseleave', (event)=> {
    if(isMove){
    let coordX = event.clientX;
    let coordY = event.clientY;
    box.style.left = coordX - 50 + 'px'
    box.style.top = coordY - 50 + 'px'}
})