var container = document.getElementsByClassName('container')[0]
container.addEventListener('click',(e) => {
    console.log(container.style,'use .')
   console.log(container.getAttribute('style'),'use getAttribute') 
   console.log(container.getAttribute,'hello')
   container.setAttribute('style','')
    setTimeout(() => {
        container.style.backgroundColor = 'blue'
        console.log(container.getAttribute('style'))
        } ,3000)
    
})