//--------------- RELOJ -----------------

setInterval(()=>{

    let ahora=new Date();

    document.getElementById("hora").innerHTML=ahora.toLocaleTimeString();

},1000);


//------------ MAPA ---------------------

let lat=14.634915;

let lng=-90.506882;

const mapa=L.map("map").setView([lat,lng],15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{

    attribution:"OpenStreetMap"

}).addTo(mapa);

let marcador=L.marker([lat,lng]).addTo(mapa);

let ruta=L.polyline([[lat,lng]],{

    color:"#2563EB",

    weight:5

}).addTo(mapa);


//------------ ACTUALIZAR -------------

function actualizar(lat,lng){

    marcador.setLatLng([lat,lng]);

    ruta.addLatLng([lat,lng]);

    mapa.panTo([lat,lng]);

    document.getElementById("latitud").innerHTML=lat.toFixed(6);

    document.getElementById("longitud").innerHTML=lng.toFixed(6);

    document.getElementById("actualizacion").innerHTML="Hace unos segundos";

}


//------ SOLO PARA SIMULAR -------------

setInterval(()=>{

    lat+=0.00007;

    lng+=0.00004;

    actualizar(lat,lng);

},3000);