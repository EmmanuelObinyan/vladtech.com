//for the pre loader page
window.addEventListener("load",()=>{
  document.getElementById("preloader-homepage").style.display="flex"
  document.querySelector("header").style.display="none"
  document.querySelector(".first-section").style.display="none"
  document.querySelector("main").style.display="none"
  document.querySelector("footer").style.display="none"

   setTimeout(()=>{
    document.getElementById("preloader-homepage").style.display="none"
    document.querySelector("header").style.display="flex"
  document.querySelector(".first-section").style.display="flex"
  document.querySelector("main").style.display="block"
  document.querySelector("footer").style.display="block"
   },4000)
})
// for the scroll animation
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
      threshold: 0.5 // trigger when 50% of element is in view
    });
   const hiddens= document.querySelectorAll('.hidden');
    hiddens.forEach(hidden=>{
      observer.observe(hidden)
    })
    // to return to the home
    // window.addEventListener("scroll",()=>{
    //   if(window.scrollY >= 800){
    //     window.scrollTo({
    //       top:0,
    //       behavior:"smooth",
    //     })

    //   }
    // })
// for the nav bar,settings and the account settings
document.querySelector(".open-button").addEventListener("click",()=>{
   const menu=document.querySelector(".setting-menu");
     menu.style.display="block"
        document.querySelector(".open-button").style.display="none"
        document.querySelector(".close-menu").style.display="block"  
})
document.querySelector(".close-menu").addEventListener("click",()=>{
    const closemenu =document.querySelector(".setting-menu");
    closemenu.style.display="none";
         document.querySelector(".open-button").style.display="flex"
        document.querySelector(".close-menu").style.display="none"
     
})

// To open the second row of courses
document.querySelector("#see-more").addEventListener("click",()=>{
    const second_row=document.getElementById("second-row");
     second_row.classList.toggle("show");

if(second_row.classList.contains("show")){
        document.getElementById("see-more").textContent="see-less"
        document.getElementById("see-more").style.fontFamily="inter"
        document.getElementById("see-more").style.fontWeight="bold"
     }else{
        document.getElementById("see-more").textContent="see-more"
        document.getElementById("see-more").style['font-Family']="inter"
        document.getElementById("see-more").style.fontWeight="bold"
     }

    })
document.getElementById("view-courses").addEventListener("click",(e)=>{
    e.preventDefault()
    const second_row=document.getElementById("second-row");
     second_row.classList.add("show");
     if(second_row.classList.contains("show")){
        document.getElementById("see-more").textContent="see-less"
        document.getElementById("see-more").style.fontFamily="inter"
        document.getElementById("see-more").style.fontWeight="bold"
     }else{
        document.getElementById("see-more").textContent="see-more"
        document.getElementById("see-more").style['font-Family']="inter"
        document.getElementById("see-more").style.fontWeight="bold"
     }
})
// Hover over the courses outlines,videos
 const courses=document.querySelectorAll(".col-courses");
  courses.forEach( course => {
     const video = course.querySelector(" video");
 course.onmouseover=()=>{
     course.style.transform="scale(1.15)"
     video.play();
  }
  function mouseout(){
        course.style.transform="scale(1)"
        video.pause();
        video.currentTime = 0;
    }
    course.onmouseout=()=>{
        mouseout()
    }
  });
    // for media query,nav bars and buttons
     const mediabar=document.querySelector(".media-nav");
    const hidebar=document.getElementById("media-icon-hide");
    document.getElementById("media-icon-show").addEventListener("click",()=>{
      mediabar.style.transform="translateX(6%)";
    })
    hidebar.addEventListener("click",()=>{
      mediabar.style.transform ="translateX(105%)"
    })
    if(mediabar.style.transform =="translateX(6%)"){
        document.getElementById("media-icon-show").style.display="none";
        hidebar.style.display="block"
       }
       else if(mediabar.style.transform =="translateX(105%)"){
          document.getElementById("media-icon-show").style.display="block";
        hidebar.style.display="none"
        }
        // to close the menu bar in nav bar in the media
        const closemenu=document.querySelector(".close-menu-media")
          const settingmedia=document.querySelector(".setting-menu-media")
        document.querySelector(".open-button-media").addEventListener("click",()=>{
            settingmedia.style.display="block"
       closemenu.addEventListener("click",()=>{
          settingmedia.style.display="none"
       })
          })
          // active buttons for the courses,when pressed down
          const data_science=document.querySelector(".data-science");
          const data_cleaning=document.querySelector(".data-cleaning");
          const artifical_intel=document.querySelector(".artifical-intel");
          const sql_database=document.querySelector(".sql-database");
          const cyber_security=document.querySelector(".cyber-security");

          data_science.addEventListener("click",(e)=>{
            e.preventDefault();
       const data_science_div= document.querySelector(".data_science");
          data_science_div.style.transform="scale(1.15)";
            document.querySelector(".data_science video").play()
          })
          data_cleaning.addEventListener("click",(e)=>{
            e.preventDefault();
          document.querySelector(".clean_data").style.transform="scale(1.15)";
            document.querySelector(".clean_data video").play()
          })
          artifical_intel.addEventListener("click",(e)=>{
            e.preventDefault();
          document.querySelector(".artifical_intel").style.transform="scale(1.15)";
            document.querySelector(".artifical_intel video").play()
          })
          cyber_security.addEventListener("click",(e)=>{
            e.preventDefault();
          document.querySelector(".cyber_security").style.transform="scale(1.15)";
            document.querySelector(".cyber_security video").play()
          })
          sql_database.addEventListener("click",(e)=>{
            e.preventDefault();
          document.querySelector(".sql_database").style.transform="scale(1.15)";
            document.querySelector(".sql_database video").play()
          })
          // to show username on the registered button
          // for media display
          const button_media=document.getElementById("register-button-media")
          const gotten_username=(localStorage.getItem("username"))
               if(localStorage.getItem("username")!==null){
                 button_media.textContent=gotten_username
                   if(button_media.textContent===gotten_username){
              // toggle log out button
              button_media.addEventListener("click",()=>{
                document.querySelector(".log-out-class").style.display="block"
              })
                document.getElementById("log-out-icon").addEventListener("click",()=>{
             document.querySelector(".log-out-class").style.display="none"
                })
                document.querySelector(".log-out-class p").addEventListener("click",()=>{
                   window.location.replace("educationloginform.html")
                }
                )
                   }
                   else if(button_media.textContent==="Login/Register")
                    {
              //remove toggle log out button
              button_media.removeEventListener("click",()=>{
                document.querySelector(".log-out-class").style.display="block"
              })
                document.getElementById("log-out-icon").removeEventListener("click",()=>{
             document.querySelector(".log-out-class").style.display="none"
                })
                   }
               }
               else{
                button_media.textContent="Login/Register"
                 // to return to login page
                button_media.addEventListener("click",()=>{
                  window.location.replace("educationloginform.html")
                })
               }
              //  for the desktop size

