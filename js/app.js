function check() {
  const isChecked = document.getElementById("toggle").checked;
  console.log(isChecked);

  if (isChecked == true) {
    // Changing The CSS
    const style = document.createElement("style");
    style.innerHTML = `
    body {
      background-color: #1E1E1E;
    }
    :root {
      --color: #97A1EF;
      --color-dark: #394bed;
      --font-size: 1em;
      --title-color: #ffffff;
      --font-color: #a2a2a2;
    }
    `;
    document.head.appendChild(style);

    // Changing The Logo
    document.querySelector(".nisarul-logo").src = "./images/Logo-for-dark.png";
  } else if (isChecked == false) {
    const style = document.createElement("style");
    style.innerHTML = `
    body {
      background-color: transparent;
    }
    :root {
      --color: #6729f6;
      --color-dark: #394bed;
      --font-size: 1em;
      --title-color: #141c3a;
      --font-color: #222222;
    }
    `;
    document.head.appendChild(style);
    // Changing The Logo
    document.querySelector(".nisarul-logo").src = "./images/Logo.png";
  }
}
