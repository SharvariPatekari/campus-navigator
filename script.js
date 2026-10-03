// // ===== TILE LAYERS =====

// const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

// attribution: '© OpenStreetMap contributors'

// });

// const esri = L.tileLayer(

// 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

// attribution: 'Tiles © Esri — Source: Esri, NASA, NGA, USGS'

// }

// );

// // ===== MAP INIT =====

// const map = L.map('map', {

// center: [16.708064044981626, 74.47914581391832],

// zoom: 17,

// layers: [esri],

// attributionControl: false

// });

// // ===== LAYER SWITCHER =====

// const baseMaps = { "OpenStreetMap": osm, "Esri Satellite": esri };

// L.control.layers(baseMaps).addTo(map);

// // ===== CAMPUS LOCATIONS =====

// const locations = {

// "Main Gate": [16.708004820520603, 74.47821037003057],

// "A-Block": [16.707920430027187, 74.47926135917969],

// "B-Block(Main gate)": [16.70839440373399, 74.47845343148161],

// "B-Block(back gate)": [16.708267556761538, 74.4791008958999],

// "Library": [16.708003699692753, 74.47988350030994],

// "Office": [16.707805888716443, 74.47925586339339],

// "Canteen": [16.708397646426175, 74.47931088913448],

// "Hostel": [16.708305775666354, 74.48079021825784],

// "Gate 2": [16.7074578, 74.4791364],

// "Post Office": [16.707806739776377, 74.4783889243908],

// "Workshop": [16.70833036303489, 74.47966026485312]

// };

// // ===== MARKERS =====

// for (const name in locations) {

// L.marker(locations[name]).addTo(map).bindPopup(name);

// }

// // ===== POPULATE DROPDOWNS =====

// window.onload = () => {

// const sourceSelect = document.getElementById("source");

// const destinationSelect = document.getElementById("destination");

// for (const loc in locations) {

// sourceSelect.add(new Option(loc, loc));

// destinationSelect.add(new Option(loc, loc));

// }

// };

// // ===== ORS API KEY =====

// const apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlNjdlZWNlMmJkNjQ3YzJiOWRhNDdhMGQxN2NjMDIwIiwiaCI6Im11cm11cjY0In0=";

// // ===== FRONT-SIDE ROUTES =====

// const canteenToHostelFrontWaypoints = [

// [16.708397646426175, 74.47931088913448],

// [16.7083609, 74.4794500],

// [16.7083405, 74.4796800],

// [16.7083304, 74.4799000],

// [16.7083000, 74.4802500],

// [16.708305775666354, 74.48079021825784]

// ];

// const bblockToCanteenFrontWaypoints = [

// [16.70839440373399, 74.47845343148161],

// [16.708080482374136, 74.47837247423305],

// [16.70793142583859, 74.47916639614283],

// [16.708397646426175, 74.47931088913448]

// ];

// const ablockToBblockFrontWaypoints = [

// [16.707920430027187, 74.47926135917969],

// [16.708029521463757, 74.47881684964061],

// [16.708070625011963, 74.47837160293913],

// [16.70846624621088, 74.47840378944767]

// ];

// const bblockMainToHostelWaypoints = [

// [16.70839440373399, 74.47845343148161],

// [16.708029521463757, 74.47832332317631],

// [16.70792676255452, 74.47913335030792],

// [16.70826586674508, 74.47920308774309],

// [16.70816310796308, 74.4801257676546],

// [16.70841486688073, 74.48021159834404],

// [16.708348073730853, 74.48076949782542]

// ];

// const bblockBackToHostelWaypoints = [

// [16.708267556761538, 74.4791008958999],

// [16.70821448736099, 74.47977708047874],

// [16.70816310796308, 74.4801257676546],

// [16.70841486688073, 74.48021159834404],

// [16.708348073730853, 74.48076949782542]

// ];

// const bblockToLibraryFrontWaypoints = [

