// var container = document.getElementsByClassName('container')[0]
// container.addEventListener('click',(e) => {
//     console.log(container.style,'use .')
//    console.log(container.getAttribute('style'),'use getAttribute') 
//    console.log(container.getAttribute,'hello')
//    container.setAttribute('style','')
//     setTimeout(() => {
//         container.style.backgroundColor = 'blue'
//         console.log(container.getAttribute('style'))
//         } ,3000)
    
// })
window.addEventListener('load',function (){
 for (let i = 0;i<cubics.length;i++) {
     cubics[i].style.backgroundColor = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
 }
})
var cubics = document.getElementsByClassName('cubic_item')
for(let i = 0;i<cubics.length;i++) {
    cubics[i].addEventListener('click',() => {
        console.log(i)
        cubics[i].style.backgroundColor = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
    })
}
var pagesArr = ['index.html','./lib/pages/todolist.html','./lib/pages/carousel.html','./lib/pages/visualization.html','./lib/pages/introduce.html']
var items = document.getElementsByClassName('list-item')
    for(let i = 0;i<items.length;i++) {
        items[i].addEventListener('click',() => {
            alert(pagesArr)
            location.href = pagesArr[i]
        })
    }
var vuecontainer = new Vue({
    el:'#vue_container',
    data: {
        current:0,
        active:0,
        name:'leo',
        age:18,
        language:['c','c#','javascript','python'],
        images:['http://www.foundertech.com/uploads/201607/04/14676133087772.jpg','https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/bbva-open4u-javascript.jpg?itok=6VzPgr4K','https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20/sign=f80b6ab1a786c9171c0e5a6ba8541baa/63d9f2d3572c11dfc42d316a632762d0f603c2ff.jpg','http://img1.gtimg.com/comic/pics/hv1/249/251/2164/140778354.jpg']
    },
    mounted() {
        console.log('enter')
    }
})