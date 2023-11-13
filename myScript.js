$(function(){   
    function myFunction()
    {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    
    let mercadoLibreURL = "https://api.mercadolibre.com/sites/MLA/search?q=";
    
    let dolarURL = "https://www.dolarsi.com/api/api.php?type=dolar";
    let cotizaciones;
    var map = L.map('map').setView([-25, -66], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([-25, -66]).addTo(map);
    marker.bindPopup("<b>Centro de atencion 456</b><br>Horario de atencion: 10 a 18 hs<br>Direccion: Av. Rosales 1539");

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
