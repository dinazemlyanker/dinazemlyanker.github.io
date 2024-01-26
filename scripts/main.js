// Code to show image after pressing button

let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

function displayImage() {
    var image = document.getElementById('marsImage');
    image.style.display = 'block';
  }

myButton.onclick = function() {
    displayImage();
  }


// Click the image to display a message
let message = 'Hi! You should consider buying a tiny horse today :)'
function showMessage(message) {
    alert(message); 
  }

myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
showMessage(message)
};