<?php
    //$cp = $_GET['cp'];
    //$nombre = $_GET['nombre'];
    $sql = "SELECT  COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'filtros_finca'"; 
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