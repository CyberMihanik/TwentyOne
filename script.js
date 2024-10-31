let form = document.getElementById('form');
let play = document.createElement('button');
let play_text = document.createElement('span');
let user = prompt();
document.getElementById('username').innerHTML = user;
let userScore = document.getElementById('user');
let computerScore = document.getElementById('computer');
let user_card = document.getElementById("user_card");
let computer_card = document.getElementById("computer_card");
user_card.src = "source/cards/J/J_U.jpg";
computer_card.src = "source/cards/J/J_C.jpg";

let GS = 0;
let US = 0;
let CS = 0;
let W = ' ';
const cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const folders = ['C', 'D', 'H', 'S'];
const cardsValues = {
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 2,
    'Q': 3,
    'K': 4,
    'A': 11
};

function card() {
    let cardIndex = Math.floor(Math.random() * cards.length);
    let folderIndex = Math.floor(Math.random() * folders.length);
    let card = cards[cardIndex];
    let folder = folders[folderIndex];
    let value = cardsValues[card];
    return { card, folder, value };
}


play.classList.add('play');
play_text.classList.add('title');
form.appendChild(play);
play.appendChild(play_text);
play_text.innerHTML = 'Граємо';

play.onclick = () => playTwentyOne();

function playTwentyOne() {
    let UC = card();
    US += UC.value;
    user_card.src = "source/cards/" + UC.folder + "/" + UC.card + ".jpg";
    userScore.innerHTML = US;
    let CC = card();
    CS += CC.value;
    computer_card.src = "source/cards/" + CC.folder + "/" + CC.card + ".jpg";
    computerScore.innerHTML = CS;
    GS += 1;
    if (GS == 3) { play.disabled = true; if (US > CS) {play_text.innerHTML = "Переміг "+ user;} else if (US < CS) {play_text.innerHTML = "Переміг Комп'ютер";}}
}