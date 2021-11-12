const nextImg = document.querySelector('.next')
const prevImg = document.querySelector('.prev')
const Slide = document.querySelectorAll('.slide')

let index=0;
show(index);

function show(index){
     Slide.forEach(element => {
         element.style.display='none';
     });
     Slide[index].style.display='flex';
}

function nextSlide(){
    index++;
    if(index>Slide.length-1){
        index=0;
    }
    show(index);
}

function previousSlide(){
    index--;
    if(index<0){
        index=Slide.length-1;
    }
    show(index);
}

nextImg.addEventListener('click',nextSlide);
prevImg.addEventListener('click',previousSlide);

