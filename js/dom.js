


////////////////////////////
/// CONSTRUCCION DEL DOM ///
////////////////////////////

function domBase()
{
    
    //////////////////////
    // CODIGO HTML BASE //
    //////////////////////
    
    $.getJSON('json/domBase.json', base);
    
    function base (d) // INICIO FUNCION JSON HTML
    {
        switch (idioma)
        {
            case "sp":
                urlIdioma = "json/sp.json";
            break;
            case "en":
                urlIdioma = "json/en.json";
            break;
            case "va":
                urlIdioma = "json/va.json";
            break;
        }
        
        ///////////////////////////////////
        // CODIGO DEPENDIENTE DEL IDIOMA //
        ///////////////////////////////////
        
        $.getJSON(urlIdioma, conIdioma); 
        
        function conIdioma(t) // INICIO FUNCION JSON IDIOMA
        {
            // CONSTRUCCION DEL DOM
            $('body').html($(d[0].contenedor)); // CREA EL CONTENEDOR
            $('#contenedor').height(dimYwindow);//ASIGNA DIMENSION Y DEL NAVEGADOR AL CONTENEDOR
            $('#contenedor').width(dimXwindow);//ASIGNA DIMENSION X DEL NAVEGADOR AL CONTENEDOR
            $('#contenedor').append($(d[0].cabecera));//INSERTA CABECERA DENTRO DE CONTENEDOR
            $('#contenedor').append($(d[0].contenidoImg));//INSERTA CONTENIDO 'imagenes' DESPUES DE CABECERA
            $('#contenedor').append($(d[0].contenidoTxt));//INSERTA CONTENIDO 'texto' DESPUES DE 'imagenes'
            $('#contenedor').append($(d[0].pie));//INSERTA PIE DE PÁGINA DESPUES DE CONTENIDO
            $("#conttxt1").html($(d[0].conttxt1));//INSERTA EN CONTENIDO 'texto' CONTENEDORES DE FILTROS
            $("#conttxt2").html($(d[0].conttxt2));//INSERTA EN CONTENIDO 'texto' CONTENEDORES DE FILTROS
            $("#conttxt3").html($(d[0].conttxt3));//INSERTA EN CONTENIDO 'texto' CONTENEDORES DE FILTROS
            $("#cab_menu_ext").html($(d[0].menu));//INSERTA EN CONTENIDO 'texto' CONTENEDORES DE FILTROS

            // ASIGNANDO ICONOS
            var cab_espImg = d[1].cab_esp;
            var cab_ingImg = d[1].cab_ing;
            var cab_valImg = d[1].cab_val;
            var cab_logoImg = d[1].cab_logo;
            var cab_menuImg = d[1].cab_menu;
            var cab_usuarioImg = d[1].cab_usuario;
            
            // ASIGNANDO TEXTOS
            var cab_espTxt = t[0].cab_esp;
            var cab_ingTxt = t[0].cab_ing;
            var cab_valTxt = t[0].cab_val;
            var cab_logoTxt = t[0].cab_logo;
            var cab_menuTxt = t[0].cab_menu;
            var cab_usuarioTxt = t[0].cab_usuario;
            var comprarTxt = t[0].comprar;
            var alquilarTxt = t[0].alquilar;
            var filtrosTxt = t[0].filtros;
            var mapaTxt = t[0].mapa;
            var listadoTxt = t[0].listado;
            var menuSomosTxt = t[0].menuSomos;
            var menuContactoTxt = t[0].menuContacto;
            var menuCondicionesTxt = t[0].menuCondiciones;
            //var menuCerrarTxt = t[0].menuCerrar;
            //console.log(compraTxt);

            // INSERTANDO ICONOS
            $("#cab_esp").attr({"src":cab_espImg, "alt":cab_espTxt, "class":"icoBanderas"});
            $("#cab_ing").attr({"src":cab_ingImg, "alt":cab_ingTxt, "class":"icoBanderas"});
            $("#cab_val").attr({"src":cab_valImg, "alt":cab_valTxt, "class":"icoBanderas"});
            $("#cab_logo").attr({"src":cab_logoImg, "alt":cab_logoTxt});
            $("#cab_usuario").attr({"src":cab_usuarioImg, "alt":cab_usuarioTxt});
            $("#cab_menu").attr({"src":cab_menuImg, "alt":cab_menuTxt});
            $("#conttxt1_label_comprar").text(comprarTxt);
            $("#conttxt1_label_alquilar").text(alquilarTxt);
            $("#conttxt2_filtros_f3").text(filtrosTxt);
            $("#conttxt3_modoSelec_mapa").text(mapaTxt);
            $("#conttxt3_modoSelec_lista").text(listadoTxt);
            $("#cab_menu_ext_somos").text(menuSomosTxt);
            $("#cab_menu_ext_contacto").text(menuContactoTxt);
            $("#cab_menu_ext_condiciones").text(menuCondicionesTxt);
            //$("#cab_menu_ext_cerrar").text(menuCerrarTxt);
            
            
            
            eventos();
            leebd();   
            
        } // FINAL FUNCION JSON IDIOMA   
    }// FINAL FUNCION JSON HTML
    
    
} // FINAL DOMBASE




