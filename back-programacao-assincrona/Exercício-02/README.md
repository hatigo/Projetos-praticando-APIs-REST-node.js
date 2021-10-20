# Exercício-02

## Consulta CEP

Vamos criar uma API para consulta de endereços pelo CEP.

Para fonte dos dados, faremos uma integração com a api ViaCEP (https://viacep.com.br/ws/) utilizando axios com chamadas assíncronas.

A nossa API deverá possuir apenas um recurso **enderecos** com apenas um método GET que recebe como parâmetro tipo path (params) **cep** que será o número do CEP (sem traço, apenas números).
A requisição GET à nossa API deverá ser realizada através do endereço http://localhost:8000/enderecos/

Ao receber a requisição, nossa API deverá primeiro procurar o endereço em um array de endereços do arquivo **enderecos.json** que deverá existir em nosso servidor e caso não encontre, requisitar o endereço na API ViaCEP.

Para consultar o endereço na ViaCEP deveremos fazer requisições GET passando o número do CEP sem traços no seguinte formato de URL:

https://viacep.com.br/ws/01001000/json/

Quando encontrar o endereço na ViaCEP, deveremos incluir o objeto do endereço retornado pela ViaCEP no nosso array de endereços do arquivo **enderecos.json**. Ou seja, conforme formos fazendo mais chamadas, nosso arquivo vai acumulando mais endereços. Lembre-se de cuidar para que não tenhamos endereços duplicados em nossos arquivos. 

Para ler e escrever no arquivo deveremos utilizar o **fs** com chamadas assíncronas.

O objeto do endereço que trabalharemos terá o seguinte formato:
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

**EXTRA (para ser feito se sobrar tempo da aula):**

Crie um novo método GET para receber três parâmetros na rota (path) **uf**, **cidade** e **logradouro**, para que o texto do parâmetro **logradouro** possa ser procurado como parte do logradouro do endereço, seguindo a mesma lógica anterior (primeiro consulta o arquivo local e se não existir, busca na ViaCEP).

---

###### tags: `nodeJS` `express` `http` `api` `async` `await`
