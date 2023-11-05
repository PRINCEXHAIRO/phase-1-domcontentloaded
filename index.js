// Your code goes here
const text = document.getElementById('text')

console.log(text)

function sayThis() { 
    document.getElementById("text").textContent = "This is really cool!"
}

document.addEventListener('DOMContentLoaded', sayThis)

console.log(sayThis)