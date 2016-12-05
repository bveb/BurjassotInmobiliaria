<!doctype html>
<html lang="es">

<head>
    <title>LOGIN</title>
    <link rel="stylesheet" type="text/css" href="./login.css" media="screen" />
</head>

<body>
    <?php
        session_start();
        include_once "conexion.php";

        function verificar_login($login,$password,&$result) {
            $sql = "SELECT * FROM usuarios WHERE user = '$login' and password = '$password'";
            $rec = mysql_query($sql);
            $count = 0;

            while($row = mysql_fetch_object($rec))
            {
                $count++;
                $result = $row;
            }

            if($count == 1)
            {
                return 1;
            }

            else
            {
                return 0;
            }
        }

        if(!isset($_SESSION['userid']))
        {
            if(isset($_POST['submit']))
            {
                if(verificar_login($_POST['login'],$_POST['password'],$result) == 1)
                {
                    $_SESSION['userid'] = $result->idusuario;
                    header("location:index-backend.php");
                }
                else
                {
                    echo '<div class="error">Su usuario es incorrecto, intente nuevamente.</div>';
                }
            }
    ?>
    <form action="" method="post" class="form-3">
        <p class="clearfix">
            <label for="login">Usuario</label>
            <input type="text" name="login" id="login" placeholder="Username">
        </p>
        <p class="clearfix">
            <label for="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Password">
        </p>
        <p class="clearfix">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Recordar</label>
        </p>
        <p class="clearfix">
            <input type="submit" name="submit" value="Entrar">
        </p>
    </form>
    <?php
        } else {
	       echo 'Su usuario ingreso correctamente.';
	       echo '<a href="logout.php">Logout</a>';
        }
    ?>
</body>

</html>