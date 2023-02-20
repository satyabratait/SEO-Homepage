// import Swiper from "swiper";
// const Swiper = require('Swiper')

let emailform = document.getElementById("inputemailforms");
let submit = document.getElementById("submitbutton");
let input = document.getElementById("inputname");
let weburl = document.getElementById("validateweburl");
let submitbutton = document.getElementById("submitbuttons");
let emailcontrol = document.getElementById("emailcontrol");
let price = document.querySelectorAll(".chooseprice");

let reges = /^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$/g;
let namereges = /^[a-zA-Z]$/;
submit.addEventListener("click",(e) => {
    if (!namereges.test(input.value)) {
                alert("enter proper name");
                console.log(3);
    }

    testemail(emailform.value);
});

function testemail(value) {
    if (!reges.test(value)) {
        alert("Invalid email");
    }
}

submitbutton.addEventListener("click",(e) =>{
    let givenurl;
    testemail(emailcontrol.value);
    try {
        givenurl = new URL(weburl.value);
    } catch (error) {
        alert(error);
        console.log(4);
        return false
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints :{
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


price.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.firstElementChild.style.color = "white";
    });
});

price.forEach((card) => {
    card.addEventListener("mouseout", () => {
      card.firstElementChild.style.color = "#6f77f1"
    })
});

price.forEach((button) => {
    button.addEventListener("mouseover", () => {
        console.log(button.lastElementChild);
      button.lastElementChild.lastElementChild.style.backgroundColor = "#FAD725"
    })
  })
  
price.forEach((button) => {
    button.addEventListener("mouseout", () => {
      button.lastElementChild.lastElementChild.style.backgroundColor = "white"
    })
})