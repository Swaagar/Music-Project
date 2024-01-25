for(var i = 0; i < document.querySelectorAll(".music").length; i++){
    document.querySelectorAll(".music")[i].addEventListener("click", function(){
        var clickedButton = this.innerHTML;
        makeSound(clickedButton); 
        buttonAnimation(clickedButton);  
    });
}

document.addEventListener("keypress", function(pressed){
    var pressedKey = pressed.key;
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
})

function makeSound(key){
    switch (key) {
        case "s":
            var sa = new Audio("Sa.mp3");
            sa.play();
            break;
        
        case "r":
            var re = new Audio("Re.mp3");
            re.play();
            break;

        case "g":
            var ga = new Audio("Ga.mp3");
            ga.play();
            break;

        case "m":
            var ma = new Audio("Ma.mp3");
            ma.play();
            break;

        case "p":
            var pa = new Audio("Pa.mp3");
            pa.play();
            break;

        case "d":
            var da = new Audio("Da.mp3");
            da.play();
            break;

        case "n":
            var ne = new Audio("Ne.mp3");
            ne.play();
            break;

        case "a":
            var saa = new Audio("Saa.mp3");
            saa.play();
            break;
    
        default: console.log("Invallid Command...");
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // activeButton.classList.add("game-over");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
        // activeButton.classList.remove("game-over");
    }, 200);
}