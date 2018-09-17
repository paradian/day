var container = document.getElementsByClassName('container')[0]
container.addEventListener('click',(e) => {
    console.log(container.style)
    container.style.backgroundColor = 'blue';
})