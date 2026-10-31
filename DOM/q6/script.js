const searchInput = document.getElementById("searchInput");

const studentTable = document.getElementById("studentTable");

const noResults = document.getElementById("noResults");

// Get all student rows
const rows = studentTable.querySelectorAll("tr");

// Search students
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    let visibleCount = 0;

    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";

        }

    });

    // Show message if no matching records
    noResults.style.display =
        visibleCount === 0 ? "block" : "none";

});