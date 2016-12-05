<!doctype html>
<html lang="es">

<head>
        <meta charset="utf-8" />
        <title>Mapas</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0">
        <meta name="description" content="txt">
        <link type="text/css" rel="stylesheet" href="" id="linkCSS"/> 
        
</head>

<body>
 

<div id = "contenedor">
   <div id="cabecera">
          <img id="cab_esp" src="img/icon/bandEsp.png" alt="Cambiar a idioma español" class="icoBanderas"/>
          <img id="cab_ing" src="img/icon/bandIng.png" alt="Cambiar a idioma ingles" class="icoBanderas"/>
          <img id="cab_val" src="img/icon/bandVal.png" alt="Cambiar a idioma valenciano" class="icoBanderas"/>
          <img id="cab_logo" src="img/icon/logo.png" alt="Logotipo Inmobiliaria Burjassot"/>
          <img id="cab_usuario" src="img/icon/icoUsuarios.png" alt="Acceso usuarios"/>
          <img id="cab_menu" src="img/icon/icoMenu.png" alt="Acceso a menu"/>
          <div id="cab_menu_ext">
               <button id="cab_menu_ext_somos">Quienes somos</button><br>
               <button id="cab_menu_ext_contacto">Contacto</button><br>
               <button id="cab_menu_ext_condiciones">Condiciones del servicio</button><br>
               <button id="cab_menu_ext_cerrar">CERRAR</button>
          </div>
    </div>
    <div id="contenidoImg"></div>
    <div id="contenidoTxt">
        <div id="conttxt1">
           <form id="conttxt1_check">
               <input type="checkbox" name="comprar" value="comprar" id="conttxt1_check_comprar" checked/>
               <label for="comprar" >COMPRAR</label>
               <input type="checkbox" name="alquilar" value="alquilar" id="conttxt1_check_alquilar" />
               <label for="alquilar" >ALQUILAR</label>
           </form>
        </div>
        <div id="conttxt2">
            <form id="conttxt2_filtros">
               <select id="conttxt2_filtros_f1" name="tipoInmueble" >
                    
                    <option>sisisis </option> 
                    <option>Vivienda</option> 
                    <option>Comercial</option> 
                    <option>Garaje</option> 
                    <option>Casa de pueblo</option> 
                </select><br/>
                <select id="conttxt2_filtros_f2" name="municipio">
                    <option>Municipio..</option> 
                    <option>Burjassot</option> 
                    <option>Comercial</option> 
                    <option>Garaje</option> 
                    <option>Casa de pueblo</option> 
                </select>
                <button id="conttxt2_filtros_f3" type="button">MAS FILTROS</button>
                    <div id="conttxt2_filtros_f3_ext">
                        <form>
                            <label for="nh">Nº habitaciones</label>
                            <input type="number" id="conttxt2_filtros_f3_ext1" name="nh"><br>
                            
                            <label for="nb">Nº de Baños</label>
                            <input type="number" id="conttxt2_filtros_f3_ext2" name="nb"><br>
                            
                            <label for="terraza">Con terraza</label>
                            <input type="checkbox" id="conttxt2_filtros_f3_ext3" name="terraza" value="terraza"><br>
                             
                            <label for="balcon">Con balcón</label>
                            <input type="checkbox" id="conttxt2_filtros_f3_ext4" name="balcon" value="balcon"><br>
                             
                            <label for="exterior">Exterior</label>
                            <input type="checkbox" id="conttxt2_filtros_f3_ext4" name="exterior" value="exterior"><br>
                            
                            <button id="conttxt2_filtros_f3_ext_cerrar">CERRAR</button>
                        </form>
                    </div>
           </form>
        </div>
        <div id="conttxt3">
           <form id="conttxt3_modoSelec">
              <button id="conttxt3_modoSelec_mapa" type="button">MAPA</button>
              <button id="conttxt3_modoSelec_lista" type="button">LISTADO</button>
           </form>
        </div>
    </div>
    <div id="pie">
        <span>Telefonos: </span>
        <a href="tel://615815921" class="numTel"> 615 815 921</a>
        <a href="tel://963638429" class="numTel"> 96 363 84 29</a>
    </div>
    
</div> 
    

   
   
<!-- SCRIPT -->

<script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="js/mapa.js"></script>
<script type="text/javascript" src="js/detectDim.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyAJFci-JqNw-YOXjQgnGt4A4Q_-04dL3rg"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $.getJSON("php/conexionFrontEnd.php", function (data) {
            $('#conttxt2_filtros_f2').html('<option>'+data[0].nombre+'</option>')
            for(i = 1; i< data.length;i++){
                
                $('#conttxt2_filtros_f2').append('<option>'+data[i].nombre+'</option>')
            }      
        })
    })
</script>
</body>

</html>