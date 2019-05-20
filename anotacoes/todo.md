# TODO

# CAPÍTULO 3 - Exercício: CSS e Header Component
* Colocar CSS do Material Design no `angular.json`.
* Trocar implementação do Material Design. O Material Design Lite foi sucedido pelo Material Components for de Web.
    - https://github.com/google/material-design-lite#limited-support
    - https://github.com/material-components/material-components-web
* **[DONE]** Refatorar o código para decompor o `HeaderComponent` em:
    - `MenuComponent`
    - `HeaderComponent`
    - `EmailSearchComponent`
* **[DONE]** Adicionar um último passo para orientar a refatoração feita no `HeaderComponent`.
* Remover o `EmailSearchComponent` do template do `HeaderComponent` de modo que ele só apareça na caixa de entrada.
* Revisar arquivos do curso para esse exercício.

# Capítulo 4 - Exercício: Dando vida para o menu mobile
* **[DONE]** Refatorar o código para contemplar as refatorações feitas.
* **[DONE]** Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.

# Capítulo 5 - Exercício: formulário para enviar email
* **[DONE]** Transformar o fab num componente.
* **[DONE]** Transformar o `NewEmailForm` num componente `EmailFormComponent`.
    - **[DONE]** Colocar o CSS do componente `EmailForm` especificamente na pasta desse componente e não de forma global no `angular.json`.
* Transformar o `tooltip` em uma diretiva.
* **[DONE]** Revisar o código para contemplar as refatorações feitas.
* **[SUGESTÃO]** Quebrar esse exercício ou criar passos novos para contemplar a criação dos componentes `FloatingActionButtonComponent` e `EmailFormComponent`.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.

# Capítulo 6 - Exercício: Enviando emails do jeito mais simples do universo
* **[DONE]** Revisar o código para contemplar as refatorações feitas.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.

# Capítulo 7 - Exercício: Validação e variáveis de template
* **[DONE]** Revisar o código para contemplar as refatorações feitas.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.

# Capítulo 8 - Exercício: Roteamento simples
* **[DONE]** Revisar o código para contemplar as refatorações feitas.
* **[SUGESTÃO]** Quebrar em dois exercícios. ( O exercício compreende 2 motivações diferentes! Na primeira parte é preciso debater sobre a granularidade de componentes comuns e componentes que representam páginas, bem como a organização diferenciada desses componentes dentro do projeto. Enquanto que na segunda parte, é preciso conversar sobre a forma como o Angular trabalha para rotear a aplicação. )
    - Parte 1: Foco na criação dos componentes de página.
        - Não utilizar a palavra `modules` como nome da pasta onde ficarão os componentes de página. Os alunos se confundem com os módulos do Angular. Talvez, o melhor seja seguir a convenção do Ionic que utiliza a palavra `pages` e cria componentes com o padrão `NomeDaPaginaPage` no arquivo `nome-da-pagina.page.ts`.
    - Parte 2: Foco na criação do módulo de roteamento.
        - Módulo de roteamento já criado como um `NgModule` e se chamando `app-routing.module.ts`.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.

# Capítulo 9 - Exercício: Links para as rotas e redirecionamento
* **[DONE]** Revisar o código para contemplar as refatorações feitas.
* **[IMPORTANTE]** Adicionar `/` em todas as diretivas `routerLink` do exercício.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.
* **[SUGESTÃO]** Após esse exercícios adicionar um exercício novo já fatiando a aplicação em submódulos.

# Capítulo 10 - Exercício: Cadastro de contas - um componente para formulários mais eficiente
* Revisar o código para contemplar as refatorações feitas.
* Revisar o passo a passo do exercício para contemplar as refatorações feitas.
* Revisar arquivos do curso para esse exercício.
* **[SUGESTÃO]** O exercício diz que o componente `cmail-form-group`serve tanto para `input` quanto para `textarea` contudo só faz `querySelector('input')`. O ideal é remover a citação ao `textarea` ou corrigir esse problema no `querySelector()`.
* **[SUGESTÃO]** Remover o `required` dos campos do formulário de cadastro de usuário, afinal de contas a validação seria orientada a componente.

# IDEIAS:
* Pipe para truncar o texto do corpo do email e adicionar reticências ao final.
    - O Angular por padrão já disponibiliza o pipe `slice`.