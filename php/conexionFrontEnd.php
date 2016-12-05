<?php
    $tipo = $_GET['tipo'];
    $sql = "SELECT ";
    switch ($tipo) {
    case "inmueble":
        $tipo_inmu = $_GET['tipo_inmueble'];
        $sql .= "* FROM inmueble WHERE tipo_inmueble = (SELECT id_tipo FROM tipo_inmueble WHERE nombre = '$tipo_inmu')"; 
        if(isset( $_GET['categoria_inmueble'] ) && !empty( $_GET['categoria_inmueble'])){
            $tipo_cate = $_GET['tipo_categoria'];
            $sql .= "AND categoria_inmueble = (SELECT id_categoria FROM categoria_inmueble WHERE nombre = '$tipo_cate')";
        }
        if(isset( $_GET['superficie'] ) && !empty( $_GET['superficie'])){
            
        }
        if(isset( $_GET['precio'] ) && !empty( $_GET['precio'])){
            
        }
        if(isset( $_GET['año_construccion'] ) && !empty( $_GET['año_construccion'])){
            
        }
        break;
    case "municipio":
        $sql = "nombre FROM municipio"; 
        break;
    case "municipioPorCP":
        $cp = $_GET['cp'];
        $sql = "nombre FROM municipio WHERE codigo_postal = $cp"; 
        break;
    case "categoria":
        $tipo_inmu = $_GET['tipo_inmueble']; 
        $sql = "nombre FROM categoria_inmueble WHERE tipo_inmueble = (SELECT id_tipo FROM tipo_inmueble WHERE nombre = '$tipo_inmu')"; 
        break;
    case "tipoPiso":
        $sql = "nombre FROM tipo_inmueble"; 
        break;
    case "tipoCalle":
        $sql = "nombre FROM tipo_direccion"; 
        break;
    case "filtrosFinca":
        $sql = "COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'filtros_finca'"; 
        break;
    case "filtrosExterior":
        $sql = "COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'filtros_exteriores'"; 
        break;
    case "filtrosInterior":
        $sql = "COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'filtros_interiores'"; 
        break;
    case "filtrosAlquiler":
        $sql = "COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'filtros_alquiler'"; 
        break;
            
    
}
    //$nombre = $_GET['nombre'];
    
    //WHERE codigo_postal = $cp AND nombre = '$nombre'" ; //ejemplo frutería: SELECT id_fruta,nombre_fruta,cantidad FROM tabla_fruta;

function connectDB(){

        $server = "localhost";
        $user = "root";
        $pass = "";
        $bd = "burjainmo";

    $conexion = mysqli_connect($server, $user, $pass,$bd);

   

    return $conexion;
}

function disconnectDB($conexion){

    $close = mysqli_close($conexion);
 

    return $close;
}

function getArraySQL($sql){
    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {
        $rawdata[$i] = $row;
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

        $myArray = getArraySQL($sql);
        echo json_encode($myArray);
?>