let email_input = document.querySelector(".email_input");
let btn_submit = document.querySelector(".btn-submit");
let btn_return = document.querySelector(".btn-return");
let remove_animation = function(){
    this.classList.remove("animation");
}

email_input.addEventListener("click", function(){
    if(this.value == "") this.value = "ash@loremcompany.com";
    this.classList.remove("error_input");
    document.querySelector(".email-error").classList.add("hidden");
    document.querySelector(".btn-submit").classList.add("active-btn-submit");

})
email_input.addEventListener("input", function(){
    this.classList.remove("error_input");
    document.querySelector(".email-error").classList.add("hidden");
    // document.querySelector(".btn-submit").classList.add("active-btn-submit");
})

email_input.addEventListener("animationend", remove_animation);
btn_submit.addEventListener("animationend", remove_animation);
btn_return.addEventListener("click", function(){
    document.querySelector(".main-content").classList.remove("hidden");
    document.querySelector(".succes-content").classList.add("hidden");
    document.querySelector(".btn-submit").classList.remove("active-btn-submit");
});

document.addEventListener("click", function(e){
    let email_input = document.querySelector(".email_input");
    let btn_submit = document.querySelector(".btn-submit");
    if(email_input.value == ""){
        if(e.target != email_input && e.target != btn_submit){
            email_input.classList.add("animation")
        }
    }
    else{
        if(e.target != btn_submit){
            btn_submit.classList.add("animation")
        }
    }
})

let form = document.querySelector(".form");

function validateEmail(email) {
    if (!email) return 0;
  
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 0;
    }
    return 1;
}
function handleSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.values(Object.fromEntries(form_data))[0];
    const emailErrorMessage = validateEmail(data);
    let email_input = document.querySelector(".email_input");
     
    if(emailErrorMessage == 0){
        email_input.classList.add("error_input");
        document.querySelector(".email-error").classList.remove("hidden");
    }
    else{
        email_input.value = "";
        document.querySelector(".main-content").classList.add("hidden");
        document.querySelector(".succes-content").classList.remove("hidden");
        document.querySelector(".user-email").textContent = data;
    }
    console.log(emailErrorMessage);
}
form.addEventListener('submit', handleSubmit);


