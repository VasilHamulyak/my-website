var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var image = document.getElementById("image-1");
 


var imageArrays = ["photo-portfolio/photo-1.jpg", "photo-portfolio/photo-2.jpg", "photo-portfolio/photo-4.jpg"];
var num = 0;
previousButton.addEventListener("click", function() {
  num < imageArrays.length - 1 ? num++ : num = 0;
  image.src = imageArrays[num];
});
nextButton.addEventListener("click", function() {
  num < imageArrays.length - 1 ? num++ : num = 0;
  image.src = imageArrays[num];
});

 