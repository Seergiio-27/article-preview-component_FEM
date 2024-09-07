const button = document.querySelector('.share-btn');
const activeButton = document.querySelector('.share-btn-active');
const sharePassive = document.querySelector('.share-container');
const shareActive = document.querySelector('.active-share-container');

button.addEventListener('click', () => {
    shareActive.classList.toggle('show');   
});

activeButton.addEventListener('click', () => {
    shareActive.classList.toggle('show');  
});
