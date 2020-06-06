<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/estilos.css">
    <title>Datos Personales</title>

</head>
<body>
    <main>
       <header>
        <h1>¡BIENVENIDOS!</h1>
       </header>
       <section class="formulario">
         <h2>Ingrese datos personales:</h2><br><br>
         <form action="consigna1.php" method="post">
            <label for="nombre">
                Nombre: <input type="text" name="nombre" maxlength="15">
            </label><br><br>
            <label for="apellido">
                Apellido: <input type="text" name="apellido" maxlength="15">
            </label><br><br>
            <label for="direccion">
                Dirección: <input type="text" name="direccion" maxlength="20">
            </label><br><br>
            <label for="telefono">
                Telefono: <input type="tel" name="telefono" id="">
            </label><br><br>
            <label for="email">
                Email: <input type="email" class="email" name="email" id="">
            </label><br><br>
            <label for="genero">Genero: </label><br><br>
               <a class="opciones"> M <input type="radio"  name="genero" id=""></a>
               <a class="opciones"> F <input type="radio" class="opciones" name="genero" id=""></a>
               <a class="opciones"> O <input type="radio" class="opciones" name="genero" id=""></a>
            <br><br>
            <label for="educacion">Educación: </label>
            <select name="educacion" id="educacion">
                <option value="1">Primaria</option>
                <option value="2">Secundaria</option>
                <option value="3">Universitaria</option>
              </select><br><br>
            <label for="trabajo">Trabajo: </label><br><br>
             <a class="opciones">SI<input type="radio"class="opciones" name="trabajo" id=""></a>
             <a class="opciones">NO<input type="radio" class="opciones" name="trabajo" id=""></a><br><br>
            <label for=""><input type="submit" class="btn" value="Guardar"></label><br><br>
         </form>
        </section>
    </main>
</body>
</html>