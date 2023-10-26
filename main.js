let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/azerty.jpg') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/azerty.jpg');
    }
});

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Lenovo est cool, ' + myName;
  }
}

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Lenovo est cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  