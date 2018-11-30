
let mymap = L.map('map').setView([27.859, -81.792], 6.17);

L.tileLayer('https://api.mapbox.com/styles/v1/cperezbrito/cjp4dm83m3vre2rmjk5ygrubu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3BlcmV6YnJpdG8iLCJhIjoiY2pveHJqd2p5MmJoaDNwbW9oZWhkdjd0dCJ9.uA-nkJSHeBJCpQPjYpKiIQ', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap);

 for ( let i = 0; i < places.length; i++ ) { L.marker ([places[i].latitude, places[i].longitude]) .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>' )
    .addTo(mymap);
 }