// [16.70839440373399, 74.47845343148161],

// [16.708029389414886, 74.47834123010902],

// [16.708062786048504, 74.47867650623967],

// [16.707921492558665, 74.47902519341552],

// [16.708211786342673, 74.47919953700345],

// [16.708157837973737, 74.47993714449083],

// [16.707993423802925, 74.47990495798228] // Library

// ];

// const bblockToOfficeFrontWaypoints = [

// [16.70839440373399, 74.47845343148161],

// [16.708029389414886, 74.47834123010902],

// [16.708062786048504, 74.47867650623967],

// [16.707805888716443, 74.47925586339339] // Office

// ];

// const bblockToGate2FrontWaypoints = [

// [16.70839440373399, 74.47845343148161],

// [16.707806739776377, 74.4783889243908],

// [16.707875430030864, 74.47899531745733],

// [16.70786772310836, 74.47916429662718],

// [16.7074578, 74.4791364] // Gate 2

// ];

// const mainGateTobbolockMainFrontWaypoints=[

// [16.70839440373399, 74.47845343148161],

// [16.708029389414886, 74.47834123010902],

// [16.708004820520603, 74.47821037003057]

// ];

// const bblockTobbloockbackFrontWaypoints=[

// [16.70839440373399, 74.47845343148161],

// [16.70805525813408, 74.47835426949557],

// [16.707926809506212, 74.47916966104526],

// [16.70820939637344, 74.47921257638998],

// [16.708267556761538, 74.4791008958999]

// ]

// // ===== UTILITIES =====

// function clearRoutes() {

// if (window.routeLayers) {

// window.routeLayers.forEach(layer => map.removeLayer(layer));

// }

// window.routeLayers = [];

// }

// function addWaypointsMarkers(waypoints, color) {

// waypoints.forEach((point, idx) => {

// L.circleMarker(point, {

//   radius: 4,

//   color: color,

//   fillColor: color,

//   fillOpacity: 0.8

// })

// });

// }

// // ===== FIND ROUTE FUNCTION =====

// async function findRouteWithAlternatives() {

// const srcName = document.getElementById("source").value;

// const destName = document.getElementById("destination").value;

// if (srcName === destName) {

// alert("Source and destination must be different.");

// return;

// }

// const source = locations[srcName];

// const dest = locations[destName];

// clearRoutes();

// // ----- FRONT-SIDE ROUTES -----

// const frontRoutes = [

// { src: "Canteen", dest: "Hostel", waypoints: canteenToHostelFrontWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "Canteen", waypoints: bblockToCanteenFrontWaypoints, color: "blue" },

// { src: "A-Block", dest: "B-Block(Main gate)", waypoints: ablockToBblockFrontWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "Hostel", waypoints: bblockMainToHostelWaypoints, color: "blue" },

// { src: "B-Block(back gate)", dest: "Hostel", waypoints: bblockBackToHostelWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "Library", waypoints: bblockToLibraryFrontWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "Office", waypoints: bblockToOfficeFrontWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "Gate 2", waypoints: bblockToGate2FrontWaypoints, color: "blue" },

// { src: "Main Gate", dest: "B-Block(Main gate)", waypoints: mainGateTobbolockMainFrontWaypoints, color: "blue" },

// { src: "B-Block(Main gate)", dest: "B-Block(back gate)", waypoints: bblockTobbloockbackFrontWaypoints, color: "blue" }

// ];

// for (const route of frontRoutes) {

// if ((srcName === route.src && destName === route.dest) ||

//     (srcName === route.dest && destName === route.src)) {

//   const waypoints = (srcName === route.src) ? route.waypoints.slice() : route.waypoints.slice().reverse();

//   const polyline = L.polyline(waypoints, { color: route.color, weight: 5 }).addTo(map);

//   addWaypointsMarkers(waypoints, route.color);

//   window.routeLayers.push(polyline);

