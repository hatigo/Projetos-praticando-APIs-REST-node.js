# Exercício-01

## Coletando dados de empresas

Foi solicitado que fosse criada uma API para descobrir e guardar dados de empresas como ano de fundação, ramo, número de funcionários, cidade, país e etc.

Sem saber como resolver a necessidade, procuramos Dina que sempre tem uma ideia criativa de como resolver problemas! =D

Dina nos contou que conhece uma API pronta que consegue devolver essas informações a partir dos domínios dos sites das empresas, que é a **Company Enrichment API** do site **Abstract API** (https://www.abstractapi.com/api/company-enrichment), que possui apenas 1 detalhe: esta API exige **autenticação**. Mas isso não é problema pois nossa equipe sabe como autenticar em api de terceiros!!! =DDD

Após confirmar com o solicitante, resolvemos utilizar a sugestão de Dina. Para isso criaremos uma API que autentica e consulta os dados na API externa a partir do domínio requisitado à nossa API. Ao conseguir um resultado da API externa, guarda em um array em arquivo **JSON** chamado **empresas.json**.

Para garantir a performance utilizaremos programação assíncrona tanto para consultar a API externa com axios quanto para ler / escrever o arquivo JSON.

Vamos ao funcionamento da nossa API:

**GET /empresas**

Nossa API deverá possuir apenas 1 recurso **empresas** que deverá ser acessado através do endereço http://localhost:8000/empresas.
Este recurso receberá apenas requisições GET e deverá possuir um parâmetro obrigatório na rota (path) chamado **dominioEmpresa**.

Ao receber o domínio da empresa pelo parâmetro deveremos enviá-lo à API externa para consultar os dados da empresa.
O endereço da API externa que devemos utilizar para isso é:
```
https://companyenrichment.abstractapi.com/v1/
```
No qual acrescentaremos dois parâmetros query:
* **api_key**: utilizada para a autenticação e deverá possuir como valor a seguinte chave de teste: **34a8499969c4401daf6a685935323c1d**
* **domain**: onde deveremos enviar o domínio da empresa que recebemos no parâmetro da nossa API.

O objeto que será retornado da API externa será o objeto que retornaremos na nossa API! =D

Mas antes de retorná-lo, deveremos guardar o que encontramos no array do arquivo **empresas.json**. Mas para isso, foi solicitada uma regra:
* Guardar apenas os resultados cujo nome da empresa (propriedade **name** do objeto retornado) venha preenchido corretamente (não venha com null ou undefined).
Portanto, guardaremos no array apenas os objetos das empresas que sejam retornadas com o nome preenchido.

E independente de como o dado seja retornado da API externa, sempre retornaremos o exato mesmo objeto no response da nossa API.

Teste para algumas empresas que você conheça o domínio e não esqueça de verificar se o arquivo JSON está sendo preenchido corretamente! =)

---


###### tags: `nodeJS` `express` `http` `api` `integracao com api` `api de terceiros` `autenticacao`
