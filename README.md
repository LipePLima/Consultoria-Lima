# Consultoria Lima | Lima Consulting

 - [Etapas](#etapas);
 - [Descrição](#descrição);
 - [Tecnologias](#tecnologias);
 - [Imagens](#imagens);
 - [Contato](#contato);
 - [Desenvolvedores](#desenvolvedores);

## Descrição | Description

PT-BR: Consultoria Lima tem como propósito localizar o endereço de CEP de sua preferência. Também localizar e informar o status de sua encomenda! 
O projeto foi criado com o propósito de aprender a integrar API e exibir os dados de maneira dinâmica, também pude aprender a utilizar rotas para exibir o conteúdo de CEP quando clicado o botão CEP, e exibir o conteúdo de rastreamento quando clicado o botão Rastreamento. Tudo isso em uma única página!

**Observação**: A api de rastreamento possui algumas limitações fazendo com que os eventos não apareçam por erro de muitas requisições. Por hora, continue tentando até que as informações apareçam! Estou trabalhando para que esse problema seja resolvido.

**Nota de atualização**: No componente Rastreamento, foram feitas algumas alterações: Foi criado uma função para validação de código de rastreamento, retirando esta responsabilidade da função getEncomenda; Para uma melhor orientação ao usuário quando a API retornar erro. Criei uma nova consulta, desta vez utilizando o método Catch() para retornar em JSON o erro com o tempo para uma nova tentativa. Foi feito o tratamento necessário para informar o usuário em quanto tempo será a nova tentativa utilizando a função setInterval.

EN-US: Consultoria Lima aims to locate the ZIP code of your preference. It also locates and informs you about the status of your order!
The project was created to learn how to integrate APIs and display data dynamically. I also learned to use routes to display ZIP code content when the ZIP button is clicked and to show tracking content when the Tracking button is clicked. All of this on a single page!

**Note**: The tracking API has some limitations that may cause events to not appear due to too many requests. For now, keep trying until the information appears! I'm working on resolving this issue.

**Update Note**: In the Tracking component, some changes were made: A function was created for validating the tracking code, removing this responsibility from the getEncomenda function to better guide the user when the API returns an error. I created a new query using the catch() method to return the error in JSON format with the time for a new attempt. The necessary handling was done to inform the user how long until the next attempt using the setInterval function.

## Etapas | Steps

**Desktop Firt**

 - [x] Cabeçalho feito | Header created;

 - [x] Corpo do site com a opção CEP | Body of the site with the ZIP option;

 - [x] Corpo do site com a opção Rastreamento | Body of the site with the Tracking option;

 - [x] Rodapé com opções(CEP e Rastramento) e Copyright | Footer with options (ZIP and Tracking) and Copyright;

**Mobile**

 - [x] Cabeçalho responsivo | Responsive header;

 - [x] Corpo do site com a opção CEP responsivo | Body of the site with responsive ZIP option;

 - [x] Corpo do site com a opção Rastreamento responsivo | Body of the site with responsive Tracking option;

 - [x] Rodapé responsivo | Responsive footer;

 - [x] Tornar a tabela de CEP responsiva | Make the ZIP table responsive;

 *Funcionalidades | Functionalities*

 - [x] Inserir CEP no input e ao clicar no botão "Buscar" mostrar informações do cep no console | Enter ZIP in the input and click the "Search" button to show ZIP information in the console;

 - [x] Criar tabela com informações do CEP | Create a table with ZIP information;

 - [x] Organizar Informações do CEP na tabela | Organize ZIP information in the table;

 - [x] Validar dados do input de CEP | Validate ZIP input data;

 - [x] Localizar encomenda | Locate order;

 - [x] Exibir rastreamento de encomenda | Display order tracking;

## Tecnologias | Technologies

 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) 

Hospedagem | Accommodation:

 ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Imagens | Images

<h3> :camera: Página Desktop | Desktop Page</h3>

![Desktop CEP](https://user-images.githubusercontent.com/102830741/215628938-9e527f86-37ff-442f-8487-8cd4c31f4b44.png)
![Desktop Rastreamento](https://user-images.githubusercontent.com/102830741/215629045-a356ac4f-7c8b-487b-9d3d-15b132b539a8.png)

<h3> :camera: Página Mobile | Mobile Page</h3>

![Mobile CEP](https://user-images.githubusercontent.com/102830741/215629320-73afdb80-0ca2-44df-896a-035bc98e08a9.png)
![Mobile Rastreamento](https://user-images.githubusercontent.com/102830741/215629332-ef223dbf-26c9-4724-8ed2-b0007b02bfed.png)

## Depoimento | Testimonial

PT-BR: Foi um projeto extreamente desafiador, que me fez questionar até se eu realmente devo ser desenvolvedor kkkkk Mas nada é impossível e continuei tentando até conseguir. O resultado não foi diferente, consegui resolver o problema de integração de api e depois eu já estava me senti preparado para lidar com os próximos problemas.
Foram 10 dias de projeto, muito aprendizado, muitas emoções que senti aqui! Uma das coisas que mais achei bacana e busquei preservar, foi a evolução que tive com a integração de api. Foram necessárias 2 api's e a primeira foi a Via Cep, onde eu tive muita dificuldade e toda a manipulação do DOM foi feita no arquivo typescript. Já na segunda api de rastreamento de encomenda, busquei exibir os dados criando uma variável pública contendo os eventos de rota, utilizando o *ngFor para criar li's no HTML contendo cada evento e valores dinâmicos a partir da variável pública. Também utilizei *ngIf e ng-templates para verificar o array subStatus onde contém a origem e o destino, caso o objeto esteja em rota. Estando vazio, o conteúdo exibido será o local onde a encomenda se encontra.

EN-US: It was an extremely challenging project that made me question whether I really should be a developer, haha! But nothing is impossible, and I kept trying until I succeeded. The outcome was no different; I managed to solve the API integration problem, and afterward, I felt prepared to tackle the next challenges.
It took 10 days to complete the project, filled with a lot of learning and emotions! One of the things I found most rewarding and tried to preserve was the growth I experienced with API integration. I used two APIs, the first being Via Cep, where I faced many difficulties, and all the DOM manipulation was done in the TypeScript file. 
For the second API, the order tracking, I aimed to display the data by creating a public variable containing the route events. I used *ngFor to generate list items (li's) in the HTML that contained each event and dynamic values from the public variable. I also utilized *ngIf and ng-templates to check the subStatus array, which contains the origin and destination, displaying the current location of the order if the object is in transit. If it's empty, the displayed content will be where the order is located.

## Contato | Contact

<a href="mailto:felipe.lima0160@gmail.com">![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>  <a href="https://wa.me/5521979926096">![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)</a>  <a href="https://www.linkedin.com/in/felipe-lima01/">![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> 

## Desenvolvedores | Developers

 | [<img src="https://avatars.githubusercontent.com/u/102830741?s=400&u=eb0ed821d5deeaaac9a910f737ce38ddfda2f3a9&v=4" width=115><br><sub>Felipe Pereira de Lima</sub>](https://github.com/LipePLima) 
 | :---: |