const desktop_button=document.getElementById("register-button")
          const gotten_user_handle=(localStorage.getItem("username"))
               if(localStorage.getItem("username")!==null){
                 desktop_button.textContent=gotten_username
                 desktop_button.style.fontSize="1.2rem"
                   if(desktop_button.textContent===gotten_username){
              // toggle log out button
              desktop_button.addEventListener("click",()=>{
                document.querySelector(".log-out-button").style.display="block"
              })
                document.getElementById("log-out-icons").addEventListener("click",()=>{
             document.querySelector(".log-out-button").style.display="none"
                })
                document.querySelector(".log-out-button p").addEventListener("click",()=>{
                   window.location.replace("educationloginform.html")
                }
                )
                   }
                   else if(desktop_button.textContent==="Login/Register")
                    {
              //remove toggle log out button
              desktop_button.removeEventListener("click",()=>{
                document.querySelector(".log-out-button").style.display="block"
              })
                document.getElementById("log-out-icons").removeEventListener("click",()=>{
             document.querySelector(".log-out-button").style.display="none"
                })
                   }
               }
               else{
                desktop_button.textContent="Login/Register"
                desktop_button.style.fontSize="1.3rem"
                 // to return to login page
                desktop_button.addEventListener("click",()=>{
                  window.location.replace("educationloginform.html")
                })
               }
              //  dark mode style to affect log out button
              if(localStorage.getItem("darktheme")==="dark"){
                document.querySelector(".log-out-button").classList.add("dark-log-button")
                // homepage preloader
                document.getElementById("preloader-homepage").classList.add("dark-homepage")
              }
               if(localStorage.getItem("darktheme")==="light"){
                document.querySelector(".log-out-button").classList.remove("dark-log-button")
                //  homepage preloader
                document.getElementById("preloader-homepage").classList.remove("dark-homepage")
              }
              // to loop numbers in the lifelong container
              // to remember
              
//         const first_h2_number=document.getElementById("first-h2-number")
//         const h2_number=document.getElementById("h2-number")
//         let score=25;
             
// const life_long=document.getElementById("life-long")
// const observers = new IntersectionObserver((entries) => {
//    const entry=entries[0];
//      if (entry.isIntersecting){
//         const count_down=setInterval(()=>{
//             h2_number.textContent=score;
//             score++;
//         },1000)
//      }
// }, {
//   threshold: 1 // 100% of section must be visible
// });

// observers.observe(life_long);

