import {sortedBands} from "./bandObjects.js";

const bandContainer = document.getElementById("band-container");
sortedBands.forEach( b =>{
    const div = document.createElement('div');
    const band = `
<div class="image-container">
    <a href="#">
        <img src="${b.image}" alt="${b.bandName}-logo" class="image">
        </button>
    </a>
    <div id="${b.bandName}-details" class="details"></div>
</div>`
    div.addEventListener("click", () =>
    detailsAccordion(b.bandName))
    div.innerHTML = band;
    bandContainer.appendChild(div);
});

export function detailsAccordion(bandId) {
    const details = document.getElementById(bandId + "-details");
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    } console.log("detailsAccordeon is geklikt")
}

function populateDetails(bandIndex) {
    const band = sortedBands[bandIndex];
    const details = document.getElementById(band.bandName + "-details");
    details.innerHTML = `
    <p><strong>City:</strong> ${band.city}</p>
    <p><strong>Genre:</strong> ${band.genre}</p>
    <p><strong>Albums:</strong></p>
    <ul>
      ${band.albums.map(album => `<li>${album.name}</li>`).join('')}
    </ul>
  `;
}
for (let i = 0; i < sortedBands.length; i++) {
    populateDetails(i);
}


