*"Esse tutorial foi baseado em um sistema operacional windows 10, mudando pouca coisa sobre instalação e configuração em outros sistemas como Linux e Mac"*

### Requerimentos


***1º*** instalar o **Node.js** na sua máquina escolhendo a versão do seu sistema operacional, site para download: https://nodejs.org/ escolha a versão **LTS**, a instalação do Node e bem simples, pode clicar em **Next** marcar a caixinha de aceito de termo **Next**, **Next**, **Next**, **Next** até aparecer o botão de **Install**, após isso aguardamos a instalação do NODE.js e clicaremos no botão **Finish**.


***2º*** instalar o **Postgress** na máquina escolhendo a versão do seu sistema operacional  site para download: https://www.postgresql.org/ clicar no botão download, selecione a versão do seu sistema operacional, clique em "Download the installer"  de preferência para a versão 13 do postgres ou a versão mais recente do seu sistema operacional, clique em **download** para fazer o download do instalador, após o download inicie o instalador:

***1ª tela -*** tela de setup clicaremos em **Next**;
***2ª tela -*** sobre o diretório de instalação clicaremos em **Next**;
***3ª tela -*** sobre os componentes do banco clicaremos em **Next**;
***4ª tela*** - sobre diretório data clicaremos em **Next**;
***5ª tela*** - sobre password precisamos colocar a senha do usurário postgres nos dois campos em branco a senha é: "***teste***" assim que colocar a senha teste "***teste***" nos dois campos clicaremos em em **Next**;
***6ª tela*** - sobre a porta onde o banco vai rodar deixaremos o padrão e clicaremos em **Next**;
***7ª tela*** - podemos deixar como default locale e clicar em **Next**;
***8ª tela*** - sobre o sumario da instalação clicaremos em **Next**;
***9ª tela*** -  tela onde tudo esta pronto para instalação clicaremos em **Next**;

"*vamos aguardar a instalação do **postgres** ser concluída..*"

Após a instalação do **postgres** vai aparecer a nossa ***ultima tela*** onde vamos desmarcar a opção "***Stack BUilder may be used to download and install additional tools, drivers and applications to complement your PostgreSQL installation***" e clicar em **Finish**;


3º instalar o **DBeaver** na máquina escolhendo a versão do seu sistema operacional, site para download: https://dbeaver.io clique em **Download**, selecione a versão do seu sistema operacional e baixe a versão **Installer**, execute o instalador, e a primeira tela aperte **ok**, segunda tela seguinte marque a opção para aceitar os termos e clique em **Seguinte**, clique em **ok** novamente, **Seguinte**, **Aceito**, **Seguinte**, **Seguinte**, **Instalar**, após isso clique em **Terminar.**


4º instalar o **Visual Studio Code** na máquina escolhendo a versão do seu sistema operacional site para download: https://code.visualstudio.com/ a instalação desse programa e bem simples, precisamos apenas
clicar em aceitar os termos na primeira tela, e após isso clicar em **Próximo**, **Próximo**, **Instalar**, **Concluir**.


### CONFIGURAÇÂO


***1º*** Abriremos o **DBeaver** podem clicar na primeira tela de tips/dicas em **close**, ***iremos clicar no botão na parte superior onde tem o desenho de uma tomada "new database connection"*** aqui é onde iremos visualizar
as informações do nosso banco de dados. Após clicar na tomada vamos selecionar o nosso banco de dados  o **postgreSQL** que foi nossa segunda instalação em requisitos, após selecionar **postgreSQL** clicaremos no botão **Next**,"*as vezes o programa pode pedir para fazer download do driver se o seu sistema operacional não tiver e só clicar em* **download"**, na próxima nova tela devemos inserir a nossa senha no "campo **Password**" onde esta em  branco colocaremos "**teste**" após digitar a senha clicaremos no botão **Finish**. o sistema vai criar o nosso banco com o nome "postgres" que já e o padrão, esse e o lugar onde salvaremos nossas pesquisas.


***2º*** no diretório do github em https://github.com/dsleite360/iex-project iremos baixar o projeto clicando no botão **Code** o mesmo se destaca na pagina pela sua cor ser  verde. Após clicarmos no botão iremos selecionar a ultima opção "**Download ZIP**" geralmente esse arquivo e salvo na pasta *\downloads* do seu computador, vamos ate a pasta onde foi feito o download do arquivo, achando o arquivo vamos extrair o mesmo, podemos clicar com o botão direito do mouse sobre o arquivo ***iex-project-master*** e clicar na opção "***extrair tudo***"
escolha onde você deseja salvar o projeto e clique no botão **Extrair**.


***3º*** agora com a pasta **iex-project-master** extraída, dentro dela existem duas pastas do nosso sistema a pasta  backend com o nome de: **iex-backend** e a pasta de frontend com o nome: **iex-backend** , precisamos acessar a raiz da pasta **iex-backend**   colocando o arquivo **.env** que foi disponibilizado esse arquivo e onde ficam as senhas e configurações sensíveis do nosso sistema vamos copiar esse arquivo **.env** acessar a no pasta do backend: **iex-backend** e colar o **.env** na raiz da pasta.
**OBS:** "Esse arquivo pode paracer estranho mas ele tem que pussuir esse nome exato ***".env"*** sim ele tem um ***"."*** na frente do ***"env"*** assim formando ***.env*** "


