let leftDoor = document.getElementById("door1");
let rightDoor = document.getElementById("door2");
let screen = document.getElementById("screen");
let floor = document.getElementById("doors-holder");
let openingDoor = false;
let elevator = document.getElementById("elevator")
 
let panel = document.getElementById('panel');
let modal = document.getElementById('modal');
let settingsButton = document.getElementById('settings');
let saveButton = document.getElementById('save');

let modalIsOpen = false;

let newPhotos = []

 
let altImg = "https://i1.sndcdn.com/artworks-000587077631-d2b6se-t500x500.jpg";
let photos = [
    "https://media.giphy.com/media/eePSFNBFv2W9owZ4Sh/giphy.gif",
    "https://media.giphy.com/media/ZmrLi7eC703u/giphy.gif",
    "https://media.giphy.com/media/12BYUePgtn7sis/giphy.gif",
    "",
    "https://media.giphy.com/media/zrdUjl6N99nLq/giphy.gif",
    "https://media.giphy.com/media/CTX0ivSQbI78A/giphy.gif",
    "https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
    "https://media.giphy.com/media/bxlLaYqgzrRug/giphy.gif",
    "https://media.giphy.com/media/26u6dIwIphLj8h10A/giphy.gif",
    "https://media.giphy.com/media/xfK5dGHMBHlwQ/giphy.gif",
    "https://media.giphy.com/media/zDrQxFFgiiGoU/giphy.gif",
    "https://media.giphy.com/media/DpNrB4a210Qg0/giphy.gif",
    "https://media.giphy.com/media/p37zQEvmBhwLipmiqV/giphy.gif",
    "",
    "https://i.pinimg.com/originals/48/e9/d7/48e9d7451d895ce83d6b7825ebf9162a.gif",
    "https://media.giphy.com/media/PSKAppO2LH56w/giphy.gif",
    "https://s3.amazonaws.com/img.iluria.com/product/7DA96A/138C7CF/450xN.jpg",
    "https://acegif.com/wp-content/uploads/cat-typing-7.gif",
    "https://i.pinimg.com/originals/02/b1/d5/02b1d5da9088c69b2e4550a1dcfde9fa.gif",
    "",
    
]

const toggleModal = () => {
    if(modalIsOpen){
        modal.style.display = 'none';
        saveButton.style.display = 'none';
        modalIsOpen = false
    }
    else if(!modalIsOpen){
        modal.style.display = 'flex';
        saveButton.style.display = 'block';
        modalIsOpen = true
    }
}



for (let i = 0; i < photos.length; i++) {
    const collum = document.createElement('div');
    collum.classList.add('button')
    collum.innerHTML = i + 1;
    collum.addEventListener('click', () => openDoor(i))
    panel.appendChild(collum)
}

function openDoor(i){
    if(openingDoor){
        return;
    }
    setTimeout(() => {

    }, 2)
    shake()
    openingDoor = true
    screen.innerHTML = i + 1
    floor.style.backgroundImage = photos[i] == "" ? `url(${altImg})`: `url(${photos[i]})`
    shake()
    setTimeout(() => {
        leftDoor.style.transform = "translate(-95%)"
        rightDoor.style.transform = "translate(95%)"
        
    }, 2000)
    setTimeout(() => {
        leftDoor.style.transform = "translate(0%)"
        rightDoor.style.transform = "translate(0%)"
        
    }, 5000)
    setTimeout(() => {
        openingDoor = false;
    }, 7300)
    console.log("adsnk")
    
}

function shake(){
    elevator.style.animationPlayState = "running";
    setTimeout(() => {
        elevator.style.animationPlayState = "paused"
    }, 2000)
}

const openModal = () => {

    modal.innerHTML = ''

    for (let i = 0; i < photos.length; i++) {

        const div = document.createElement('div')
        div.classList.add('inputDiv')
        const span = document.createElement('span')
        span.innerHTML = `floor ${i + 1}`
        const input = document.createElement('input')
        input.classList.add('inputDiv-input');
        input.value = photos[i];

        div.appendChild(span);
        div.appendChild(input);
        modal.appendChild(div)
        
    }
    toggleModal();
}

const save = () => {
    const inputs = document.getElementsByClassName("inputDiv-input");
    for (let i = 0; i < photos.length; i++) {
        photos[i] = inputs[i].value
        
    }
    toggleModal();
}

settingsButton.addEventListener('click',() =>  openModal());
saveButton.addEventListener('click',() =>  save());





