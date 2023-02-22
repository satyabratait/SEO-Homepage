const emailform = document.getElementById("inputemailforms"); //to take input of email from section 14
const submit = document.getElementById("submitbutton");
const input = document.getElementById("inputname"); //to take input of name from section 14
const weburl = document.getElementById("validateweburl"); //to take input of weburl
const submitbutton = document.getElementById("submitbuttons"); 
const emailcontrol = document.getElementById("emailcontrol"); //to take input from section 10
const searchbar = document.querySelector(".search-bar");
const searchbutton = document.querySelector(".search-submit");

const reges = /^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$/g; //expression to check email
const namereges = /^[a-zA-Z]$/; //expression to check name

//submitbutton of section 14
submit.addEventListener("click",(e) => {
    if (!namereges.test(input.value)) {
                alert("enter proper name");
                console.log(3);
    }

    testemail(emailform.value);
});

// to check email
function testemail(value) {
    if (!reges.test(value)) {
        alert("Invalid email");
    }
}

//submitbutton of section 10
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

// slider of section 13
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

//searchbutton
searchbutton.addEventListener("click", ()=>{
    if (searchbar.classList.contains('hide')) {
        searchbar.classList.remove('hide');
    }
    else{
        searchbar.classList.add('hide');
    }
});