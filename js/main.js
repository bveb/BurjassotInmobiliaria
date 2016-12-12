
var dimXwindow, dimYwindow; // Varibles globales con las dimensiones del navegador
redimensiona();
window.onresize = redimensiona;

function ini (x,y)
{
    
    $(document).ready(function() 
    {
        $('#contenedor').height(y);//ASIGNA DIMENSION Y DEL NAVEGADOR AL CONTENEDOR
        $('#contenedor').width(x);//ASIGNA DIMENSION X DEL NAVEGADOR AL CONTENEDOR
        
        if (x > 1200)
        {
            cambiaCSS("css/iniEscritorio.css");
        } //escritorio
        else if ((x <= 1200) && (x >= 767))
        {
            if (x > y)
                {
                    cambiaCSS("css/iniTabletH.css");// Tablet horizontal
                }    
                else cambiaCSS("css/iniTablet.css");// Tablet vertical   
        }
        else if (x < 767)
        {
            if (x > y)
                {
                    cambiaCSS("css/iniPhoneH.css");// Phone Horizontal
                }    
            else cambiaCSS("css/iniPhone.css");// Phone Vertical
        }
        idioma = "sp";
        domBase();
        //mapa();
    });
    
 

} // FIN DE INI


function cambiaCSS(valor)
{
  $('#linkCSS').attr("href", valor);  
}
