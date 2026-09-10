const map = L.map("map").setView(
    [coordinates[1], coordinates[0]],
    9
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 9,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const marker = L.marker(
    [coordinates[1], coordinates[0]]
)
.bindPopup(
    `<h4>${listingLocation}</h4>
     <p>Exact Location will be provided after booking</p>`
)
.addTo(map);