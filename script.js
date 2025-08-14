//menu

const hamburger= document.querySelector('.hamburger');
const navList = document.querySelector('.nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

});

// Dark - Light mode

const darkModeButton = document.getElementById('darkModeButton');

const body = document.body;

const enableDarkMode = () =>{
    body.classList.add('dark-mode');

}

const disableDarkMode = () => {
    body.classList.remove('dark-mode');

}
darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked){
        disableDarkMode();

    }else{
        enableDarkMode();
    }
});


// Multiple Text 

const typed = new Typed('.multiple',{
    strings:['Front-End Developer', 'Web Designer', 'Football Player'],
    typeSpeed:100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});