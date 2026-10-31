// Selecting elements
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add new product
addButton.addEventListener("click", function() {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="product-name"></span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    li.querySelector(".product-name").textContent = productName;

    productList.appendChild(li);

    productInput.value = "";
});

// Event delegation for Edit and Delete
productList.addEventListener("click", function(event) {

    const li = event.target.closest("li");

    if (!li) return;

    // Delete product
    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    // Edit product
    if (event.target.classList.contains("edit")) {

        const span = li.querySelector(".product-name");

        if (li.querySelector("input")) return;

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();

        // Save edited product
        function saveEdit() {

            if (!input.isConnected) return;

            const newSpan = document.createElement("span");

            newSpan.className = "product-name";
            newSpan.textContent = input.value.trim() || span.textContent;

            input.replaceWith(newSpan);
        }

        input.addEventListener("blur", saveEdit);

        input.addEventListener("keydown", function(e) {

            if (e.key === "Enter") {
                input.blur();
            }

            if (e.key === "Escape") {
                input.value = span.textContent;
                input.blur();
            }
        });
    }
});