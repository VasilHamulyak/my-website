var modal = document.getElementById('myModal');
var img = $('.myPhoto');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myPhoto').click(function() {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
