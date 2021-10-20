# Exercício-04

## Calculadora Online

Neste exercício devemos criar um servidor com 4 rotas GET para executar as 4 operações matemáticas básicas (somar, subtrair, multiplicar, dividir)
Você deverá criar um servidor como mostrado na aula contendo as seguintes rotas GET

Soma: /somar
Subtração: /subtrair
Multiplição: /multiplicar
Divizão: /dividir
Todas as rotas devem esperar dois parâmetros query **num1** e **num2** e retornar a resposta da operação.

### Exemplos de requisições e respostas:

requisição: /somar?num1=10&num2=5 resposta: 15

requisição: /subtrair?num1=10&num2=5 resposta: 5

requisição: /multiplicar?num1=10&num2=5 resposta: 50

requisição: /dividir?num1=10&num2=5 resposta: 2

---


###### tags: `nodeJS` `primeiro servidor` `express` `http` `queryparam`