document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const makeFilter = document.getElementById("makeFilter");
    const priceFilter = document.getElementById("priceFilter");
    const filterBtn = document.getElementById("filterBtn");
    const vehicleCards = document.querySelectorAll(".vehicle-card");

    function filterVehicles() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedMake = makeFilter.value.toLowerCase();
        const selectedPriceRange = priceFilter.value;

        vehicleCards.forEach((card) => {
            const make = card.getAttribute("data-make").toLowerCase();
            const model = card.getAttribute("data-model").toLowerCase();
            const price = parseInt(card.getAttribute("data-price"));

            // Check if card matches search term
            const matchesSearch =
                make.includes(searchTerm) || model.includes(searchTerm);

            // Check if card matches make filter
            const matchesMake = selectedMake === "" || make === selectedMake;

            // Check if card matches price range filter
            let matchesPrice = false;
            if (selectedPriceRange === "") {
                matchesPrice = true;
            } else if (selectedPriceRange === "under-20000") {
                matchesPrice = price < 20000;
            } else if (selectedPriceRange === "20000-40000") {
                matchesPrice = price >= 20000 && price <= 40000;
            } else if (selectedPriceRange === "over-40000") {
                matchesPrice = price > 40000;
            }

            // Show or hide card based on all criteria
            if (matchesSearch && matchesMake && matchesPrice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Attach event listeners
    filterBtn.addEventListener("click", filterVehicles);
    searchBar.addEventListener("input", filterVehicles);
    makeFilter.addEventListener("change", filterVehicles);
    priceFilter.addEventListener("change", filterVehicles);
});
