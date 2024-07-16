Para chegar ao codigo de automações, é só seguir esse caminho entre as pastas que estão aqui no git cypress\e2e\step_definitions.
Na pasta step_definitions ja consegue encher a pasta teste.feature onde é a parte do BDD. E dentro da pagina Teste, voce encontra o arquivo teste.js, que é aonde se encontra o código ja com BDD.

Para rodar os testes precisa de alguns pré requisitos como :

O aplicativo Visual Studio Code, , caso não tenha, basta acessar o link https://code.visualstudio.com/download e seguir o passo a passo para realizar o download.
O Git, voce pode verificar se ja tem o git instalado na sua maquina usando, abrindo o terminal e digitando "git --version", caso não tenha , basta acessar https://git-scm.com/downloads e realizar o download

Após a instalação dos aplicativos voce criara uma pasta onde deseja colocar os seus projetos, abrira o aplicativo visual studio code, e na opção "File - Open Folder" voce colocara a pasta criada.

Após abrir a pasta no VS code, na opção "View - Terminal" ou teclando 'CTRL+', voce abrirá o terminal. Abrindo o terminal voce irá digitar "git clone (https://github.com/joaopdias21/Amazon)" que isso ira clonar o projeto na sua maquina.

Após clonar projeto se não tiver cypress instalado na maquina, no terminal digite "npm install cypress --save-dev" e espere instalar o cypress.

Após instalado o cypress, basta dar o comando "npx cypress open", que vai abrir a interface grafica do cypress em modo interativo. após o comando deve aparecer essa tela:
![image](https://github.com/joaopdias21/bcodex/assets/85888398/8f9cf964-9b8a-44fc-906d-6bfbff06f57f), clicando em E2E Testing, voce escolhera o navegador que deseja realizar o teste. Após escolher o navegador de sua preferencia irá aparacer os arquivos de teste para realizar a automação, com isso, basta clicar no arquivo que deseja rodar a automação, que irá rodar.

