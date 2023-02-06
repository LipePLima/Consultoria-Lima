# Consultoria Lima

 - [Etapas](#etapas);
 - [Descrição](#descrição);
 - [Tecnologias](#tecnologias);
 - [Imagens](#imagens);
 - [Contato](#contato);
 - [Desenvolvedores](#desenvolvedores);

## Descrição

Consultoria Lima tem como propósito localizar o endereço de CEP de sua preferência. Também localizar e informar o status de sua encomenda! 
O projeto foi criado com o propósito de aprender a integrar API e exibir os dados de maneira dinâmica, também pude aprender a utilizar rotas para exibir o conteúdo de CEP quando clicado o botão CEP, e exibir o conteúdo de rastreamento quando clicado o botão Rastreamento. Tudo isso em uma única página!

**Observação**: A api de rastreamento possui algumas limitações fazendo com que os eventos não apareçam por erro de muitas requisições. Por hora, continue tentando até que as informações apareçam! Estou trabalhando para que esse problema seja resolvido.

**Nota de atualização**: No componente Rastreamento, foram feitas algumas alterações: Foi criado uma função para validação de código de rastreamento, retirando esta responsabilidade da função getEncomenda; Para uma melhor orientação ao usuário quando a API retornar erro. Criei uma nova consulta, desta vez utilizando o método Catch() para retornar em JSON o erro com o tempo para uma nova tentativa. Foi feito o tratamento necessário para informar o usuário em quanto tempo será a nova tentativa utilizando a função setInterval.

## Etapas 

**Desktop Firt**

 - [x] Cabeçalho feito;

 - [x] Corpo do site com a opção CEP;

 - [x] Corpo do site com a opção Rastreamento;

 - [x] Rodapé com opções(CEP e Rastramento) e Copyright;

**Mobile**

 - [x] Cabeçalho responsivo;

 - [x] Corpo do site com a opção CEP responsivo;

 - [x] Corpo do site com a opção Rastreamento responsivo;

 - [x] Rodapé responsivo;

 - [x] Tornar a tabela de CEP responsiva;

 *Funcionalidades*

 - [x] Inserir CEP no input e ao clicar no botão "Buscar" mostrar informações do cep no console;

 - [x] Criar tabela com informações do CEP;

 - [x] Organizar Informações do CEP na tabela;

 - [x] Validar dados do input de CEP;

 - [x] Localizar encomenda;

 - [x] Exibir rastreamento de encomenda;

## Tecnologias

 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) 

Hospedagem:

 ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Imagens

<h3> :camera: Página Desktop</h3>

![Desktop CEP](https://user-images.githubusercontent.com/102830741/215628938-9e527f86-37ff-442f-8487-8cd4c31f4b44.png)
![Desktop Rastreamento](https://user-images.githubusercontent.com/102830741/215629045-a356ac4f-7c8b-487b-9d3d-15b132b539a8.png)

<h3> :camera: Página Mobile</h3>

![Mobile CEP](https://user-images.githubusercontent.com/102830741/215629320-73afdb80-0ca2-44df-896a-035bc98e08a9.png)
![Mobile Rastreamento](https://user-images.githubusercontent.com/102830741/215629332-ef223dbf-26c9-4724-8ed2-b0007b02bfed.png)

## Depoimento

Foi um projeto extreamente desafiador, que me fez questionar até se eu realmente devo ser desenvolvedor kkkkk Mas nada é impossível e continuei tentando até conseguir. O resultado não foi diferente, consegui resolver o problema de integração de api e depois eu já estava me senti preparado para lidar com os próximos problemas.
Foram 10 dias de projeto, muito aprendizado, muitas emoções que senti aqui! Uma das coisas que mais achei bacana e busquei preservar, foi a evolução que tive com a integração de api. Foram necessárias 2 api's e a primeira foi a Via Cep, onde eu tive muita dificuldade e toda a manipulação do DOM foi feita no arquivo typescript. Já na segunda api de rastreamento de encomenda, busquei exibir os dados criando uma variável pública contendo os eventos de rota, utilizando o *ngFor para criar li's no HTML contendo cada evento e valores dinâmicos a partir da variável pública. Também utilizei *ngIf e ng-templates para verificar o array subStatus onde contém a origem e o destino, caso o objeto esteja em rota. Estando vazio, o conteúdo exibido será o local onde a encomenda se encontra.

## Contato

<a href="mailto:felipe.lima0160@gmail.com">![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>  <a href="https://wa.me/5521979926096">![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)</a>  <a href="https://www.linkedin.com/in/felipe-lima01/">![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> 

## Desenvolvedores

 | [<img src="https://avatars.githubusercontent.com/u/102830741?s=400&u=eb0ed821d5deeaaac9a910f737ce38ddfda2f3a9&v=4" width=115><br><sub>Felipe Pereira de Lima</sub>](https://github.com/LipePLima) 
 | :---: |
