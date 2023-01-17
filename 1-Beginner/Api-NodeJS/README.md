<h1 align="center">
  💻<br>Fundamentos NodeJs
</h1>

✅ NodeJs ✅ Express

## 🔥 Rodar Aplicação:

- Server (porta 3000): `node app.js`

## ⚙️ Configurações `.env.local` ou `config.js`:

- DB_URL: Url do MongoDb Atlas com usuário e senha
- SECRET: Senha secreta da aplicação
- TOKEN_EXPIRE: Tempo de expiração do token

## 😬 Instalações necessárias:

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)

## 😁 Utilidades:

- Init: `npm init`/`npm init -y`

## 👶 Dependências:

- `npm install express --save mongoose --save body-parser --save dotenv --save bcrypt --save`

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

- **Rotas:** Separar cada rota em arquivo específico gera melhor legibilidade do código e facilidade para estruturação no desenvolvimento, dessa forma o app só terá que importar a rota e essa importação ficará responsável pode definir os métodos, middlewares e etc.

  - ###### Code:

    ```
    const express = require("express");
    const app = express();

    const indexRoute = require("./routes/index");
    app.use("/", indexRoute);

    app.listen(3000);
    module.exports = app;
    ```

- **MondoDB:** A conexão com banco só precisa das credenciais de acesso e o servidor do banco de dados.

  - ###### Code:

    ```
    const url = process.env.DB_URL;
    mongoose.connect(url);

    mongoose.connection.on("error", (err) => {
      console.log(`There was an error connecting to the database: ${err}`);
    });
    mongoose.connection.on("disconnect", () => {
      console.log("Database connection dropped");
    });
    mongoose.connection.on("connected", () => {
      console.log("Successful database connection");
    });
    ```

- **Modelagem:** Modelagem de usuário simples.

  - ###### Code:

    ```
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
      email: { type: String, required: true, unique: true, lowercase: true },
      password: { type: String, required: true, select: false },
      created: { type: Date, default: Date.now },
    });

    UserSchema.pre("save", function (next) {
      if (!this.isModified("password")) {
        return next();
      }

      const salt = 10;
      bcrypt.hash(this.password, salt, (err, encrypted) => {
        this.password = encrypted;
        return next();
      });
    });

    module.exports = mongoose.model("User", UserSchema);
    ```

- **Status Code:** Código de resposta do server para auxiliar quem estiver consumindo API.

  - ###### Code:

    ```
    200 - OK
    201 - Created
    202 - Accepted

    400 - Bad Request
    401 - Unauthorization - AUTENTICAÇÃO, caráter temporário.
    403 - Forbiden - AUTORIZAÇÃO, caráter permanente.
    404 - Not found

    500 - Internal Server Error
    501 - Not  Implemented
    503 - Service Unavailable
    ```

- **Variable Environment:** Muito útil para informações que se alteram no contexto do ambiente da execução da aplicação.

  - ###### Code:

    ```
    set NODE_ENV=prod (Windows)
    export NODE_ENV=prod (Linux)
    ```

      </details>
