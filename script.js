const generateButton = document.querySelector('.btn-generate');
const displayInput = document.querySelector('#password');
const copyImage = document.querySelector('#copyimage');
const body = document.querySelector('body');

generateButton.addEventListener('click', function(e){
    let password = randomPasswordGenerator();
    displayInput.placeholder = password;
})

copyImage.addEventListener('click', function(e){
    const myPassword = displayInput.placeholder;
    navigator.clipboard.writeText(myPassword)
    alert(`Password Copied👍`)
    displayInput.placeholder = "";
    body.style.backgroundColor = changeBgColor();
})

function randomPasswordGenerator(){
    const passLength = 16;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const specialChar = "!@#$%^&*()_-?+~|{}[]<>/=";
    const numbers = "0123456789";

    const allChar = upperCase + lowerCase + specialChar + numbers
    let password = ""

    for(let i = 0; i < passLength; i++)
    {
        const randomPass = allChar[Math.floor(Math.random() * allChar.length)]
        password += randomPass
    }
    return password;
}

function changeBgColor(){
    const hexChar = "0123456789ABCDEF"
    const hexColorLength = 6
    let hexCode = "#"
    for(let i = 0; i < hexColorLength; i++)
    {
        const random = hexChar[Math.floor(Math.random() * hexChar.length)]
        hexCode += random;
    }
    return hexCode;
}