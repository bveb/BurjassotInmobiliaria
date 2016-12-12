



// CLASE DOM ***************************************

// Crea los elementos que aparecen en en toda la web independientemente del contenido:
        // logotipo
        // barra inferior de navegación con menu opciones, enlace a redes sociales y enlace a webil.
        // capa de contenidos que varían según la navegación por el sitio

function claseDom()
{
    
    // CONSTRUCTOR DEL DOM
    $.getJSON('json/domBase.json', f);
    function f (d)
    {
        // CONSTRUCCION DEL DOM
        $('body').html($(d[0].contenedor)); // CREA EL CONTENEDOR
        $('#contenedor').height(dimYwindow);//ASIGNA DIMENSION Y DEL NAVEGADOR AL CONTENEDOR
        $('#contenedor').width(dimXwindow);//ASIGNA DIMENSION X DEL NAVEGADOR AL CONTENEDOR
        $('#contenedor').append($(d[0].cabecera));//INSERTA CABECERA DENTRO DE CONTENEDOR
        $('#contenedor').append($(d[0].opciones));//INSERTA OPCIONES DESPUES DE CABECERA
        $('#contenedor').append($(d[0].contenido));//INSERTA CONTENIDO DESPUES DE OPCIONES
        $('#contenedor').append($(d[0].pie));//INSERTA PIE DE PÁGINA DESPUES DE CONTENIDO
        $('#pie').append($(d[0].volver)); // INSERTA botón volver

            // ASIGNANDO ICONOS
        var imgCab = document.getElementById('logo');
        var imgCabUrl = ($(d[1].imgCab))[0].url;
        var imgCabTxt = ($(d[1].imgCab))[0].txt;
        var icoVolver = document.getElementById('icoVolver');
        var icoVolverUrl = ($(d[1].icoVolver))[0].url;
        var icoVolverTxt = ($(d[1].icoVolver))[0].txt;
        var icoMenu = document.getElementById('icoMenu');
        var icoMenuUrl = ($(d[1].icoMenu))[0].url;
        var icoMenuTxt = ($(d[1].icoMenu))[0].txt;
        var icoApp = document.getElementById('icoApp');
        var icoAppUrl = ($(d[1].icoApp))[0].url;
        var icoAppTxt = ($(d[1].icoApp))[0].txt;
        var icoFace = document.getElementById('icoFace');
        var icoFaceUrl = ($(d[1].icoFace))[0].url;
        var icoFaceTxt = ($(d[1].icoFace))[0].txt;
        var icoTwitter = document.getElementById('icoTwitter');
        var icoTwitterUrl = ($(d[1].icoTwitter))[0].url;
        var icoTwitterTxt = ($(d[1].icoTwitter))[0].txt;
        var icoPinterest = document.getElementById('icoPinterest');
        var icoPinterestUrl = ($(d[1].icoPinterest))[0].url;
        var icoPinterestTxt = ($(d[1].icoPinterest))[0].txt;
        var icoGoogle = document.getElementById('icoGoogle');
        var icoGoogleUrl = ($(d[1].icoGoogle))[0].url;
        var icoGoogleTxt = ($(d[1].icoGoogle))[0].txt;

        // INSERTANDO ICONOS
        $(imgCab).attr({"src":imgCabUrl, "alt":imgCabTxt});
        $(icoMenu).attr({"src":icoMenuUrl, "alt":icoMenuTxt});
        $(icoApp).attr({"src":icoAppUrl, "alt":icoAppTxt});
        $(icoFace).attr({"src":icoFaceUrl, "alt":icoFaceTxt});
        $(icoTwitter).attr({"src":icoTwitterUrl, "alt":icoTwitterTxt});
        $(icoPinterest).attr({"src":icoPinterestUrl, "alt":icoPinterestTxt});
        $(icoGoogle).attr({"src":icoGoogleUrl, "alt":icoGoogleTxt});
        $(icoVolver).attr({"src":icoVolverUrl, "alt":icoVolverTxt});
    }
    
    // TEXTOS DEL MENU OPCIONES
    $.getJSON('json/txtBase.json', t)
     function t (d)
    {
        $('#nosotros > p').text(d[0].nosotros);
        $('#contacto > p').text(d[0].contacto);
        $('#condServ > p').text(d[0].condiciones);
        $('#legal > p').text(d[0].aviso);
        $('#politica > p').text(d[0].politica);
        $('#misWebs > p').text(d[0].webs);
        $('#certificados > p').text(d[0].certificados);
    }
}

    



// CONSTRUYE EL DOM BASE Y ASIGNA EVENTOS BASE 
function domBase()
{
    var dom = new claseDom(); // CREANDO EL DOM BASE
        
    $(document).ready(function() 
    {
        var icoLista = document.getElementById("icoLista");
        console.log(icoLista);
        cssBase(); // ASIGNANDO CSS
    });
    //
    //$('#opLista').hide(300);// OCULTANDO MENU DE OPCIONES
    
    // COGIENDO ELEMENTOS GLOBALES
    /*
    btnLogo = document.getElementById("logo");
    btnVolver = document.getElementById("icoVolver");
    btnOpciones = document.getElementById("icoMenu");
    btnNosotros = document.getElementById("nosotros");
    btnCondServ = document.getElementById("condServ");
    btnLegal = document.getElementById("legal");
    btnPolitica = document.getElementById("politica");
    btnContacto = document.getElementById("contacto");
    btnMisWebs = document.getElementById("misWebs");
    btnCertificados = document.getElementById("certificados");
    */
    
   
    // ASIGNANDO EVENTOS A ELEMENTOS GLOBALES
    /*
    btnLogo.addEventListener("click", animaBoton);
    btnVolver.addEventListener("click", function ()
                               {
                                console.log('dentro de volver' + volver);
                                atras();
                                });
    btnOpciones.addEventListener("click", evenOpcionesON);
    btnNosotros.addEventListener("click", evenOp);
    btnCondServ.addEventListener("click", evenOp);
    btnLegal.addEventListener("click", evenOp);
    btnPolitica.addEventListener("click", evenOp);
    btnContacto.addEventListener("click", evenOp);
    btnMisWebs.addEventListener("click", evenOp);
    btnCertificados.addEventListener("click", evenOp);
    */
    //domHome(); // RELLENANDO LA HOME
    
}

