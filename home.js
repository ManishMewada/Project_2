const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
const captions = ["This is Image 1", "This is Image 2", "This is Image 3", "This Is Image 4"];

var currentImage = document.querySelector("img");  
var currentIndex = 0;

function next(){
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
        currentImage.src = images[currentIndex];
    }else{
        currentImage.src = images[currentIndex];
    }
}

function prev(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length -1;
        currentImage.src = images[currentIndex];
    }else{
        currentImage.src = images[currentIndex];
    }
}
