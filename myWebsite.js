let majorImage = document.getElementById("first_major_div");
let hoverLink = document.getElementById("hover_link_div");
let moreInfoArray = document.getElementsByClassName("info_bubbles");
let welcomeButton = document.getElementById("start");
let websitePage = document.getElementById("website");
let entrancePage = document.getElementById("entrance_page");
let welcomeWords = document.getElementById("welcome");

//THIS IS FOR THE REAPPEARING DIV AT THE INFO SECTION
for(let i = 0; i < moreInfoArray.length; i++) {

    moreInfoArray[i].onmouseover = function() {
        hoverLink.style.display = "block";
    }

    moreInfoArray[i].onmouseout = function() {
        hoverLink.style.display = "none";
    }
}

// When the user scrolls the page, execute myFunction 
// THIS THE SCROLL BAR
window.onscroll = myFunction;

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// welcomeButton.onclick = function() {
//     websitePage.style.display = "block";
//     entrancePage.style.display = "none";
// }

// welcome.onmouseover =  function() {
//     welcome.style.color = "white";
// }

// welcome.onmouseout = function() {
//     welcome.style.color = "transparent";
// }
    

