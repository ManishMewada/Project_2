const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
const captions = ["Image of mountains with sunrise",
    "Image of person posing at old place",
    "Image of river with sunset",
    "Image of river with forest"];

var currentImage = document.querySelector("img");
var currentCaption = document.querySelector("p");
var currentIndex = 0;
function pageReload(){
    currentIndex = 0;
    document.getElementById("image-name").innerHTML = captions[currentIndex];
}
function next() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
        currentImage.src = images[currentIndex];
        document.getElementById("image-name").innerHTML = captions[currentIndex];

    } else {
        currentImage.src = images[currentIndex];
        document.getElementById("image-name").innerHTML = captions[currentIndex];

    }

}

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
        currentImage.src = images[currentIndex];
        document.getElementById("image-name").innerHTML = captions[currentIndex];

    } else {
        currentImage.src = images[currentIndex];
        document.getElementById("image-name").innerHTML = captions[currentIndex];

    }
}

function shrink() {
    currentImage.style.width = (currentImage.clientWidth - 50) + "px";
}
function enlarge() {
    currentImage.style.width = (currentImage.clientWidth + 50) + "px";
}









