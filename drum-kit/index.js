for(let i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
        //arrow function won't work here because arrow functions don't have their own "this", they inherit it from parent block
        console.log(event);
        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            let soundW = new Audio(`sounds/crash.mp3`);
            soundW.play();
        break;

        case "a":
            let soundA = new Audio(`sounds/tom-1.mp3`);
            soundA.play();
        break;

        case "s":
            let soundS = new Audio(`sounds/tom-2.mp3`);
            soundS.play();
        break;

        case "d":
            let soundD = new Audio(`sounds/tom-3.mp3`);
            soundD.play();
        break;

        case "j":
            let soundJ = new Audio(`sounds/tom-4.mp3`);
            soundJ.play();
        break;

        case "k":
            let soundK = new Audio(`sounds/snare.mp3`);
            soundK.play();
        break;

        case "l":
            let soundL = new Audio(`sounds/kick-bass.mp3`);
            soundL.play();
        break;
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}