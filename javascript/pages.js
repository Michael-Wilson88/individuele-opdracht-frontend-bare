import { sortedBands } from "./bandObjects.js";

const PAGE_SIZE = 5;
const bandContainer = document.getElementById("band-container");
const navbar = document.getElementById("navbar");

// Function to display a page of bands
function displayBands(pageNumber, sortAscending) {
    // Calculate the start and end index of the page
    const startIndex = (pageNumber - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, sortedBands.length);

    // Sort the bands based on the sort order
    const bands = sortedBands.slice(startIndex, endIndex);
    if (!sortAscending) {
        bands.reverse();
    }

    // Clear the band container and populate it with the bands
    bandContainer.innerHTML = "";
    bands.forEach((band) => {
        const div = document.createElement("div");
        const bandHtml = `
      <div class="image-container">
        <a href="#">
          <img src="${band.image}" alt="${band.bandName}-logo" class="image">
        </a>
        <div id="${band.bandName}-details" class="details"></div>
      </div>
    `;
        div.addEventListener("click", () => toggleDetails(band.bandName));
        div.innerHTML = bandHtml;
        bandContainer.appendChild(div);
    });

    // Populate the details for each band
    bands.forEach((band, i) => populateDetails(startIndex + i));
}

// Function to toggle the details section for a band
function toggleDetails(bandName) {
    const details = document.getElementById(`${bandName}-details`);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// Function to populate the details section for a band
function populateDetails(bandIndex) {
    const band = sortedBands[bandIndex];
    const details = document.getElementById(`${band.bandName}-details`);
    details.innerHTML = `
    <p><strong>City:</strong> ${band.city}</p>
    <p><strong>Genre:</strong> ${band.genre}</p>
    <p><strong>Albums:</strong></p>
    <ul>
      ${band.albums.map((album) => `<li>${album.name}</li>`).join("")}
    </ul>
  `;
}

// Function to update the page links in the navbar
function updateNavbar(pageNumber, pageCount) {
    navbar.innerHTML = "";
    for (let i = 1; i <= pageCount; i++) {
        const link = document.createElement("a");
        link.href = `#page-${i}`;
        link.textContent = `Page ${i}`;
        if (i === pageNumber) {
            link.classList.add("active");
        }
        link.addEventListener("click", (event) => {
            event.preventDefault();
            displayBands(i, sortAscending);
            updateNavbar(i, pageCount);
        });
        const li = document.createElement("li");
        li.appendChild(link);
        navbar.appendChild(li);
    }
}

// Function to handle sorting
function handleSort() {
    const sortSelect = document.getElementById("sort-select");
    const sortAscending = sortSelect.value === "asc";
    displayBands(1, sortAscending);
    updateNavbar(1, Math.ceil(sortedBands.length / PAGE_SIZE));
}

// Add an event listener to the sort select element
// document.getElementById("sort-select").addEventListener("change", handleSort);

// Initialize the page with the default sort order and page number
displayBands(1, true);
updateNavbar(1, Math.ceil(sortedBands.length / PAGE_SIZE));