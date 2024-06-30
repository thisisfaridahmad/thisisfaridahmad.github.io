var peng = {
    body : document.getElementById('p'),
    rightHand : document.getElementById('right-hand'),
    talk : function () {},
    options : document.getElementById('help'),
    background: [
        document.getElementsByClassName('slidebar')[0],
        document.getElementsByClassName('slide')[0],
        document.getElementsByClassName('slide')[1],
        document.getElementsByClassName('slide')[2],
        document.getElementsByClassName('slide')[3],
        document.getElementsByClassName('slide')[4],
    ]
//    close : document.getElementById('closediv')
};
var slideIndex = 1;
//function to work with penguin navigation
function penSlides(n){
    showSlides(slideIndex = n);
    var i;
    peng.options.style.display = 'none';
//    peng.close.style.display = 'none';
    if(peng.body.style.width = '10em' && slideIndex !== 1){
        peng.body.style.top = '0';
        peng.body.style.float = 'left';
        peng.body.style.marginLeft = '0px';
        peng.body.style.width = '5em';
        peng.body.style.height = '5em';
    }
    for (i = 0; i < peng.background.length; i++) {
        peng.background[i].style.opacity = 1;
    }
    peng.background[0].style.display = 'inline-block';
}

showSlides(slideIndex);

peng.body.onclick = function () {
    var i;
    peng.options.style.display = 'block';
    peng.body.style.top = '50%';
    peng.body.style.right = '0';
    peng.body.style.left = '0';
    peng.body.style.margin  = 'auto';
    
    peng.body.style.width = '10em';
    peng.body.style.height = '10em';
    for (i = 0; i < peng.background.length; i++) {
        peng.background[i].style.opacity = 0.1;
    }
    peng.background[0].style.display = 'none';
    
/*    peng.close.style.display = 'inline-block';
    peng.close.onclick = function () {
        var i;
        peng.options.style.display = 'none';
        peng.close.style.display = 'none';
        if(peng.body.style.width = '10em' && slideIndex !== 1){
            peng.body.style.top = '0';
            peng.body.style.float = 'left';
            peng.body.style.marginLeft = '0px';
            peng.body.style.width = '5em';
            peng.body.style.height = '5em';
        }
        for (i = 0; i < peng.background.length; i++) {
            peng.background[i].style.opacity = 1;
        }
        peng.background[0].style.display = 'inline-block';
    }*/
}
function changeSize() {
    if(slideIndex !== 1){
        peng.body.style.top = '0';
        peng.body.style.float = 'left';
        peng.body.style.marginLeft = '0px';
        peng.body.style.height = '5em';
        peng.body.style.width = '5em';
    }else if(slideIndex == 1){
        peng.body.style.top = '50%';
        peng.body.style.right = '0';
        peng.body.style.left = '0';
        peng.body.style.margin  = 'auto'
        peng.body.style.float = 'none';
        peng.body.style.width = '10em';
        peng.body.style.height = '10em';
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var div = [
        document.getElementById('firstslide'),
        document.getElementById('second'),
        document.getElementById('third'),
        document.getElementById('fourth'),
    ];
    if (n > slides.length) { 
        slideIndex = 1;
    }if (n < 1) { 
        slideIndex = slides.length;
    }for (i = 0; i < slides.length; i++) {
        div[i].style.display = 'none';
        slides[i].style.display = "none";
    }
    div[slideIndex-1].style.display = 'inline-block'
    slides[slideIndex-1].style.display = "block";
}

var htmlBody = document.getElementById('body');
var themeButton = document.getElementById('theme');
var themeButton2 = document.getElementById('theme2');

themeButton.onclick = function (){
    htmlBody.style.color = 'white';
    htmlBody.style.backgroundColor = 'black';
    themeButton.style.display = 'none';
    themeButton2.style.display = 'inline-block';
    peng.body.style.backgroundColor = '#eff4ff';
}
themeButton2.onclick = function (){
    htmlBody.style.color = 'black';
    htmlBody.style.backgroundColor = 'white';
    themeButton.style.display = 'inline-block';
    themeButton2.style.display = 'none';
    peng.body.style.backgroundColor = 'white';
}

//checking if the user is online or offline
if(navigator.onLine == false){
    //alert('Offline')
}

var canvas = document.getElementById('canvas');
var context = document.getContext('2d');