//   map.fitBounds(polyline.getBounds(), { padding: [40, 40] });

//   return;

// }

// }

// // ----- DEFAULT ORS ROUTE -----

// try {

// const response = await axios.post(

//   'https://api.openrouteservice.org/v2/directions/foot-walking/geojson',

//   {

//     coordinates: [[source[1], source[0]], [dest[1], dest[0]]],

//     instructions: false,

//     alternative_routes: { target_count: 3, share_factor: 0.6, weight_factor: 1.6 }

//   },

//   {

//     headers: { 'Authorization': apiKey, 'Content-Type': 'application/json' }

//   }

// );



// const colors = ['blue', 'green', 'red'];

// response.data.features.forEach((feature, i) => {

//   const coords = feature.geometry.coordinates.map(p => [p[1], p[0]]);

//   const polyline = L.polyline(coords, { color: colors[i % colors.length], weight: 5 }).addTo(map);

//   window.routeLayers.push(polyline);

// });



// if (window.routeLayers[0]) map.fitBounds(window.routeLayers[0].getBounds(), { padding: [40, 40] });

// } catch (error) {

// alert("Failed to fetch routes: " + (error.message || error));

// console.error(error);

// }

// }


// ===== TILE LAYERS =====
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
});

const esri = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri — Source: Esri, NASA, NGA, USGS'
  }
);

// ===== MAP INIT =====
const map = L.map('map', {
  center: [16.708064044981626, 74.47914581391832],
  zoom: 17,
  layers: [esri],
  attributionControl: false
});

// ===== LAYER SWITCHER =====
const baseMaps = { "OpenStreetMap": osm, "Esri Satellite": esri };
L.control.layers(baseMaps).addTo(map);

// ===== CAMPUS LOCATIONS =====
const locations = {
  "Main Gate": [16.708004820520603, 74.47821037003057],
  "A-Block": [16.707920430027187, 74.47926135917969],
  "B-Block(Main gate)": [16.70839440373399, 74.47845343148161],
  "B-Block(back gate)": [16.708267556761538, 74.4791008958999],
  "Library": [16.708003699692753, 74.47988350030994],
  "Office": [16.707805888716443, 74.47925586339339],
  "Canteen": [16.708397646426175, 74.47931088913448],
  "Hostel": [16.708305775666354, 74.48079021825784],
  "Gate 2": [16.7074578, 74.4791364],
  "Post Office": [16.707806739776377, 74.4783889243908],
  "Workshop": [16.70833036303489, 74.47966026485312]
};

// ===== POPUP INFO (images + short description) =====
// You can replace these image URLs with local paths like "images/library.jpg" if you add images in your project folder.
const locationInfo = {
  "Main Gate": { img: "image/download.jpg", desc: "Main entrance of the campus, accessible for vehicles and pedestrians." },
  "A-Block": { img: "image/a_block.jpg", desc: "Academic block with classrooms and labs." },
  "B-Block(Main gate)": { img: "image/b-block.jpg", desc: "Main B-Block area and labs." },
  "B-Block(back gate)": { img: "image/b-block_back.jpg", desc: "Back entrance to B-Block." },
  "Library": { img: "image/lib.jpg", desc: "The library offers a wide range of academic resources and a peaceful study area." },
  "Office": { img: "image/office.jpg", desc: "Administrative office for handling student queries and admissions." },
  "Canteen": { img: "image/canteen.jpg", desc: "Canteen provides fresh food and refreshments for students and staff." },
  "Hostel": { img: "image/hostel.jpg", desc: "Hostel facilities available for both boys and girls with proper amenities." },
  "Gate 2": { img: "image/gate2.jpg", desc: "Secondary entrance/exit." },
  "Post Office": { img: "image/post_office.jpg", desc: "Campus postal services." },
  "Workshop": { img: "image/workshoop.jpg", desc: "Workshop where practical training and mechanical sessions are conducted." }
};

