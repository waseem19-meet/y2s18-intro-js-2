// YOUR TASK: Add more pictures!
var pictures = ['./imgs/img1.jpg', './imgs/img2.jpg', './imgs/img3.jpg', './imgs/img4.jpg', './imgs/img5.jpg','./imgs/dog.jpg'];
var currentIndex = 0;

document.getElementsByTagName("img")[0].addEventListener("click", function (event){

	alert("HI");
})





function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
}