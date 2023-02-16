let emailform = document.getElementById("inputemailforms");
let submit = document.getElementById("submitbutton");
let input = document.getElementById("inputname");
let weburl = document.getElementById("validateweburl");
let submitbutton = document.getElementById("submitbuttons");
let emailcontrol = document.getElementById("emailcontrol");

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