// ===== MARKERS (with popups) =====
for (const name in locations) {
  const coords = locations[name];
  const info = locationInfo[name];
  if (info) {
    const popupHTML = `
      <div style="text-align:center; max-width:220px;">
        <h4 style="margin:6px 0 4px 0;">${name}</h4>
        <img src="${info.img}" alt="${name}" style="width:200px; height:120px; object-fit:cover; border-radius:6px; display:block; margin:0 auto 6px;">
        <p style="font-size:13px; margin:0;">${info.desc}</p>
      </div>
    `;
    L.marker(coords).addTo(map).bindPopup(popupHTML);
  } else {
    L.marker(coords).addTo(map).bindPopup(name);
  }
}

// ===== POPULATE DROPDOWNS =====
window.onload = () => {
  const sourceSelect = document.getElementById("source");
  const destinationSelect = document.getElementById("destination");
  for (const loc in locations) {
    sourceSelect.add(new Option(loc, loc));
    destinationSelect.add(new Option(loc, loc));
  }
};

// ===== ORS API KEY =====
const apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlNjdlZWNlMmJkNjQ3YzJiOWRhNDdhMGQxN2NjMDIwIiwiaCI6Im11cm11cjY0In0=";

// ===== FRONT-SIDE ROUTES =====
const canteenToHostelFrontWaypoints = [
  [16.708397646426175, 74.47931088913448],
  [16.7083609, 74.4794500],
  [16.7083405, 74.4796800],
  [16.7083304, 74.4799000],
  [16.7083000, 74.4802500],
  [16.708305775666354, 74.48079021825784]
];

const bblockToCanteenFrontWaypoints = [
  [16.70839440373399, 74.47845343148161],
  [16.708080482374136, 74.47837247423305],
  [16.70793142583859, 74.47916639614283],
  [16.708397646426175, 74.47931088913448]
];

const ablockToBblockFrontWaypoints = [
  [16.707920430027187, 74.47926135917969],
  [16.708029521463757, 74.47881684964061],
  [16.708070625011963, 74.47837160293913],
  [16.70846624621088, 74.47840378944767]
];

const bblockMainToHostelWaypoints = [
  [16.70839440373399, 74.47845343148161],
  [16.708029521463757, 74.47832332317631],
  [16.70792676255452, 74.47913335030792],
  [16.70826586674508, 74.47920308774309],
  [16.70816310796308, 74.4801257676546],
  [16.70841486688073, 74.48021159834404],
  [16.708348073730853, 74.48076949782542]
];

const bblockBackToHostelWaypoints = [
  [16.708267556761538, 74.4791008958999],
  [16.70821448736099, 74.47977708047874],
  [16.70816310796308, 74.4801257676546],
  [16.70841486688073, 74.48021159834404],
  [16.708348073730853, 74.48076949782542]
];

const bblockToLibraryFrontWaypoints = [
  [16.70839440373399, 74.47845343148161],
  [16.708029389414886, 74.47834123010902],
  [16.708062786048504, 74.47867650623967],
  [16.707921492558665, 74.47902519341552],
  [16.708211786342673, 74.47919953700345],
  [16.708157837973737, 74.47993714449083],
  [16.707993423802925, 74.47990495798228] // Library
];

const bblockToOfficeFrontWaypoints = [
  [16.70839440373399, 74.47845343148161],
  [16.708029389414886, 74.47834123010902],
  [16.708062786048504, 74.47867650623967],
  [16.707805888716443, 74.47925586339339] // Office
];

const bblockToGate2FrontWaypoints = [
  [16.70839440373399, 74.47845343148161],
  [16.707806739776377, 74.4783889243908],
  [16.707875430030864, 74.47899531745733],
  [16.70786772310836, 74.47916429662718],
  [16.7074578, 74.4791364] // Gate 2
];

const mainGateTobbolockMainFrontWaypoints=[
  [16.70839440373399, 74.47845343148161],
  [16.708029389414886, 74.47834123010902],
  [16.708004820520603, 74.47821037003057]
];

