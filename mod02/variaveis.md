# VARIÁVEL: Nomes simbólicos para valores armazenados na memoria

> é uma forma de guardar um determinado dados na memoria do computador. Existe 3 formas de declarar variáveis;

## Tipos de String e suas característica

```jsx
 VAR : Declara uma Variável com Escopo Global. NAO deve  ser usado.

 LET : Declara uma variável local de escopo do bloco. Pode RE-ASSINAR (RE-DECLARAR)

 CONST : Declara uma variável NAO ALTERA durante o fluxo de execução
 EX: Objetos e Módulos
```

### Como Declarar uma String

- Aspas Simples;
- Aspas Duplas;
- Template string;

```jsx
let name = "Luiz";
let sobrenome = "Santos";
let nomeCompleto = `${name} ${sobrenome}`;
console.log(nomeCompleto);
```

### Formatando

```jsx
let texto01 = "JAVASCRIPT"; // USE SEMPRE LET EM RELAÇÃO A VAR;
console.log = "estou aprendendo texto01"; //NAO FAZ INTERPOLAÇÃO
console.log = "estou aprendendo" + texto01; // CONCATENAÇÃO
console.log = `estou aprendendo ${texto01}`; //TEMPLATE STRING faz interpolação
```

### Identificadores - Padrão de nomenclaturas de Variáveis

- Começa com Letras, Underline(\_) ou Cifrão ($);
- Não pode começar com Números(0-9);
- Pode conter Números (0-9);
- Aceita Case-sensitive.
- Não podem conter palavras reservadas da linguagem;
- Não podem conter espaços;

> Existe uma pratica generalizada em nomear constantes : Usar sempre MAIÚSCULA + SUBLINHADO; ex: COLOR_BLUE_H
