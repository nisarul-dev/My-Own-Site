const toggleButton = document.querySelector(".toggle input");

const hamBurgerIcon = document.querySelector(".fa-bars");
const nightIcon = document.querySelector(".night-icon");
const target = document.querySelector(".menu-area");

// creating a Night mode link tag element
const linkTag = document.createElement("link");
linkTag.id = "night-css";
linkTag.setAttribute("rel", "stylesheet");
linkTag.setAttribute("href", "./css/night-mode.css");

toggleButton.addEventListener("change", dayOrNight);
function dayOrNight() {
  if (toggleButton.checked == true) {
    document.head.insertBefore(
      linkTag,
      document.querySelector("head link.icon")
    );

    // Changing The Logo
    document.querySelector(".nisarul-logo").src = "./images/Logo-for-dark.png";
    nightIcon.classList.toggle("fa-sun");
  } else {
    document.head.removeChild(linkTag);
    // Changing The Logo
    document.querySelector(".nisarul-logo").src = "./images/Logo.png";
    nightIcon.classList.toggle("fa-sun");
  }
}

// Running the function While loading the page for the first time
if (toggleButton.checked == true) {
  document.head.insertBefore(linkTag, document.querySelector("head link.icon"));
  document.querySelector(".nisarul-logo").src = "./images/Logo-for-dark.png";
  nightIcon.classList.toggle("fa-sun");
}

// Mobile Menu Marketing

hamBurgerIcon.addEventListener("click", function () {
  target.classList.toggle("menu-area-active");
  nightIcon.classList.toggle("d-n");
  hamBurgerIcon.classList.toggle("fa-times");
});

nightIcon.addEventListener("click", () => {
  if (toggleButton.checked == true) {
    toggleButton.checked = false;
    console.log("no-1");
    dayOrNight();

    // nightIcon.classList.toggle("fa-sun");
  } else {
    console.log("no-2");
    toggleButton.checked = true;
    dayOrNight();
    // nightIcon.classList.toggle("fa-sun");
  }
});
