const themeButtons = document.querySelectorAll("button");

const body = document.body;

// Apply selected theme
themeButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTheme = button.getAttribute("data-theme");

        // Change body class using setAttribute
        body.setAttribute("class", selectedTheme);

        // Save current theme in custom attribute
        body.setAttribute("data-theme", selectedTheme);

        console.log("Current Theme:", selectedTheme);

    });

});