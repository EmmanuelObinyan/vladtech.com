

// for the toggle class of dark mode
// all stored variables
const medianav=document.querySelector(".media-nav")
const footer=document.querySelector("footer")
const lastbox=document.querySelector(".last-box")
const items=document.querySelector(".item-box")
const headtext=document.querySelector("#life-long h1")
const fourthtexts= document.querySelectorAll("#life-long h2")
const fourthsection=document.getElementById("life-long")
const thirdsection=document.getElementById("third-section")
const navlists = document.querySelectorAll(".general-nav li a")
const button=document.querySelector(".open-button i")
const settingmenus=document.querySelectorAll(".setting-menu button")
const registerbutton=document.querySelector("#register-button")
const generalnav= document.querySelector(".general-nav")
 const ratings=document.querySelectorAll(".rating i")
 const firstsections=document.querySelectorAll(".first-section div");
 const colcourses=document.querySelectorAll("#first-row div");
 const successicon=document.querySelector(".success-class i")
 const secondcourses=document.querySelectorAll("#second-row div")
  const body=document.body;
  const successbutton=document.querySelector(".success-button")
  const design=document.querySelector(".design");
document.querySelector(".dark-mode").addEventListener("click",(e)=>{
 e.preventDefault();
 footer.classList.toggle("dark-footer")
   settingmenus.forEach(settingmenu=>{
     settingmenu.classList.toggle("dark-menu")
   });
   lastbox.classList.toggle("dark-box")
   thirdsection.classList.toggle("third-class")
   navlists.forEach(navlist=>{
     navlist.classList.toggle("dark-list")
   })
   button.classList.toggle("dark-i")
   registerbutton.classList.toggle("dark-register")
   body.classList.toggle("dark");
   design.classList.toggle("dark-design")
   items.classList.toggle("dark-item")
   if(body.classList.contains("dark")){
    document.querySelector(".dark-mode").innerText="Light-mode"
   }else{
    document.querySelector(".dark-mode").innerText="Dark-mode"
   }
    ratings.forEach(rating=>{
        rating.classList.toggle("dark-rating")
    })
  // successbutton.classList.toggle("dark-button");
  // successicon.classList.toggle("dark-icon")
firstsections.forEach(firstsection=>{
        firstsection.classList.toggle("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.toggle("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.toggle("dark-class")
    })
    generalnav.classList.toggle("dark-nav");
// to save body color preference,in browser local storage
    if(body.classList.contains("dark")){
      localStorage.setItem("darktheme","dark")
    }else{
      localStorage.setItem("darktheme","light")
    }
fourthsection.classList.toggle("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.toggle("fourth-h2");
   headtext.classList.toggle("fourth-h1");
 })
 
});
// for the change of navigation bar when moving down
// to maintain light or dark mode
window.addEventListener("load",()=>{
   if(localStorage.getItem("darktheme")==="dark"){
     settingmenus.forEach(settingmenu=>{
     settingmenu.classList.add("dark-menu")
   });
   footer.classList.add("dark-footer")
   thirdsection.classList.add("third-class")
   navlists.forEach(navlist=>{
     navlist.classList.add("dark-list")
   })
   items.classList.add("dark-item")
   button.classList.add("dark-i")
   registerbutton.classList.add("dark-register")
   body.classList.add("dark");
   lastbox.classList.add("dark-box")
   design.classList.add("dark-design")
   
    ratings.forEach(rating=>{
        rating.classList.add("dark-rating")
    })
  // successbutton.classList.add("dark-button");
  // successicon.classList.add("dark-icon")
firstsections.forEach(firstsection=>{
        firstsection.classList.add("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.add("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.add("dark-class")
    })
    generalnav.classList.add("dark-nav");
    
    fourthsection.classList.toggle("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.add("fourth-h2")});
   headtext.classList.add("fourth-h1");
   if(body.classList.contains("dark")){
    document.querySelector(".dark-mode").innerText="Light-mode"
   }else{
    document.querySelector(".dark-mode").innerText= "Dark-mode"
   }
   }
  //  counter statement for the darkmode to turn to light mode
     else if (localStorage.getItem("darktheme")==="light"){
       settingmenus.forEach(settingmenu=>{
     settingmenu.classList.remove("dark-menu")
   });
   thirdsection.classList.remove("third-class")
   navlists.forEach(navlist=>{
     navlist.classList.remove("dark-list")
   })
   items.classList.remove("dark-item")
   lastbox.classList.remove("dark-box")
   button.classList.remove("dark-i")
   registerbutton.classList.remove("dark-register")
   body.classList.remove("dark");
   footer.classList.remove("dark-footer")
   design.classList.remove("dark-design")
   
    ratings.forEach(rating=>{
        rating.classList.remove("dark-rating")
    })
  // successbutton.classList.remove("dark-button");
  // successicon.classList.remove("dark-icon")
firstsections.forEach(firstsection=>{
        firstsection.classList.remove("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.remove("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.remove("dark-class")
    })
    generalnav.classList.remove("dark-nav");

    fourthsection.classList.remove("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.remove("fourth-h2")});
   headtext.classList.remove("fourth-h1");
   }
})
// media query dark mode jss




// for media query 700px to 1500px
const menu_show=document.querySelector("#media-icon-show");
const menu_hide=document.querySelector("#media-icon-hide");
  const dark_menu=document.querySelector(".open-button-media");
  const register_media_button=document.querySelector("#register-button-media");

  document.querySelector(".dark-mode-media").addEventListener("click",(e)=>{
  e.preventDefault();
    dark_menu.classList.toggle("dark-open")
    register_media_button.classList.toggle("dark-register-media")
  medianav.classList.toggle("dark-media-nav")
  footer.classList.toggle("dark-footer")
    settingmenus.forEach(settingmenu=>{
      settingmenu.classList.toggle("dark-menu")
    });
    lastbox.classList.toggle("dark-box")
    thirdsection.classList.toggle("third-class")
    navlists.forEach(navlist=>{
      navlist.classList.toggle("dark-list")
    })
    button.classList.toggle("dark-i")
    registerbutton.classList.toggle("dark-register")
    body.classList.toggle("dark");
    design.classList.toggle("dark-design")
    items.classList.toggle("dark-item")
    if(body.classList.contains("dark")){
      document.querySelector(".dark-mode-media").innerText="Light-mode"
    }else{
      document.querySelector(".dark-mode-media").innerText="Dark-mode"
    }
      ratings.forEach(rating=>{
          rating.classList.toggle("dark-rating")
      })
    // successbutton.classList.toggle("dark-button");
    // successicon.classList.toggle("dark-icon")
    firstsections.forEach(firstsection=>{
        firstsection.classList.toggle("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.toggle("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.toggle("dark-class")
    })
    generalnav.classList.toggle("dark-nav");
// to save body color preference
    if(body.classList.contains("dark")){
      localStorage.setItem("darktheme","dark")
    }else{
      localStorage.setItem("darktheme","light")
    }
fourthsection.classList.toggle("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.toggle("fourth-h2");
   headtext.classList.toggle("fourth-h1");
 })
 
});
// for the change of navigation bar when moving down
// to maintain light or dark mode
window.addEventListener("load",()=>{
   if(localStorage.getItem("darktheme")==="dark"){
     settingmenus.forEach(settingmenu=>{
     settingmenu.classList.add("dark-menu")
   });
  medianav.classList.add("dark-media-nav")
   footer.classList.add("dark-footer")
   thirdsection.classList.add("third-class")
   navlists.forEach(navlist=>{
     navlist.classList.add("dark-list")
   })
   items.classList.add("dark-item")
   dark_menu.classList.add("dark-open")
    register_media_button.classList.add("dark-register-media")
   button.classList.add("dark-i")
   registerbutton.classList.add("dark-register")
   body.classList.add("dark");
   lastbox.classList.add("dark-box")
   design.classList.add("dark-design")
   
    ratings.forEach(rating=>{
        rating.classList.add("dark-rating")
    })
  // successbutton.classList.add("dark-button");
  // successicon.classList.add("dark-icon")
firstsections.forEach(firstsection=>{
        firstsection.classList.add("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.add("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.add("dark-class")
    })
    generalnav.classList.add("dark-nav");
    
    fourthsection.classList.toggle("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.add("fourth-h2")});
   headtext.classList.add("fourth-h1");
   if(body.classList.contains("dark")){
    document.querySelector(".dark-mode-media").innerText="Light-mode"
   }else{
    document.querySelector(".dark-mode-media").innerText="Dark-mode"
   }
   }
  //  counter statement for the darkmode to turn to light mode
     else if (localStorage.getItem("darktheme")==="light"){
       settingmenus.forEach(settingmenu=>{
     settingmenu.classList.remove("dark-menu")
   });
   thirdsection.classList.remove("third-class")
   navlists.forEach(navlist=>{
     navlist.classList.remove("dark-list")
   })
   items.classList.remove("dark-item")
   dark_menu.classList.remove("dark-open")
    register_media_button.classList.remove("dark-register-media")
   lastbox.classList.remove("dark-box")
   button.classList.remove("dark-i")
   registerbutton.classList.remove("dark-register")
   body.classList.remove("dark");
   medianav.classList.remove("dark-media-nav")
   footer.classList.remove("dark-footer")
   design.classList.remove("dark-design")
   
    ratings.forEach(rating=>{
        rating.classList.remove("dark-rating")
    })
  // successbutton.classList.remove("dark-button");
  // successicon.classList.remove("dark-icon")
firstsections.forEach(firstsection=>{
        firstsection.classList.remove("dark-section")
    })
colcourses.forEach(colcourse=>{
        colcourse.classList.remove("dark-class")
    })
    secondcourses.forEach(secondcourse=>{
        secondcourse.classList.remove("dark-class")
    })
    generalnav.classList.remove("dark-nav");

    fourthsection.classList.remove("dark-fourth");
 fourthtexts.forEach(fourthtext=>{
   fourthtext.classList.remove("fourth-h2")});
   headtext.classList.remove("fourth-h1");
   }
})
