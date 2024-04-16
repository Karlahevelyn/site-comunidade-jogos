<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="cadastro.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CADASTRAR</title>
</head>
<body>
    <nav>
        <ul>
         <li><a href="comunidade.php">COMUNIDADE</a></li>
         <li><a href="novidades.html">+JOGOS</a></li>
         <li><a href="home.html">INICIO</a></li>
       </ul>
    </nav>
    
    <form method="post"">
    <h1>CADASTRE-SE</h1>
    <label>NOME</label>
    <input type="text" name="nome">
    <label>EMAIL</label>
    <input type="email" name="email" autocomplete="off">
    <label>SENHA</label>
    <input type="password" name="senha">
    <Label>CONFIRMAR SENHA</Label>
    <input type="password" name="confsenha">
    <input type="submit" value="cadastrar">
    </form>
</body>
</html>