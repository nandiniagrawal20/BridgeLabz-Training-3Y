const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");

// Open modal when image is clicked
gallery.addEventListener("click", function(event) {

    if (event.target.tagName === "IMG") {

        modalImage.src = event.target.src;

        modal.style.display = "flex";
    }

});

// Prevent closing when clicking inside modal
modalImage.addEventListener("click", function(event) {

    event.stopPropagation();

});

// Close modal when clicking outside image
modal.addEventListener("click", function() {

    modal.style.display = "none";

});