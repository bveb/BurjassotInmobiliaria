<?php
//datos para la creacion de mysql
define('DB_SERVER','localhost');
define('DB_NAME','burjainmo');
define('DB_USER','Mari');
define('DB_PASS','1234');

$con = mysql_connect(DB_SERVER,DB_USER,DB_PASS);
mysql_select_db(DB_NAME,$con);    
?>
