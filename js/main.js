function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




//first Cube Modal



var modal = [document.getElementById('moretext'),document.getElementById('moretext1'),document.getElementById('moretext2'),document.getElementById('moretext3'),document.getElementById('moretext4'),document.getElementById('moretext5')];

var btn = [document.getElementById("readmore"),document.getElementById("readmore1"),document.getElementById("readmore2"),document.getElementById("readmore3"),document.getElementById("readmore4"),document.getElementById("readmore5")];

var span = [document.getElementById("closediv"),document.getElementById("closediv1"),document.getElementById("closediv2"),document.getElementById("closediv3"),document.getElementById("closediv4"),document.getElementById("closediv5"),];
//HTML
btn[0].onclick = function() {
    modal[0].style.display = "block";
    span[0].onclick = function() {
        modal[0].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[0]) {
            modal[0].style.display = "none";
        }
    }
}
//CSS
btn[1].onclick = function() {
    modal[1].style.display = "block";
    span[1].onclick = function() {
        modal[1].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[1]) {
            modal[1].style.display = "none";
        }
    }
}
//Bootstrap
btn[2].onclick = function() {
    modal[2].style.display = "block";
    span[2].onclick = function() {
        modal[2].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[2]) {
            modal[2].style.display = "none";
        }
    }
}
//JavaScript
btn[3].onclick = function() {
    modal[3].style.display = "block";
    span[3].onclick = function() {
        modal[3].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[3]) {
            modal[3].style.display = "none";
        }
    }
}
//Jquery
btn[4].onclick = function() {
    modal[4].style.display = "block";
    span[4].onclick = function() {
        modal[4].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[4]) {
            modal[4].style.display = "none";
        }
    }
}
//XML and JSON
btn[5].onclick = function() {
    modal[5].style.display = "block";
    span[5].onclick = function() {
        modal[5].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal[5]) {
            modal[5].style.display = "none";
        }
    }
}

//Second Cubde Modal





var modal1 = [document.getElementById('moretext2.0'),document.getElementById('moretext2.1'),document.getElementById('moretext2.2'),document.getElementById('moretext2.3'),document.getElementById('moretext2.4'),document.getElementById('moretext2.5')];

var btn1 = [document.getElementById("readmore2.0"),document.getElementById("readmore2.1"),document.getElementById("readmore2.2"),document.getElementById("readmore2.3"),document.getElementById("readmore2.4"),document.getElementById("readmore2.5")];

var span1 = [document.getElementById("closediv2.0"),document.getElementById("closediv2.1"),document.getElementById("closediv2.2"),document.getElementById("closediv2.3"),document.getElementById("closediv2.4"),document.getElementById("closediv2.5"),];



//PHP
btn1[0].onclick = function() {
    modal1[0].style.display = "block";
    span1[0].onclick = function() {
        modal1[0].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[0]) {
            modal1[0].style.display = "none";
        }
    }
}
//MySQL
btn1[1].onclick = function() {
    modal1[1].style.display = "block";
    span1[1].onclick = function() {
        modal1[1].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[1]) {
            modal1[1].style.display = "none";
        }
    }
}
//C++
btn1[2].onclick = function() {
    modal1[2].style.display = "block";
    span1[2].onclick = function() {
        modal1[2].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[2]) {
            modal1[2].style.display = "none";
        }
    }
}
//python
btn1[3].onclick = function() {
    modal1[3].style.display = "block";
    span1[3].onclick = function() {
        modal1[3].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[3]) {
            modal1[3].style.display = "none";
        }
    }
}
//metasploit
btn1[4].onclick = function() {
    modal1[4].style.display = "block";
    span1[4].onclick = function() {
        modal1[4].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[4]) {
            modal1[4].style.display = "none";
        }
    }
}
//Linux
btn1[5].onclick = function() {
    modal1[5].style.display = "block";
    span1[5].onclick = function() {
        modal1[5].style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal1[5]) {
            modal1[5].style.display = "none";
        }
    }
}








