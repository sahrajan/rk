document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
  
    toggleButtons.forEach(button => {
      button.addEventListener("click", function() {
        const parentLI = button.parentElement;
        parentLI.classList.toggle("expanded");
      });
    });
  });
  
 

  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const sections = document.querySelectorAll(".sub-menu li");

    searchInput.addEventListener("input", function() {
      const searchQuery = searchInput.value.toLowerCase();

      sections.forEach(function(section) {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(searchQuery)) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });



//   document.addEventListener("DOMContentLoaded", function() {
//     const toggleButtons = document.querySelectorAll(".toggle-btn");

//     toggleButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const subMenu = button.nextElementSibling;
//             subMenu.classList.toggle("collapse");

//             const order = button.parentElement.getAttribute("data-order");
//             const listItems = Array.from(subMenu.querySelectorAll("li"));

//             if (order === "asc") {
//                 listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
//                 button.parentElement.setAttribute("data-order", "desc");
//             } else {
//                 listItems.sort((a, b) => b.textContent.localeCompare(a.textContent));
//                 button.parentElement.setAttribute("data-order", "asc");
//             }

//             listItems.forEach(item => subMenu.appendChild(item));
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".toggle-btn1");

  toggleButtons.forEach(button => {
      button.addEventListener("click", () => {
          const subMenu = button.nextElementSibling;
          subMenu.classList.toggle("collapse");

          const listItems = subMenu.querySelectorAll("li");
          const sortedListItems = Array.from(listItems).sort((a, b) => {
              const textA = a.textContent.trim().toLowerCase();
              const textB = b.textContent.trim().toLowerCase();
              return textA.localeCompare(textB);
          });

          if (!subMenu.classList.contains("collapse")) {
              subMenu.innerHTML = "";
              sortedListItems.forEach(item => {
                  subMenu.appendChild(item);
              });
          } else {
              listItems.forEach(item => {
                  subMenu.appendChild(item);
              });
          }
      });
  });
});



 // Get the parent container for the list items
 const countryList = document.getElementById("country-list");
    
 // Get all the list items within the container
 const countryItems = countryList.getElementsByTagName("li");

 // Loop through the list items and add numbers
 for (let i = 0; i < countryItems.length; i++) {
     const countryName = countryItems[i].querySelector("a").textContent;
     countryItems[i].querySelector("a").textContent = (i + 1) + ". " +" " + countryName;
 }






//  NOT WORKING THE BELOW CODE NEED TO FIX IT
 const backToTopButton = document.querySelector(".back-to-top");

 // Show/hide the button based on scroll position
 window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
     backToTopButton.style.display = "block";
   } else {
     backToTopButton.style.display = "none";
   }
 });

 // Smoothly scroll to the top when the button is clicked
 backToTopButton.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });
 



 const navbar = document.querySelector(".navbar");
 
 // Listen for scroll events
 window.addEventListener("scroll", () => {
   if (window.scrollY > 0) {
     // If user scrolled down, add the class to make the navbar light visible
     navbar.classList.add("light-visible");
   } else {
     // If user scrolled back to the top, remove the class
     navbar.classList.remove("light-visible");
   }
 });


 
 const navlinks = document.querySelector(".nav-links");

 // Listen for scroll events
 window.addEventListener("scroll", () => {
   if (window.scrollY > 0) {
     // If user scrolled down, add the class to make the navlinks light visible
     navlinks.classList.add("light-visible");
   } else {
     // If user scrolled back to the top, remove the class
     navlinks.classList.remove("light-visible");
   }
 });


 // Function to load USA content using fetch
 function loadUSAContent() {
   fetch("../Blog/USA/usa.html")
     .then(response => response.text())
     .then(data => {
       document.getElementById("usa-content").innerHTML = data;
     });
 }