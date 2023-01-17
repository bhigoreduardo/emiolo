<h1 align="center">
  💻<br>Fundamentos TypeScript
</h1>

✅ TypesCript

## 🔥 Rodar Aplicação:

- Liver Server (porta 5050)

## 📚 Conhecimento prévio:

- JavaScript: Variable, Arrays, Functions, Objects

## 😬 Instalações necessárias:

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)
- Compiler TypeScript (`tsc -v`): `npm i -g typescript`
- VS Code: ESLint, Material Icon, Path Intellisense, Prettier, Live Server

## 🙆‍♂️ Fundamentos:

- Tipagem JS: Number, String, Boolean, Undefined, Object, Null
- Tipagem TS: JS, Any, Unknown, Tuple, Never, Enum. Alias, Union, Literal
- Type Checking: Regras para evitar erros
- Linguagens Estáticas: Variáveis com tipos não mutáveis: C++, C e Java
- Linguagens Dinâmicas: Variáveis com tipos mutáveis: JS, Python e Ruby
- Compiler: Geração JS apartir do TS
- OOP: Objeto orientado ao programa com Properties e Methods
- Classes: Modelo do objeto
- Interface: Contrato obrigatório dos objetos
- tsconfig:
  . include/exclude: Seleção de TS para compiler
  . target: Version do JS a ser gerado
  . sourceMap: Debug no browser do arquivo TS

## 😁 Utilidades:

- Version: `tsc -v`
- Compiler: `tsc index.ts`
- Config: `tsc --init`
- Watch: `tsc --watch ou tsc -w`

## 📋 Documentação:

<details>
<summary><b>📒 Fundamentos</b></summary>

- **Compiler:** Com a utilização do comando `tsc index.ts` ou `tsc --watch` irá gerar o arquivo index.js apartir index.ts para todos arquivos incluso na `tsconfig`

  - ###### Code:
    `console.log('Hello world');`

- **Auto type check:** Tipagem da variável inteligente de acordo com o valor inserido.

  - ###### Code:
    ```
    let numero = 10;
    let palavra = 'hello';
    ```

- **Type assingment:** Tipagem manual da variável.

  - ###### Code:
    ```
    function add(firstValue: number, secondValue: number): number {
        return firstValue + secondValue;
    }
    console.log('result: ' + add(1, 2));
    ```

- **Void methods:** Método com retornos undefined.

  - ###### Code:

    ```
    function hello(name: string): void {
        console.log(`Hi nice to meet ya ${name}`);
    }
    hello('Higor');
    ```

</details>

<details>
<summary><b>⚠️ Tipagem TypeScript</b></summary>

- **Any type:** Tipo de dado qualquer, não recomendado, pois tira a ideia da linguagem.

  - ###### Code:

    ```
    let price = 40;
    let item = 'apple';
    let isStore = true;

    let value;
    value = 10;
    value = 'sale';
    ```

- **Array type:** Conjunto de dados agrupados.

  - ###### Code:

    ```
    let values = [10, 20, 40, 'a']; // possible broken function
    let numberValues: number[] = [10, 20, 40, 50];
    ```

- **Tuple type:** Permite criar um tipo personalizado.

  - ###### Code:

    ```
    let tupleItems: [string, number, boolean] = ['apple', 3, true];
    console.log(tupleItems[1].toString()); // code completion
    ```

- **Enum type:** Agrupar hierarquia, nível de acesso e permissão ou ainda tipo de usuário e regra de forma mais simples e de fácil acesso.

  - ###### Code:

    ```
    enum Role {
        admin = 1,
        read = 2,
        backup = 3
    }
    console.log(Role);
    ```

- **Object type:** Abstração de dados por meio de um tipo específico.

  - ###### Code:

    ```
    enum Role {
        admin = 1,
        read = 2,
        backup = 3
    }
    const user: object = {
        firstName: "Higor",
        age: 25,
        role: Role.admin
    }
    const userProperty: {
        firstName: string;
        age: number
    } = {
        firstName: "Higor",
        age: 25
    }
    console.log(user);
    console.log(userProperty);
    ```

- **Unknown type:** Um tipo que pode receber qualquer um outro.

  - ###### Code:

    ```
    let itemInput: unknown;
    let itemName: string;
    itemInput = 'Apple'

    if (typeof itemInput === 'string') { itemName = itemInput; }
    console.log(itemName!);
    ```

- **Never type:** Permite que um trecho ou bloco não retorne diferente de um void (undefined).

  - ###### Code:

    ```
    function generateError(message: string, code: number): never {
        throw { message: message, errorCode: code }
    }
    console.log(generateError('This application crashed', 500));
    ```

- **Alias type:** Assim como um objeto, permite gerar um tipo abstraido de alguma modelagem.

  - ###### Code:

    ```
    type Product = {
        name: string,
        price: number,
        isStock: boolean,
        stock: number
    }
    const product: Product = {
        name: 'apple',
        price: 3,
        isStock: true,
        stock: 10
    }
    console.log(product);
    ```

- **Union type:** Permite a variável assumir um comportamento polimórfico, mudando seu tipo de acordo com a aplicação.

  - ###### Code:

    ```
    function userInput(firstValue: number | string, secondValue: number | string) {
        if (typeof firstValue === 'number' && typeof secondValue === 'number') {
            return firstValue + secondValue;
        }

        return firstValue.toString() + secondValue.toString();
    }
    console.log(userInput(10, 20));
    console.log(userInput('Apple', 'Avocado'));
    ```

- **Literal type:** A variável só pode assumir valores específicos do tipo.

  - ###### Code:

    ```
    let productPrice: 10 | 20 | 30;
    let productSize: 'S' | 'M' | 'L';

    productPrice = 20;
    productSize = 'S';
    console.log(`${productSize} : ${productPrice}`);
    ```

