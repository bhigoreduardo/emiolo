<h1 align="center">
  💻<br>Fundamentos NodeJs
</h1>

✅ NodeJs ✅ Express

## 🔥 Rodar Aplicação:

- Server (porta 3000): `node app.js`

## 😬 Instalações necessárias:

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)

## 😁 Utilidades:

- Init: `npm init`/`npm init -y`

## 👶 Dependências:

- `npm install express --save`

## 📋 Documentação:

<details>
<summary><b>📒 Fundamentos</b></summary>

- **Métodos:** O acesso a cada path parameter pode ser criada usando o método adequado, podendo ter acesso as query e corpo da requisição, como exemplo: `http://localhost:3000?name=Higor&lastName=Batista`

  - ###### Code:

    ```
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
    const { name, lastName } = req.query;

    return res.send({ message: `Nome: ${name} - Sobrenome: ${lastName}` });
    });

    app.listen(3000);
    module.exports = app;
    ```

</details>