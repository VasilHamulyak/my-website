window.onscroll = function() {scrollFunction()};
document.getElementById('btn').addEventListener('click', topFunction);
function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;  
    document.documentElement.scrollTop = 0;  
}