function mapa()
{
    $(document).ready(function() 
    {
        var mapaCanvas = document.getElementById("contenidoImg");
    var mapaOpciones =
          {
              center: new google.maps.LatLng(51.508742,-0.120850),
              zoom: 5
          };
    var map = new google.maps.Map(mapaCanvas, mapaOpciones);
    });
}






