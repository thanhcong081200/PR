//Gọi hàm 

let productIndex = 0;

let productInfos = document.querySelectorAll('.product-info')

setTimeout(() => {
    productInfos[productIndex].classList.add('active')
},200);


//Slide

let sliding = false

slide = () =>{
    if(sliding) return
    sliding = true

    let currentProduct = document.querySelector('.product-info.active')
    currentProduct.classList.remove('active')

    productIndex = productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1
    productInfos[productIndex].classList.add('active')

    //Chuyển động image slide
    let listImg = document.querySelectorAll('.slide')

    let slider = document.querySelector('.slider')

    let reverseItem = Array.from(listImg).slice().reverse()

    left = reverseItem[0].offsetLeft + 'px'
    height = reverseItem[0].offsetHeight + 'px'
    width = reverseItem[0].offsetWidth + 'px'
    zIndex = reverseItem[0].style.zIndex

    reverseItem.forEach((el,index)=>{
        if(index < listImg.length-1){
            el.style.left=reverseItem[index+1].offsetLeft+'px'
            el.style.height=reverseItem[index+1].offsetHeight+'px'
            el.style.width=reverseItem[index+1].offsetWidth+'px'
            el.style.zIndex=reverseItem[index+1].style.zIndex
            el.style.tranform='unset'
            el.style.opacity = 1
        }
        if(index===listImg.length-1){
            el.style.tranform='scale(1.5)'
            el.style.opacity='0'

            let cln = el.cloneNode(true)

            setTimeout(() => {
                el.remove()
                cln.style.tranform='scale(0)'
                cln.style.height=height
                cln.style.width=width
                cln.style.opacity='0'
                cln.style.zIndex='0'
                cln.style.animation='unset'
                slider.appendChild(cln)
                sliding = false
            },1000);
        }
    })
}

// Nút điều khiển slide
let controlSlide = document.querySelector('.slide-control')

controlSlide.onclick = () =>{
    slide()
}

//Open menu
openNav = () => {
    let nav = document.querySelector('.nav-overlay')
    nav.classList.toggle('active')
}