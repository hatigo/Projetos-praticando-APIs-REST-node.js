# Exercício-01

## Desestruturando uma pessoa

A partir do objeto pessoa abaixo, deverão ser criadas três variáveis **nomeDaPessoa**, **idadeDaPessoa** e **infosAdicionais** através da desestruturação, de forma que estas variáveis recebam, respectivamente, os valores das propriedades do objeto pessoa: **nome**, **idade** e o restante do objeto (**cidade** e **apelidos**).

```javascript=
const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};
```

Após a criação das três variáveis utilizando desestruturação, cada uma delas deverá ser impressa no console, uma de cada vez.
Estas impressões no console deverão ficar assim:

```
Carlos
28
{
  cidade: 'Porto Alegre',
  apelidos: [ 'Carlão', 'Carlinhos', 'Carluxo' ]
}
```

---


###### tags: `nodeJS` `desestruturacao` `desestructuring`
