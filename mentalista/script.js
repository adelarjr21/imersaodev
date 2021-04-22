let
    min = 0,
    max = 10,
    guessesLeft = 3,
    numeroVencedor = Math.floor(Math.random() * (max - min) + 1);
// Math.floor() arredonda para baixo, transformando em número inteiro

const
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    playAgain = document.querySelector('#play-again'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

playAgain.style.color = 'white';

// Event Listeners
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Por favor, insira um número entre ${min} e ${max}`);
    }

    if (guess === numeroVencedor) {

        // Disable/Enable Buttons & Input
        guessInput.disabled = true;
        guessBtn.disabled = true;
        playAgain.disabled = false;

        // Add & Remove classes
        guessBtn.classList.remove('button-primary');
        playAgain.classList.add('button-primary');

        // Color Text
        guessBtn.style.color = 'white';

        // Set Message
        setMessage(`${numeroVencedor} é o correto, VOCÊ VENCEU!`);

    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {

            // Disable/Enable Buttons & Input
            guessInput.disabled = true;
            guessBtn.disabled = true;
            playAgain.disabled = false;

            // Add & Remove classes
            guessBtn.classList.remove('button-primary');
            playAgain.classList.add('button-primary');

            // Color Text
            guessBtn.style.color = 'white';

            // Set Message
            setMessage(`Você perdeu! O número correto era ${numeroVencedor}`);

        } else {
            setMessage(`${guess} não é o correto, ${guessesLeft} tentativas restantes..`);
        }
    }
});

playAgain.addEventListener('click', () => window.location.reload());

// Message
function setMessage(msg) {
    message.textContent = msg;
}