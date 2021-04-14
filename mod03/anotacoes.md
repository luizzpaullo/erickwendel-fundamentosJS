# OPERADORES

- Aritmético

- Atribuição

- Relacionais

- Lógicos

- Ternário

---

## Aritméticos

```jsx
// OPERADORES
   +  Soma
   - Substração 
   * Multiplicação
   / Divisão
   % Módulo da Divisão 
   ** Potencialização
```

---

## Atribuição

Sinal de igual (=) tem como característica atribuição , lê-se RECEBE.

### Auto Atribuição

```jsx
let n = 3 

n = n + 4   ->   n += 4
n = n - 5   ->   n -= 5
n = n * 4   ->   n /= 2
n = n / 2   ->   n /= 2
n = n ** 2  ->   n ** 2
n = n % 5   ->   n %= 5 
```

## Incremento

### Pós Incremento

```jsx
//Incrementa apos executar. 
x = x + 1      -> x++ 
x = x - 1      -> x--
```

### Pré Incremento

```jsx
//Incrementa antes de executar 
x = x + 1      -> ++x
x = x - 1      -> --x
```
---

## Operadores Relacionais

```jsx
            //OPERADORES COMPARAÇÃO
				  >  MAIOR
				  < MENOR
                  >= MAIOR IGUAL
                  <= MENOR IGUAL
                  ==IGUAL
                  !=DIFERENTE

            //OPERADORES DE IDENTIDADE
                 === Identico (ESTRITAMENTE IGUAL, OU SEJA,COMPARA VALOR E TIPO)
                 !== Nao identico (ESTRITAMENTE DIFERENTE,OU SEJA,COMPARA VALOR E TIPO)

```

---

## Operadores Lógicos

```jsx
&& (E - CONJUNÇÃO) => AND    //OP.BINÁRIO
      --> TRUE: TODAS CONDIÇÕES TEM QUE SER TRUE/TRUE

|| (OU - DISJUNÇÃO) => OR  //OP.BINÁRIO
      --> TRUE: QUANDO APENAS UMA CONDIÇÃO É TRUE.

! (NEGAÇÃO ) => NOT   //OP.UNÁRIO
      --> INVERTE O VALOR DA CONDIÇÃO 

```

---

> ORDEM DE PRECEDÊNCIA (HIERARQUIA DE EXECUÇÃO NOS CÁLCULOS)

```jsx
// Ordem de Execução é de **CIMA PARA BAIXO, DA ESQUERDA PARA DIREITA.**

1.  Parenteses (    ) ; 
2.  Potencialização **;
3.  Multiplicação * , Divisão  / , Módulo da Divisão  %;
4.  Soma + , Subtração  -;
5.  Negação !;
6.  Conjunção &&;
7.  Disjunção ||;
```

---

## Operadores Ternário

```jsx
teste? true : false
```