***4º "configurando o backend":*** Vamos abrir o editor de código, aqui iremos utilizar o ***VSCODE*** que instalamos no requisito 4º, após abrir ***VSCODE*** clicaremos na parte superior esquerda em  ***Arquivo***>***Abrir Pasta...*** iremos navegar ate onde nossa pasta do backend lembra do nome ? ***iex-backend*** quando acharmos a nossa pasta do backend clicaremos no botão "***Selecionar pasta***", "*pode ser que  aparecer alguma mensagem para confiar no autor do projeto se aparecer iremos clicar em **sim, confiamos***" após selecionar a pasta ***iex-backend*** chegou a hora de instalar o nosso projeto e rodar o mesmo no ***VSCODE*** clique em ***Terminal***>***Novo Terminal***  vai abrir uma janela dentro do ***VSCODE*** esse é o nosso ***terminal de comandos***, clicaremos nele e iremos digitar com o teclado o comando "***npm install***" após digitar aperte a tecla ***Enter*** do teclado,  o terminal vai começar a instalar as dependências do projeto esse processo pode demorar uma pouco assim que terminar a instalação poderemos usar o nosso ***terminal de comandos*** , agora no ***terminal de comandos*** vamos digitar o seguinte comando "***npm start***" se tudo estiver configurado corretamente, o sistema de backend ja vai estar rodando dentro do ***VSCODE***  podemos ver o terminal com algumas linhas escritas em amarelo, isso indica que tudo esta funcionando, ***"PRECISAMOS DEIXAR O VSCODE MINIMIZADO E ABRIR OUTRA INSTÂNCIA DO VSCODE"***

                                      ***OBS MUITO IMPORTANTE ABAIXO:***

   ***COMO INFORMADO NO FINAL DO 4º PASSO E MUITO IMPORTANTE DEIXAR O VCODE RODANDO COM O COMANDO "NPM START" ESSE COMANDO QUE FAZ O NOSSO BACKEND FUNCIONAR, AGORA PARA COMEÇAR O PASSO 5 VAMOS ABRIR UM NOVO VSCODE, VAMOS PROCURAR ELE NO WINDOWS E ABRIR ASSIM FICANDO COM 2 VSCODE EM FUNCIONAMENTO AO MESMO TEMPO*** 

                                           ***FIM DA OBS***

***5º "configurando o frontend":*** agora iremos abrir uma nova instância do **VSCODE**  lembrando que já temos um**VSCODE** aberto! Iremos abrir outro, procure o atalho do mesmo no  Windows podemos ir no menu iniciar onde tem o ícone/logo do Windows e digitar "***Visual Studio Code***" clique em cima para abrir uma nova instância do **VSCODE**,  após abrir um novo VSCODE vamos praticamente repetir o ***passo nº 4***, vamos clicar na parte superior esquerda em  ***Arquivo***>***Abrir Pasta...*** iremos navegar ate onde nossa pasta do frontend -> ***iex-frontend*** quando acharmos a nossa pasta do frontend clicaremos no botão "***Selecionar pasta***", "*pode ser que  aparecer alguma mensagem para confiar no autor do projeto se aparecer iremos clicar em **sim, confiamos***" após selecionar a pasta ***iex-frontend*** chegou a hora de instalar o nosso projeto e rodar o mesmo no ***VSCODE*** clique em ***Terminal***>***Novo Terminal***  vai abrir uma janela dentro do ***VSCODE*** esse é o nosso ***terminal de comandos***, clicaremos nele e iremos digitar com o teclado o comando "***npm install***" após digitar aperte a tecla ***Enter*** do teclado,  o terminal vai começar a instalar as dependências do projeto frontend esse processo pode demorar uma pouco assim que terminar a instalação poderemos usar o nosso ***terminal de comandos*** , agora no ***terminal de comandos*** vamos digitar o seguinte comando "***npm start***" se tudo estiver configurado corretamente, após isso o próprio sistema já devera ser aberto no seu navegar para uso, se o mesmo não abrir automaticamente, você precisar abrir o seu navegador de internet, por exemplo o google chrome e digitar na URL: http://localhost:3000/


### RESUMO SOBRE O SISTEMA

   *O sistema e e baseado na api IEX onde inserimos um símbolo no input do sistema e quando clicamos no botão buscar o sistema verifica se esse símbolo já existe no banco de dados, se não existir o sistema vai consumir a API da IEX e salvar alguns campos com o nome da empresa, o símbolo de pesquisa, o o ultimo preço da cotação e a hora que foi feita a cotação e salva no banco de dados, agora se o símbolo pesquisado já existir no banco de dados o sistema pega as
informações do banco e faz uma pequena checagem se essa informação salva no banco de já possuem uma diferença de 15 minutos se tiver ele faz uma nova consulta na API para trazer novos valores e salvar no banco evitando assim consumo desnecessários da API da IEX, o sistema também disponibiliza um status em tempo real via banco de dados onde a cada 10 segundos ele faz uma consulta no banco de dados, se existir símbolos salvos no banco ele vai mostra em tela e atualizando os dados se existir alguma mudança nos dados do banco.*

### SOBRE O SISTEMA

frontend desenvolvido em: ***REACTJS***
backend desenvolvido em ***NESTJS***