// ASIGNA CLASES AL DOM BASE
function cssBase()
{
    $('#header01').addClass('boton');
    $('#opciones01').addClass('boton');
    $('#pie01').addClass('boton');
    $('#icoLista > ul > li').addClass('icoSocial');
}

// VUELVE AL MENU ANTERIOR
function atras ()
{
    switch (volver)
    {
        case 'home':
            evenHome();
        break;
        case 'golosinas':
            golosinas();
        break;
        case 'prensa':
            prensa();
        break;
        case 'producGol':
            producGolosinas();
        break;
        default:
            false;
        break;
    }
}

// ACTIVA EL MENU OPCIONES
function evenOpcionesON(e)
{
    $('#opLista').show(500); // MUESTRA LA LISTA DE OPCIONES
    $('#opciones').animate({opacity:0.9},500); //ASIGNA OPACIDAD PARA VISUALIZAR EL MENU OPCIONES
    $('#opciones01').animate({opacity:0.8},500); //ASIGNA OPACIDAD PARA VISUALIZAR EL MENU OPCIONES
    btnOpciones.removeEventListener("click", evenOpcionesON); // CAMBIA DE FUNCIONALIDAD EL EVENTO
    btnOpciones.addEventListener("click", evenOpcionesOFF); // CAMBIA DE FUNCIONALIDAD EL EVENTO
}

// DESACTIVA EL MENU OPCIONES
function evenOpcionesOFF(e)
{
    $('#opciones01').animate({opacity:0},1000); //ASIGNA OPACIDAD PARA OCULTAR EL MENU OPCIONES
    $('#opciones').animate({opacity:0},500); //ASIGNA OPACIDAD PARA OCULTAR EL MENU OPCIONES
    $('#opLista').hide(500); // OCULTA LA LISTA DE OPCIONES
    btnOpciones.removeEventListener("click", evenOpcionesOFF); // CAMBIA DE FUNCIONALIDAD EL EVENTO
    btnOpciones.addEventListener("click", evenOpcionesON); // CAMBIA DE FUNCIONALIDAD EL EVENTO
    
}

// SELECCIONA LA OPCIÓN DEL MENÚ OPCIONES
function evenOp(e)
{
    var i = e.target.parentElement.id; // ID DEL ELEMENTO CLICKEADO
    $.getJSON('json/menuOp.json', ev); // DATOS Y FUNCIÓN QUE CONTROLA LA LISTA DE OPCIONES
    
    function ev(data)
    {
        bdActual = data;
        switch (i)
        {
            case 'nosotros': 
                var d0 = data[0].nosotros, d1 = data[1].nosotros, t = 'KioscoOnline_QuienesSomos'; //ASIGNA VALORES
                contenido(d0, d1, t);  // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'condServ':
                var d0 = data[0].condServ, d1 = data[1].condServ, t = 'KioscoOnline_Condiciones'; //ASIGNA VALORES
                contenido(d0, d1, t); // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'legal': 
                var d0 = data[0].legal, d1 = data[1].legal, t = 'KioscoOnline_AvisoLegal'; //ASIGNA VALORES
                contenido(d0, d1, t); // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'politica': 
                var d0 = data[0].politica, d1 = data[1].politica, t = 'KioscoOnline_PoliticaDePrivacidad'; //ASIGNA VALORES
                contenido(d0, d1, t); // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'contacto': 
                var d0 = data[0].contacto, d1 = data[1].contacto, t = 'KioscoOnline_Contacto'; //ASIGNA VALORES
                contenido(d0, d1, t); // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'misWebs': 
                var d0 = data[0].misWebs, d1 = data[1].misWebs, t = 'KioscoOnline_WebsAmigas'; //ASIGNA VALORES
                contenido(d0, d1, t); // INSERTA VALORES EN EL NAVEGADOR
            break;
            case 'certificados': 
                var d0 = data[0].certificados, d1 = data[1].certificados, t = 'KioscoOnline_CertificadosWeb'; //ASIGNA VALORES
                contenido(d0, d1, t);  // INSERTA VALORES EN EL NAVEGADOR  
            break;
            default:
                false;
            break;
        }
        
        // CONTENIDO SEGÚN OPCIÓN
        function contenido(d0, d1, t)
        {
            evenOpcionesOFF();
            $('#contenido').html('<h1>'+d0+'</h1>'); // INSERTA H1 DE LA PÁGINA SEGÚN OPCION
            $('#contenido').append('<div class="txtContenido"><p>'+d1+'</p></div>'); // INSERTA TEXTO DE LA PÁGINA SEGÚN OPCION
            $(document).ready(function() {document.title = t;}); // INSERTA TITULO DE LA PÁGINA SEGÚN OPCION 
          
        }
    }

}

// INICIALIZA EL SITIO 
function evenHome(e)
{
    evenOpcionesOFF();
    domBase(); 
}



