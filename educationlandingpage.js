    localStorage.removeItem("username")
    localStorage.removeItem("first_name")
    localStorage.removeItem("last_name")
    localStorage.removeItem("password")
    localStorage.removeItem("email")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add('show');
        } else {
          target.classList.remove('show'); 
        }
      });
    }, {
      threshold: 0.4 // trigger when 50% of element is in view
    });
   const hiddens= document.querySelectorAll('.hidden');
    hiddens.forEach(hidden=>{
      observer.observe(hidden)
    })
const dark_button=document.getElementById("dark-mode-button")
 const list_items=  document.querySelectorAll("#ordered-list-items a")
  dark_button.addEventListener("click",()=>{
    list_items.forEach(list_item =>{
        list_item.classList.toggle("dark-list")
    })
    document.getElementById("nav").classList.toggle("dark-nav")
    document.getElementById("alert-div").classList.toggle("alert-dark")
     document.body.classList.toggle("body-dark")
         if(document.body.classList.contains("body-dark")){
             dark_button.innerText="light-mode"
             dark_button.style.fontWeight="bold"
         }
         else{
            dark_button.innerText="Dark-mode"
            dark_button.style.fontWeight="bold"
         }
         if(document.body.classList.contains("body-dark")){
            localStorage.setItem("colortheme","dark")
         }
         else {
            localStorage.setItem("colortheme","light")
         }
  })
  if(localStorage.getItem("colortheme")==="dark"){
    list_items.forEach(list_item =>{
        list_item.classList.add("dark-list")
    })
            document.body.classList.add("body-dark")
            document.getElementById("nav").classList.add("dark-nav")
             document.getElementById("alert-div").classList.add("alert-dark")
         }
         else if(localStorage.getItem("colorthemetheme")==="light"){
            document.body.classList.remove("body-dark")
            list_items.forEach(list_item =>{
        list_item.classList.remove("dark-list")
    })
            document.getElementById("nav").classList.remove("dark-nav")
             document.getElementById("alert-div").classList.remove("alert-dark")
         }
  document.getElementById("sign-in-button").addEventListener("click",()=>{
      window.location.href="educationloginform.html"
  })
  const nav_lists=document.querySelectorAll("#navbarNavDropdown ul li") 
      nav_lists.forEach( nav_list => {
         nav_list.addEventListener("click",()=>{
            document.getElementById("alert-div").style.transform="translatex(50%)"
         });
        
      });
       
      document.getElementById("alert-button").addEventListener("click",()=>{
           document.getElementById("alert-div").style.transform="translatex(-115%)"
      })
      document.getElementById("start-button").addEventListener("click",()=>{
          document.getElementById("alert-div").style.transform="translatex(50%)"
      })