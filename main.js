

// When the user clicks anywhere outside of the modal, close it
let index=0
const imgnuber=document.querySelectorAll('.slider-conten-left-top img')
const rightbtn =document.querySelector('.fa-angle-right')
const lefttbtn =document.querySelector('.fa-chevron-left')
//console.log(imgnuber.length)
rightbtn.addEventListener("click",function(){
    index = index+1
    if(index>imgnuber.length-1){
        index=0
    }
   document.querySelector(".slider-conten-left-top").style.right = index * 100 +"%"
})
lefttbtn.addEventListener("click",function(){
    index = index-1
    if(index<=0){
        index=imgnuber.length-1
    }
    document.querySelector(".slider-conten-left-top").style.right = index * 100 +"%"
    console.log("dsfdsaf")
 })
//sileder 1

const imgnuberli= document.querySelectorAll('.slider-conten-left-bottom li')
imgnuberli.forEach(function(image,index,){
   image.addEventListener("click",function(){
    removeactive()
    document.querySelector(".slider-conten-left-top").style.right = index * 100 +"%"
    image.classList.add("active")
   })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")

}
// slider 2 chuyển động
 function imgautu(){
    index=index+1
    if(index>imgnuber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-conten-left-top").style.right = index * 100 +"%"
    imgnuberli[index].classList.add("active")
 
   // console.log(index)
 }
 setInterval(imgautu,1000)

 // -----------------sileder-product
 const rightbtntwo =document.querySelector('.fa-angle-right-two')
 const lefttbtntwo =document.querySelector('.fa-chevron-left-two')
 const imgnubertwo=document.querySelectorAll('.silder-product-one-content-items')
 //console.log(rightbtntwo)
 //console.log(lefttbtntwo)
 rightbtntwo.addEventListener("click",function(){
    index = index+1
    if(index>imgnubertwo.length-1){
        index=0
    }
   document.querySelector(".silder-product-one-content-items-content").style.right = index * 100 +"%"
   
})
lefttbtntwo.addEventListener("click",function(){
    index = index-1
    if(index<=0){
        index=imgnubertwo.length-1
    }
    document.querySelector(".silder-product-one-content-items-content").style.right = index * 100 +"%"

 })
