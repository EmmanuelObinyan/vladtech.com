// preloader for the container
window.addEventListener("load",()=>{
    document.getElementById("preloader-box").style.display="flex"
      setTimeout(()=>{
    document.getElementById("preloader-box").style.display="none"
      },4000)
})
// to validate user data in sign in form
document.getElementById("sign-up-page").addEventListener("submit",(event)=> {
    event.preventDefault();
    let isValid = true;
    const user_input_regex = /^[a-zA-Z]+$/; // Username must be alphabets
    const user_input = document.getElementById("sign-username-input");
    const user_label=document.querySelector("#sign-username-label");
    const spinner = document.getElementById("sign-up-spinner");
    
      spinner.style.display = "inline-flex"; // Show the spinner
        setTimeout(()=>{
        spinner.style.display = "none";
    ; // Hide the spinner after 2 seconds
    // Validate username input
    if(user_input.value === ""){
         isValid = false;
         user_input.classList.add("invalid-input");
            user_label.classList.add("invalid-label");
            user_label.textContent = "*Username cannot be empty";
            user_label.style.fontSize = "0.9rem";
    }
     
    else if(user_input.value.length <= 8 ){
        isValid = false;
        user_input.classList.add("invalid-input");
        user_label.classList.add("invalid-label");
        user_label.textContent = "*Username must be 8-20 characters long";
        user_label.style.fontSize = "0.9rem";
    } 
    else if(!user_input_regex.test(user_input.value)){
            isValid = false;
            user_input.classList.add("invalid-input");
            user_label.classList.add("invalid-label");
            user_label.textContent = "*Username must be in alphabets only";
            user_label.style.fontSize = "0.9rem";
        }
        else{
        localStorage.setItem("username", user_input.value);
     }
    const first_name_input = document.getElementById("sign-firstname-input");
    const last_name_input = document.getElementById("sign-lastname-input");
    const email_input = document.getElementById("sign-email-input");
    const password_input = document.getElementById("sign-password-input");
    const email_regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (first_name_input.value === "") {
            isValid = false;
            first_name_input.classList.add("invalid-input");
            document.querySelector("#sign-firstname-label").classList.add("invalid-label");
            document.querySelector("#sign-firstname-label").textContent = "*First Name cannot be empty";
            document.querySelector("#sign-firstname-label").style.fontSize = "0.9rem";
        }
         else{
            localStorage.setItem("first_name", first_name_input.value);
         }
    if (last_name_input.value === "") {
            isValid = false;
            last_name_input.classList.add("invalid-input");
            document.querySelector("#sign-lastname-label").classList.add("invalid-label");
            document.querySelector("#sign-lastname-label").textContent = "*Last Name cannot be empty";
            document.querySelector("#sign-lastname-label").style.fontSize = "0.9rem";
        }
        else{
            localStorage.setItem("last_name", last_name_input.value);
        }
    if (email_input.value === "") {
            isValid = false;
            email_input.classList.add("invalid-input");
            document.querySelector("#sign-email-label").classList.add("invalid-label");
            document.querySelector("#sign-email-label").textContent = "*Email cannot be empty";
            document.querySelector("#sign-email-label").style.fontSize = "0.9rem";
        } else if (!email_regex.test(email_input.value)) {
            isValid = false;
            email_input.classList.add("invalid-input");
            document.querySelector("#sign-email-label").classList.add("invalid-label");
            document.querySelector("#sign-email-label").textContent = "*Invalid email format";
            document.querySelector("#sign-email-label").style.fontSize = "0.9rem";
        }
          else {
            localStorage.setItem("email", email_input.value);  }
    // Validate password input
    // Password must be at least 8 characters long
         if (password_input.value.length < 8) {
            isValid = false;
            password_input.classList.add("invalid-input");
            document.querySelector("#sign-password-label").classList.add("invalid-label");
            document.querySelector("#sign-password-label").textContent = "*Password must be at least 8 characters long";
            document.querySelector("#sign-password-label").style.fontSize = "0.9rem";
        } 
          else {
            localStorage.setItem("password", password_input.value);
        }
    if (isValid) {
        // If all validations pass, submit the form
        spinner.style.display="inline-flex"
        setTimeout(()=>{
            spinner.style.display="none"
            window.location.href="educationloginform.html"
        },2000)
    } 
},2000)
        // Reset the input value
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label"); 
  setTimeout(() => {
    inputs.forEach((input) => {
        input.classList.remove("invalid-input");
    });
    labels.forEach((label) => {
        label.classList.remove("invalid-label");
        document.getElementById("sign-username-label").textContent = "Username";
        document.getElementById("sign-firstname-label").textContent = "First Name";
        document.getElementById("sign-lastname-label").textContent = "last Name";
        document.getElementById("sign-email-label").textContent = "Email";
        document.getElementById("sign-password-label").textContent = "Password";
    });
  }, 6000); // Reset the input and label styles after 5 seconds
})
// for dark mode styles
if(localStorage.getItem("darktheme")==="dark"){
    document.body.classList.add("signup-body-dark")
document.getElementById("generalform").classList.add("signup-general-dark")
}
else if(localStorage.getItem("darktheme")==="light"){
    document.body.classList.remove("signup-body-dark")
document.getElementById("generalform").classList.remove("signup-general-dark")
}
// dark mode styles for the preloader box
if(localStorage.getItem("darktheme")==="dark"){
    document.getElementById("preloader-box").classList.add("preloader-dark-box")
}
 else if(localStorage.getItem("darktheme")==="light"){
        document.getElementById("preloader-box").classList.remove("preloader-dark-box")
     }