const nextImg = document.querySelector('.next')
const prevImg = document.querySelector('.prev')
const Slide = document.querySelectorAll('.Slide')

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
    display(index);
}

function previousSlide(){
    index--;
    if(index<0){
        index=Slide.length-1;
    }
    display(index);
}

nextImg.addEventListener('click',nextSlide);
prevImg.addEventListener('click',previousSlide);


// theButton.onclick = function pictureChange(){
//     document.getElementById('bottom2').src="images/desktop-image-hero-3.jpg";
//     console.log('clicked');
// }