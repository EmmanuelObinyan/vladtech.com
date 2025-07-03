//   for the preloader load
window.addEventListener("load",()=>{
    document.getElementById("preloader-div").style.display="flex"
      setTimeout(()=>{
        document.getElementById("preloader-div").style.display="none"
      },4000)
})
let attempts = 0; // Track attempts globally
const maxattempts = 3;

document.getElementById("login-form-page").addEventListener("submit", (e) => {
    e.preventDefault();
    const username_input = document.getElementById("login-username-input");
    const password_input = document.getElementById("login-password-input");
    const gotten_username = localStorage.getItem("username");
    const gotten_password = localStorage.getItem("password");
    const spinner = document.getElementById("login-spinner");
    const username_label = document.getElementById("login-username-label");
    const password_label = document.getElementById("login-password-label");
    const login_button = document.getElementById('login-button');
    let accessGranted = true;
    // Show spinner
    spinner.style.display = "inline-flex";

    setTimeout(() => {
        spinner.style.display = "none";

        // Validate inputs
        if (username_input.value === "") {
            accessGranted = false;
            username_label.classList.add("login-invalid-label");
            username_input.classList.add("login-invalid-input");
            username_label.textContent = "please enter username credential";
            username_label.style.fontSize = "0.9rem";
        }
        if (password_input.value === "") {
            accessGranted = false;
            password_label.classList.add("login-invalid-label");
            password_input.classList.add("login-invalid-input");
            password_label.textContent = "please enter password credentials";
            password_label.style.fontSize = "0.9rem";
        }

        // If inputs are valid, check credentials
        if (accessGranted) {
            spinner.style.display = "inline-flex";
            setTimeout(() => {
                spinner.style.display = "none";
                if (
                    username_input.value === gotten_username &&
                    password_input.value === gotten_password
                ) {
                     // variables for storing values of alert container
            //   const alert_text=document.querySelector("#alert-login-text")        
            //   const div_icon=document.querySelector(".div-icon")  
            //   const alert_button=document.getElementById("alert-login-button")       
            //   const alert_container=document.querySelector("#alert-login-form ")
            //   const div_i=document.querySelector(".div-icon i")

            //   alert_container.style.transform="translateY(4%)"
            //   alert_container.classList.add("login-text-class")
            //   alert_button.classList.add("alert-button-class")
            //   div_icon.classList.add("div-icon-class")
            //   div_i.classList.remove("bi-x-circle")
            //   alert_text.classList.remove("cancel-text-class")
            //   div_i.classList.remove("cancel-icon-class")
            //   div_i.classList.add("bi-check-circle")
            //   div_i.classList.add("icon-class")
            username_label.style.color="green"
              username_label.textContent="Access Granted"
                    // You can redirect or do something here
                    attempts = 0; // Reset attempts on success
                    setTimeout(()=>{
                          window.location.href="education.html";
                    },1000)
                } else {
                     // variables for storing values of alert container
            //          const alert_text=document.querySelector("#alert-login-text")        
            //   const div_icon=document.querySelector(".div-icon")  
            //   const alert_button=document.getElementById("alert-login-button")       
            //   const alert_container=document.querySelector("#alert-login-form ")
            //   const div_i=document.querySelector(".div-icon i")

            //   alert_container.style.transform="translateY(2%)"
            //   alert_container.classList.add("login-text-class")
            //   alert_button.classList.add("alert-button-class")
            //   div_icon.classList.add("div-icon-class")
            //   div_i.classList.remove("bi-check-circle")
            //   div_i.classList.add("bi-x-circle")
            //   div_i.classList.add("cancel-icon-class")
            //   alert_text.classList.add("cancel-text-class")
                    attempts++;
                    username_label.style.color="rgb(174, 55, 55)";
                    username_label.textContent = `invalid credentials! \n ${attempts} attempts out of ${maxattempts}`;
                    if (attempts >= maxattempts) {
        //    alert_container.style.transform="translateY(4%)"
              username_label.style.color="rgb(174, 55, 55)";
              username_label.textContent="access denied,try 30seconds later" 
                        login_button.disabled = true;
                        setTimeout(() => {
                            login_button.disabled = false;
                            attempts = 0;
                        }, 30000); // 30 seconds lockout
                    }
                }
            }, 2000);
        }
    }, 2000);

    // Reset styles after 5 seconds
    setTimeout(() => {
        username_input.classList.remove("login-invalid-input");
        password_input.classList.remove("login-invalid-input");
        username_label.classList.remove("login-invalid-label", "invalid-login-label");
        password_label.classList.remove("login-invalid-label");
        username_label.textContent = "Username";
        username_label.style.color="white"
        password_label.textContent = "Password";
    }, 5000);
});
// alert login button to close the container
//  document.getElementById("alert-login-button").addEventListener("click",()=>{
//        const alert_container=document.getElementById("alert-login-form")
//         alert_container.style.transform="translateY(-200%)"
//  })
//  darkmode style for login form{for preloader div too}
if(localStorage.getItem("darktheme")==="dark"){
        document.getElementById("preloader-div").classList.add("preloader-dark")
        document.getElementById("general-login-form").classList.add("login-general-dark")
        document.body.classList.add("login-body-dark")
}
else if(localStorage.getItem("darktheme")==="light"){
            document.getElementById("preloader-div").classList.remove("preloader-dark")
            document.getElementById("general-login-form").classList.remove("login-general-dark")
            document.body.classList.remove("login-body-dark")
}