- **Intersection type:** A variável pode herdar tipos de outras criando assim um super tipo personalizável.

  - ###### Code:

    ```
    enum RoleAccess {
        Administrator = 1,
        Editor = 2,
        Saler = 3,
    }
    type Person = {
        fisrtName: string,
        lastName: string,
    }
    type JobRole = {
        id: number,
        role: RoleAccess
    }
    type employee = Person & JobRole;

    const firstEmployee: employee = {
        fisrtName: 'Higor',
        lastName: 'Batista',
        id: 980,
        role: RoleAccess.Administrator
    }
    console.log(firstEmployee);
    ```

</details>

<details>
<summary><b>🕶️ OOP TypeScript</b></summary>

- **Classes:** Modelo de dado permitindo gerar novos objetos para cada instância, com properties e methods.

  - ###### Code:

    ```
    class User {
      name: string;
      private balance: number;

      constructor(name: string, balance: number = 0) {
          this.name = name;
          this.balance = balance;
      }

      addMoney(amount: number) {
          this.balance += amount;
      }

      getBalance(): number {
          return this.balance;
      }
    }

    const higor = new User('Higor', 200);
    higor.addMoney(100);

    console.log(higor);
    console.log(higor.getBalance());
    ```

- **Interface:** Especificação de um tipo, sendo um contrato obrigando que cada variável tenha suas especificações e tipagens, salvo se for opcional.

  - ###### Code:

  ```
  interface Item {
    name: string,
    price?: number;

    itemPurchased(message: string): void
  }

  let apple: Item;
  apple = {
    name: 'apple',
    price: 2,
    itemPurchased(message: string): void {
        console.log(`${message} ${this.name}`);
    }
  }
  apple.itemPurchased('You just bought a');
  ```

- **Readonly:** Modificador de acesso de properties/methods de um objeto, permitindo ler, mas, não escrever.

  - ###### Code:

  ```
  class Movie {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
  }
  const movie = new Movie(1, 'Titanic');
  console.log(movie);
  console.log(movie.id);
  ```

- **Private:** Modificador que não permite acesso externo a classe de properties/methods, sendo necessário method acessor.

  - ###### Code:

  ```
  class Service {
    constructor(
        public readonly id: number,
        public name: string,
        private _price: number
    ) { }

    getPrice(): number { return this._price; }
  }
  const service = new Service(1, 'Developer', 20);
  console.log(service);
  ```

- **Protected:** Modificador que permite acesso somente para a classe e as subclasses.

  - ###### Code:

  ```
  class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
  }
  class Desk extends Furniture {
      kind(): void {
          console.log(`This is a desk made by ${this.manufacturer}`);
      }
  }
  class Chair extends Furniture {
      kind(): void {
          console.log(`This is a chair made by ${this.manufacturer}`);
      }
  }

  const desk = new Desk();
  const chair = new Chair();

  desk.kind();
  chair.kind();
  ```

- **Inheritance:** Herança de subclasse de uma superclasse.

  - ###### Code:

  ```
  class People {
      constructor(public firstName: string, public lastName: string, public age: number) { }

      get greet(): string {
          return `${this.firstName} ${this.lastName}`;
      }
  }
  class Client extends People {
      constructor(public firstName: string, lastName: string, public age: number, public balance: number) {
          super(firstName, lastName, age);
      }

      addBalance(amount: number): void { this.balance += amount; }

      override get greet(): string {
          return `Dear ${super.greet}`;
      }
  }
  const client = new Client('person', 'fake', 10, 100);
  client.addBalance(20);
  console.log(client.greet);
  console.log(client);
  ```

- **Override:** Sobrescrita de method herdado da superclass, podendo também acessá-lo.

  - ###### Code:

  ```
  class People {
      constructor(public firstName: string, public lastName: string, public age: number) { }

      get greet(): string {
          return `${this.firstName} ${this.lastName}`;
      }
  }
  class Client extends People {
      constructor(public firstName: string, lastName: string, public age: number, public balance: number) {
          super(firstName, lastName, age);
      }

      addBalance(amount: number): void { this.balance += amount; }

      override get greet(): string {
          return `Dear ${super.greet}`;
      }
  }
  class Staff extends People {
    override get greet(): string {
        return `Hi ${super.greet}`;
    }
  }
  const staff = new Staff('employee', 'fake', 20);
  console.log(staff.greet);
  console.log(staff);
  ```

- **Index signatures:** Permite gerar um objeto com diversos variáveis de acordo com um contexto de necessidade.

  - ###### Code:

  ```
  class HotelRoom {
    [roomNumber: string]: string;
  }
  const rooms = new HotelRoom();
  rooms.A118 = 'Saitama';
  rooms.A312 = 'Genos';
  rooms.A891 = 'Silverfang';
  console.log(rooms);
  ```

- **Methods short hand:** Abreviação rápida de especificar contrato de uma classe por meio de uma interface.

  - ###### Code:

  ```
  interface Employee {
    name: string;
    lastName: string;
    salaryBase: number;
    salary?: number;

    salaryCalculator: (rate: number) => number;
  }
  class Staff implements Employee {
    constructor(public name: string, public lastName: string, public salaryBase: number) { }

    salaryCalculator = (rate: number): number => this.salaryBase * (1 - rate / 100)
  }
  const fistStaff = new Staff('Saitama', 'Class S', 12380.90);
  console.log(fistStaff.salaryCalculator(12));
  ```

</details>

## 🦄 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bhigoreduardo">
        <img src="https://avatars.githubusercontent.com/u/96431991?v=4" width="100px;" alt="Foto do Higor Eduardo no GitHub"/><br>
        <sub>
          <b>Higor Eduardo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