function darkTheme(){
    var info = [document.getElementById('body'),document.getElementById('darkThemeButton'),document.getElementById('openNav'),document.getElementById('lightThemeButton'),document.getElementById('contact'),document.getElementById('skill'),document.getElementById('animation')];

    info[0].style.backgroundColor = "black";
    info[0].style.color = "white";
    info[1].style.display = "none";
    info[2].style.color = 'white'
    info[3].style.display = "block";
    info[4].style.borderBottomColor = 'white';
    info[5].style.borderBottomColor = 'white';
    info[6].style.borderBottomColor = 'white';
//first cube side
    var cubeSide = [document.getElementById('side1'),document.getElementById('side2'),document.getElementById('side3'),document.getElementById('side4'), document.getElementById('side5'),document.getElementById('side6')]
//after the darkmode button clicked background turns white with the text color of black
    cubeSide[0].style.backgroundColor = 'White';
    cubeSide[0].style.color = 'black';

    cubeSide[1].style.backgroundColor = 'White';
    cubeSide[1].style.color = 'black';

    cubeSide[2].style.backgroundColor = 'White';
    cubeSide[2].style.color = 'black';

    cubeSide[3].style.backgroundColor = 'White';
    cubeSide[3].style.color = 'black';

    cubeSide[4].style.backgroundColor = 'White';
    cubeSide[4].style.color = 'black';

    cubeSide[5].style.backgroundColor = 'White';
    cubeSide[5].style.color = 'black';
//second cube
    var cubeSide2 = [document.getElementById('side2.1'),document.getElementById('side2.2'),document.getElementById('side2.3'),document.getElementById('side2.4'), document.getElementById('side2.5'),document.getElementById('side2.6')]
//after the darkmode button clicked the background of the second cube turns black with the text color of white

    cubeSide2[0].style.backgroundColor = 'black';
    cubeSide2[0].style.color = 'white';

    cubeSide2[1].style.backgroundColor = 'black';
    cubeSide2[1].style.color = 'white';

    cubeSide2[2].style.backgroundColor = 'black';
    cubeSide2[2].style.color = 'white';

    cubeSide2[3].style.backgroundColor = 'black';
    cubeSide2[3].style.color = 'white';

    cubeSide2[4].style.backgroundColor = 'black';
    cubeSide2[4].style.color = 'white';

    cubeSide2[5].style.backgroundColor = 'black';
    cubeSide2[5].style.color = 'white';

    //Modals
    sessionStorage.setItem("darkTheme", true);
    sessionStorage.setItem("lightTheme", false);



}
function lightTheme(){
    var info = [document.getElementById('lightThemeButton'),document.getElementById('body'),document.getElementById('openNav'),document.getElementById('contact'),document.getElementById('skill'),document.getElementById('animation'),document.getElementById('darkThemeButton')];
    
    info[1].style.backgroundColor = "white"
    info[1].style.color = "black";
    info[0].style.display = "none";
    info[2].style.color = 'black';
    info[3].style.borderBottomColor = 'black';
    info[4].style.borderBottomColor = 'black';
    info[5].style.borderBottomColor = 'black';
    info[6].style.display = "block";
//first cube sides
    var cubeSide = [document.getElementById('side1'),document.getElementById('side2'),document.getElementById('side3'),document.getElementById('side4'), document.getElementById('side5'),document.getElementById('side6')]
//after the light mode button clicked the background color turns black with the text color of white;
    cubeSide[0].style.backgroundColor = 'black';
    cubeSide[0].style.color = 'white';

    cubeSide[1].style.backgroundColor = 'black';
    cubeSide[1].style.color = 'white';

    cubeSide[2].style.backgroundColor = 'black';
    cubeSide[2].style.color = 'white';

    cubeSide[3].style.backgroundColor = 'black';
    cubeSide[3].style.color = 'white';

    cubeSide[4].style.backgroundColor = 'black';
    cubeSide[4].style.color = 'white';

    cubeSide[5].style.backgroundColor = 'black';
    cubeSide[5].style.color = 'white';
//second cube
    var cubeSide2 = [document.getElementById('side2.1'),document.getElementById('side2.2'),document.getElementById('side2.3'),document.getElementById('side2.4'), document.getElementById('side2.5'),document.getElementById('side2.6')]
//after the light mode button clicked the second cube's background turns white with the text color of black
    cubeSide2[0].style.backgroundColor = 'White';
    cubeSide2[0].style.color = 'black';

    cubeSide2[1].style.backgroundColor = 'White';
    cubeSide2[1].style.color = 'black';

    cubeSide2[2].style.backgroundColor = 'White';
    cubeSide2[2].style.color = 'black';

    cubeSide2[3].style.backgroundColor = 'White';
    cubeSide2[3].style.color = 'black';

    cubeSide2[4].style.backgroundColor = 'White';
    cubeSide2[4].style.color = 'black';

    cubeSide2[5].style.backgroundColor = 'White';
    cubeSide2[5].style.color = 'black';

    sessionStorage.setItem("lightTheme", true);
    sessionStorage.setItem("darkTheme", false);
    //Modals
    //sessionSotrage.getItem
}

