$(function(){   
    function myFunction()
    {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    
    let mercadoLibreURL = "https://api.mercadolibre.com/sites/MLA/search?q=";
    
    let dolarURL = "https://www.dolarsi.com/api/api.php?type=dolar";
    let cotizaciones;
    var map = L.map('map').setView([-24, -66], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    var centroIcon = L.icon({
        iconUrl: 'centroFijoIcono.png',
    
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([-24.78493000673901, -65.4170698010869],{icon: centroIcon}).addTo(map);
    marker.bindPopup("<b>Centro de atencion Salta Ciudad</b><br>Horario de atencion: 10 a 18 hs<br>Direccion: Av. Rosales 1539");

    var marker2 = L.marker([-26.06945681517448, -65.97917926145152]).addTo(map);
    marker2.bindPopup("<b>Centro de atencion Cafayate </b><br>Horario de atencion: 08 a 16 hs<br>Direccion: Av. La Plata 467");

    var marker3 = L.marker([-24.601264891425693, -65.38096935931293]).addTo(map);
    marker3.bindPopup("<b>Centro de atencion La Caldera </b><br>Horario de atencion: 10 a 18 hs<br>Direccion: Av. San Juan 839");

    var marker4 = L.marker([-24.22115675493937, -66.32185951918156]).addTo(map);
    marker4.bindPopup("<b>Centro de atencion San Antonio de Cobres </b><br>Horario de atencion: 09 a 20 hs<br>Direccion: Plaza Central");

    var marker5 = L.marker([-22.78975525150985, -65.21514420312684]).addTo(map);
    marker5.bindPopup("<b>Centro de atencion Iruya </b><br>Horario de atencion: 09 a 17 hs<br>Direccion: Av. San Martin 1436");

    var marker6 = L.marker([-25.119081616272336, -66.16906803262188]).addTo(map);
    marker6.bindPopup("<b>Centro de atencion Cachi </b><br>Horario de atencion: 08 a 18 hs<br>Direccion: Ruta 40");

    const precioDolar = ()=> {
        $.ajax({
            type:'GET',
            url: dolarURL,
            contentType:'application/json',
            async:false,
            dataType: 'text',
            success: function(data){
                console.log(JSON.parse(data));
                cotizaciones = JSON.parse(data);
            }, 
            error:  function(data){
                console.log("Fallo la api");
            }

        })
    };

    $(document).ready(function ($){
        precioDolar();
        console.log(cotizaciones);
        document.getElementById("dolarOficialVenta").innerHTML =cotizaciones[0].casa.venta;
        document.getElementById("dolarOficialCompra").innerHTML =cotizaciones[0].casa.compra;
        document.getElementById("dolarBlueVenta").innerHTML =cotizaciones[1].casa.venta;
        document.getElementById("dolarBlueCompra").innerHTML =cotizaciones[1].casa.compra;
    })



});
