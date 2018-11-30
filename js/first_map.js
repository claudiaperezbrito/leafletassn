
let mymap = L.map('map').setView([25.717, -80.300], 10.91
);

L.tileLayer('https://api.mapbox.com/styles/v1/cperezbrito/cjoztsn8w8rwu2sphha4leebh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3BlcmV6YnJpdG8iLCJhIjoiY2pveHJqd2p5MmJoaDNwbW9oZWhkdjd0dCJ9.uA-nkJSHeBJCpQPjYpKiIQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap);


//adding the MARKERS

//1-WeKe
let marker1 = L.marker([25.6986172, -80.44468110000003]).addTo(mymap);

marker1.bindPopup("<b>Rinconcito Latino:</b><br>West Kendall").openPopup();
//1-end of WeKe

//2-Kendall
let marker2 = L.marker([25.67423262, -80.4229894]).addTo(mymap);

marker2.bindPopup("<b>Rinconcito Latino:</b><br>Kendall")
//2-end of Kendall

//3-42st street
let marker3 = L.marker([25.729925, -80.403436]).addTo(mymap);

marker3.bindPopup("<b>Rinconcito Latino:</b><br>42nd Street")
//3-end of 42nd Street

//4-37th street
let marker4 = L.marker([25.6196859, -80.41462530000001]).addTo(mymap);

marker4.bindPopup("<b>Rinconcito Latino:</b><br>37th Street")
//4- end of 37th Street

//5- bird road
let marker5 = L.marker([25.7327368, -80.36511139999999]).addTo(mymap);

marker5.bindPopup("<b>Rinconcito Latino:</b><br>Bird Road")
//5- end of bird rd

//6-8th street
let marker6 = L.marker([25.7611012, -80.33349980000003]).addTo(mymap);

marker6.bindPopup("<b>Rinconcito Latino:</b><br>8th Street")
//6-end of 8th st

//7- killian greens
let marker7 = L.marker([25.6722412, -80.35677329999999]).addTo(mymap);

marker7.bindPopup("<b>Rinconcito Latino:</b><br>Killian Greens")
//7-end of killian greens

//8-coral way
let marker8 = L.marker([25.7486696, -80.30437900000004]).addTo(mymap);

marker8.bindPopup("<b>Rinconcito Latino:</b><br>Coral Way")
//8-end of coral way
