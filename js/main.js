window.addEventListener("scroll", function (e) {
    document.querySelector(".navTop").classList.toggle("windowsScroll",
    window.scrollY > 100)
})

let opens = document.querySelectorAll(".fagi");
opens.forEach(function(e){
    e.addEventListener('click',function(a){
        a.target.parentElement.parentElement.parentElement.classList.toggle("open")
        let icons = document.querySelector(".fagi i")
        console.log(a.target)
        if(a.target.className === "fa-solid fa-plus"){
            a.target.className = 'fa-solid fa-minus'
        }
        else{
            a.target.className = "fa-solid fa-plus"
        }
    })
})
let btnMenu = document.querySelector(".j")
btnMenu.addEventListener("click", function(){
    document.querySelector(".links ul").classList.toggle("toggleMenu")
    iMenu = document.querySelector(".j i")
    if(iMenu.className === "fa-solid fa-bars"){
        iMenu.className = 'fa-solid fa-xmark'
        
    }else{
        iMenu.className = "fa-solid fa-bars"
    }
})