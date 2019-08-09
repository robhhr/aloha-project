document.addEventListener("DOMContentLoaded", function () {

    // SMOOTH SCROLL
    let pageLinks = document.querySelectorAll('a[href^="#"]')

    for (let item of pageLinks) {
        item.addEventListener('click', (event) => {
            let sectionName = item.getAttribute('href')
            let scroll = document.querySelector(sectionName)
            scroll.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            history.pushState(null, null, sectionName)
            event.preventDefault()
            console.log(2);
        })
    }
});

function subscribe() {

    event.preventDefault();
    
    let email = document.forms['form']['email'].value;
    
    if (email === '') {
        alert("Please enter a valid e-mail address.");
    } else {
        alert('Thanks for subscribing');
    }
};