const bblockTobbloockbackFrontWaypoints=[
  [16.70839440373399, 74.47845343148161],
  [16.70805525813408, 74.47835426949557],
  [16.707926809506212, 74.47916966104526],
  [16.70820939637344, 74.47921257638998],
  [16.708267556761538, 74.4791008958999]
]

// ===== UTILITIES =====
function clearRoutes() {
  if (window.routeLayers) {
    window.routeLayers.forEach(layer => map.removeLayer(layer));
  }
  window.routeLayers = [];
}

function addWaypointsMarkers(waypoints, color) {
  waypoints.forEach((point, idx) => {
    L.circleMarker(point, {
      radius: 4,
      color: color,
      fillColor: color,
      fillOpacity: 0.8
    }).addTo(map); // added .addTo(map) so markers actually appear
  });
}

// ===== FIND ROUTE FUNCTION =====
async function findRouteWithAlternatives() {
  const srcName = document.getElementById("source").value;
  const destName = document.getElementById("destination").value;
  if (srcName === destName) {
    alert("Source and destination must be different.");
    return;
  }
  const source = locations[srcName];
  const dest = locations[destName];

  clearRoutes();

  // ----- FRONT-SIDE ROUTES -----
  const frontRoutes = [
    { src: "Canteen", dest: "Hostel", waypoints: canteenToHostelFrontWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "Canteen", waypoints: bblockToCanteenFrontWaypoints, color: "blue" },
    { src: "A-Block", dest: "B-Block(Main gate)", waypoints: ablockToBblockFrontWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "Hostel", waypoints: bblockMainToHostelWaypoints, color: "blue" },
    { src: "B-Block(back gate)", dest: "Hostel", waypoints: bblockBackToHostelWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "Library", waypoints: bblockToLibraryFrontWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "Office", waypoints: bblockToOfficeFrontWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "Gate 2", waypoints: bblockToGate2FrontWaypoints, color: "blue" },
    { src: "Main Gate", dest: "B-Block(Main gate)", waypoints: mainGateTobbolockMainFrontWaypoints, color: "blue" },
    { src: "B-Block(Main gate)", dest: "B-Block(back gate)", waypoints: bblockTobbloockbackFrontWaypoints, color: "blue" }
  ];

  for (const route of frontRoutes) {
    if ((srcName === route.src && destName === route.dest) ||
        (srcName === route.dest && destName === route.src)) {
      const waypoints = (srcName === route.src) ? route.waypoints.slice() : route.waypoints.slice().reverse();
      const polyline = L.polyline(waypoints, { color: route.color, weight: 5 }).addTo(map);
      addWaypointsMarkers(waypoints, route.color);
      window.routeLayers.push(polyline);
      map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
      return;
    }
  }

  // ----- DEFAULT ORS ROUTE -----
  try {
    const response = await axios.post(
      'https://api.openrouteservice.org/v2/directions/foot-walking/geojson',
      {
        coordinates: [[source[1], source[0]], [dest[1], dest[0]]],
        instructions: false,
        alternative_routes: { target_count: 3, share_factor: 0.6, weight_factor: 1.6 }
      },
      {
        headers: { 'Authorization': apiKey, 'Content-Type': 'application/json' }
      }
    );

    const colors = ['blue', 'green', 'red'];
    response.data.features.forEach((feature, i) => {
      const coords = feature.geometry.coordinates.map(p => [p[1], p[0]]);
      const polyline = L.polyline(coords, { color: colors[i % colors.length], weight: 5 }).addTo(map);
      window.routeLayers.push(polyline);
    });

    if (window.routeLayers[0]) map.fitBounds(window.routeLayers[0].getBounds(), { padding: [40, 40] });

  } catch (error) {
    alert("Failed to fetch routes: " + (error.message || error));
    console.error(error);
  }
}