//getting the canvas
var canvas = document.getElementById('firstCanvas');
var context = canvas.getContext('2d');
//game
var firstpart;
var img;
var secondparts = [];
var startButton = document.getElementById('beginbtn');

function restart(){
    firstpart = new parts(0, 120, 15, 15, "black");
    // context.drawImage(this.image, this.x, this.y, this.width, this.height)
    secondparts = [];
    startButton.style.display = "none";
    gathering.stop();
    gathering.start();
}

var gathering = {
    start : function(){
        this.interval = setInterval(updateGame, 30);
        this.frame = 0;
        this.score = 0;
    },
    clear : function(){
        context.clearRect(0,0,canvas.width,canvas.height)
    },
    stop : function(){
        clearInterval(this.interval);
    }
}

function parts(x,y,width,height,color,type){
    this.x = x;
    this.y = y;
    this.type = type;
    if (this.type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedx = 0;
    this.speedy = 0;
    this.gravity = 0.04;
    this.gravitySpeed = 0;
    this.color = color;
    this.update = function(){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);
        if (type == "image") {
            context.drawImage(this.image,this.x,this.y,this.width,this.height);
        }
    }
    this.moveParts = function(){
        this.gravitySpeed += this.gravity;
        this.x += this.speedx;
        this.y += this.speedy + this.gravitySpeed;
        this.bottom();
        this.roof();
    };
    this.bottom = function(){
        // firstpart = new parts(//x 0,// y 120, // width 15, // height 15,"black");
        var bottom = canvas.height - this.height
        if(this.y > bottom){
            this.y = bottom;
            this.gravitySpeed = 0;
        }
    };
    this.roof = function(){
        if (this.y <= 0) {
            this.gravitySpeed = 0.5;
        }
    }
    this.crash = function(obs){
        var mainRight = this.x + (this.width);
        var obsLeft = obs.x;

        var mainLeft = this.x;
        var obsRight = obs.x + (obs.width);

        var mainTop = this.y;
        var obsBottom = obs.y + (obs.height);

        var mainBottom = this.y + (this.height);
        var obsTop = obs.y;

        var status = true;
//I can add = too ;;; doesn't matter
        // secondparts.push(new parts(x, 0, 10, 20,100, "red"));
        //height 20-100
        // firstpart = new parts(0, 120 + 15//main bottom, 15, 15, "black");
        // secondparts.push(new parts(x, height + gap, 10, x - height - gap, "blue"))

        if ((mainBottom <  obsTop) || (mainTop > obsBottom) || (mainRight < obsLeft) || (mainLeft > obsRight)) {
            status = false;
        }
        return status
    }
}
//update the game second by second
function updateGame() {
    var x, y;
    for (i = 0; i < secondparts.length; i += 1) {
        if (firstpart.crash(secondparts[i])) {
            gathering.stop();
            startButton.style.display = "inline-block";
            return;
        }
        //correct
    }
    gathering.clear();
    gathering.frame += 1;
    if (gathering.frame == 1 || everyinterval(50)) {
        x = canvas.width;
        minHeight = 20;
        maxHeight = 100;
        height = Math.floor(Math.random() * (maxHeight-minHeight+1)+minHeight);
        minGap = 30;
        maxGap = 70;
        gap = Math.floor(Math.random() * (maxGap-minGap+1)+minGap);
//upper parts
        secondparts.push(new parts(x,0,10,height,"red"));
//lower parts
        secondparts.push(new parts(x,height+gap,10,x-height-gap,"red"));
        var scoreSpan = gathering.score += 1;
        document.getElementById('score').innerHTML = scoreSpan;
    }
    for (i = 0; i < secondparts.length; i += 1) {
        secondparts[i].x += -4;
        secondparts[i].update();//wroks
    }
    firstpart.moveParts();
    firstpart.update();//works
}

function move(n) {
    firstpart.gravity = n;
}

function everyinterval(n) {
    if ((gathering.frame / n) % 1 == 0) {
        return true;
    }
    return false;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("canvases");
    var canvasDiv = [document.getElementById('firstCanvasDiv'),document.getElementById('secondCanvasDiv')];

    if (n > slides.length) { 
        slideIndex = 1 
    }if (n < 1) { 
        slideIndex = slides.length 
    }for (i = 0; i < slides.length; i++) {
        canvasDiv[i].style.display = 'none'
        slides[i].style.display = "none";
    }
    canvasDiv[slideIndex -1].style.display = 'flex'
    slides[slideIndex - 1].style.display = "block";
}