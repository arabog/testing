//Select element function
const selectElement = function(element) {
        return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');


menuToggler.addEventListener('click', function() {
        body.classList.toggle('open');
})

let displayInfo = selectElement(".show-text")

let btn = selectElement(".submit")

btn.addEventListener("click", func)

function func() {
        let firstName = selectElement(".first").value

        displayInfo.innerHTML = `Hello, ${firstName}, Babatunde will get back to you soon. Thanks`
}