////////////////////////////
/// MANEJADOR DE EVENTOS ///
////////////////////////////

function eventos()
{
$('#cab_esp').click(cambiaIdioma);
$('#cab_ing').click(cambiaIdioma);
$('#cab_val').click(cambiaIdioma);
$('#cab_logo').click(domBase);
$('#cab_usuario').click(accesoUsuarios);
$('#cab_menu').click(menu);
$('#conttxt2_filtros_f3').click(menuFiltros);
$('#conttxt3_modoSelec_mapa').click(mapa);
$('#conttxt3_modoSelec_lista').click(listadoPisos);
}

// FINAL MANEJADOR DE EVENTOS //




////////////////////////////
///   CAMBIO DE IDIOMA   ///
////////////////////////////

function cambiaIdioma(e)
{
    var idClick = e.target.id;
    //var subId = idClick.substr(0,4);
    switch (idClick)
    {
        case 'cab_esp': 
            idioma = "sp";
            $('html').attr({"lang":"es"});
        break;
        case 'cab_ing': 
            idioma = "en";
            $('html').attr({"lang":"en"});
        break;
        case 'cab_val':
            idioma = "va";
            $('html').attr({"lang":"ca"});
        break;    
    }
    
    domBase();
}

// FINAL CAMBIO DE IDIOMA //




////////////////////////////
///   ACCESO USUARIOS    ///
////////////////////////////

function accesoUsuarios()
{
    alert ("acceso usuarios");
}

//  FINAL ACCESO USUARIOS  //




////////////////////////////
///         MENU         ///
////////////////////////////

function menu()
{
     $('#cab_menu_ext').animate(
                                {width:"0%"},0, 'swing',
                                function()
                                {
                                    $("#cab_menu_ext").css("visibility", "visible");
                                    $('#cab_menu_ext').animate({width:"60%"},'slow','swing',
                                    function()
                                    {
                                        $('#cab_menu').click(domBase);
                                        
                                    });
                                }
                );
    
    
}

//     FINAL MENU         //




////////////////////////////
///       FILTROS        ///
////////////////////////////

function menuFiltros()
{ 
    switch (idioma)
            {
                case "sp":
                    urlIdioma = "json/sp.json";
                break;
                case "en":
                    urlIdioma = "json/en.json";
                break;
                case "va":
                    urlIdioma = "json/va.json";
                break;
            }

            ///////////////////////////////////
            // CODIGO DEPENDIENTE DEL IDIOMA //
            ///////////////////////////////////

            $.getJSON(urlIdioma, conIdioma); 

            function conIdioma(t) // INICIO FUNCION JSON IDIOMA
            {

                $('#contenidoTxt').html("<div id=\"contTxt_filtros\"><h3>"+t[0].h3_filtros+"</h3></div>");
                $('#contenidoTxt').animate(
                                {height:"82%"},0, 'swing',
                                function()
                                {
                                    $('#contenidoImg').animate({height:"0%"},'slow','swing',f);
                                }
                );
                function f()
                {
                    leeFiltros("filtrosFinca");
                    leeFiltros("filtrosExterior");
                    leeFiltros("filtrosInterior");
                    leeFiltros("filtrosAlquiler");
                    $('#contTxt_filtros').append("<button id=\"contenidoTxt_cerrar\">"+t[0].menuCerrar+"</button>");
                    $("#contenidoTxt_cerrar").click(menuFiltrosCierre);    
                }
            }
   
    
}

function leeFiltros(filtro)
{
    
  $.getJSON("php/conexionFrontEnd.php",{tipo:filtro}, function (data) {
      var aux = filtro.substr(7);
      $('#contTxt_filtros').append("<h2>"+aux+" </h2>")
                        for(i = 1; i< data.length;i++)
                        {
                            var txt = data[i].COLUMN_NAME;
                            console.log(txt.length);
                            var txtRes = txt.substr(0,1);
                            for(j = 1; j<txt.length; j++)
                                {
                                    aux = txt.substr(j,1);
                                    if (aux == "_"){aux = " ";}
                                    txtRes = txtRes + aux;
                                    console.log("aux = " + aux + " txtRes = " + txtRes);
                                }
                            
                            var markID = txt.substr(0,2);
                            if (markID == "id"){break}
                                                       
                            $('#contTxt_filtros').append("<input type=\"checkbox\"id=filtro"+i+"/> "+txtRes+" <br>")
                        }
                        $('#contTxt_filtros').append("<br>")
                    })  
}

function menuFiltrosCierre()
{
    $('#contenidoTxt').html("");
    $('#contenidoTxt').animate(
                                {height:"22%"},0, 'swing',
                                function()
                                {
                                    $('#contenidoImg').animate({height:"60%"},'slow','swing',domBase());
                                }
                );
}
//     FINAL FILTROS      //




////////////////////////////
///        MAPA          ///
////////////////////////////

function mapa()
{
    console.log("dentro mapa");
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

//      FINAL MAPA       //




////////////////////////////
///    LISTADO PISOS     ///
////////////////////////////

function listadoPisos()
{
    var contenedorPisos = document.getElementById("contenidoImg");
    $(contenedorPisos).html("listado de pisos");
}

//    FINAL LISTADO PISOS     //