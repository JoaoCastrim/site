<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $cpf = htmlspecialchars($_POST['cpf']);
    $telefone = htmlspecialchars($_POST['telefone']);

    $linha = "Nome: $nome | Email: $email | CPF: $cpf | Telefone: $telefone\n";
    file_put_contents("dados.txt", $linha, FILE_APPEND);

    echo "Dados salvos com sucesso!";
}
?>
